import React, {useLayoutEffect, useRef, useState} from "react";
import {Group, Mesh, Vector3} from "three";
import {gsap} from "gsap";
import {useFrame} from "@react-three/fiber";
import {Text} from "@react-three/drei";
import Char from "@/components/fiber-components/text/character";

export default function SplitWord({word}: { word: string }) {
    const [charOffsets, setCharOffsets] = useState<number[]>([])
    const [totalWidth, setTotalWidth] = useState(0)
    const charRefs = useRef<(Mesh | null)[]>([])

    const textGroupRef = useRef<Group>(null!);
    const originalPositions = useRef<Vector3[]>([]);

    const fontUrl = '/Inter/Inter-VariableFont_opsz,wght.ttf'
    const fontSize = 1

    const handleSync = (troika: {
        textRenderInfo: { glyphBounds: Float32Array };
        geometry: { boundingBox: { getSize: (arg0: Vector3) => void } }
    }) => {
        const info = troika.textRenderInfo
        if (!info || !info.glyphBounds) return

        const bounds = info.glyphBounds
        // bounds is an array where each bound is of length 4, given by x0, x1, y0, y2
        const glyphCount = bounds.length / 4
        const offsets: number[] = []

        for (let i = 0; i < glyphCount; i++) {
            const x1 = bounds[i * 4]
            const x2 = bounds[i * 4 + 2]
            offsets.push((x1 + x2) / 2)
        }

        const size = new Vector3()
        troika.geometry.boundingBox?.getSize(size)
        setTotalWidth(size.x)
        setCharOffsets(offsets)
    }

    useLayoutEffect(() => {
        charRefs.current.forEach((mesh, i) => {
            if (mesh) {
                originalPositions.current[i] = mesh.position.clone();
            }
        });

        const valid = charRefs.current.filter((m): m is Mesh => !!m)
        if (!valid.length) return

        gsap.fromTo(
            valid.map(c => c.position),
            {y: -1},
            {y: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out'}
        )
        gsap.fromTo(
            valid.map(c => c.material),
            {opacity: 0},
            {opacity: 1, duration: 0.4, stagger: 0.05, ease: 'power2.out'}
        )
    }, [word, charOffsets])

    useFrame((state) => {
        if (!textGroupRef.current) return;

        const repulsionRadius = 3;
        const repulsionStrength = 1.5;

        const pointer3D = new Vector3(
            (state.pointer.x * state.viewport.width) / 2,
            (state.pointer.y * state.viewport.height) / 2,
            0
        );
        textGroupRef.current.worldToLocal(pointer3D);

        charRefs.current.forEach((mesh, i) => {
            if (!mesh || !originalPositions.current[i]) return;
            const homePosition = originalPositions.current[i];
            let targetPosition = homePosition;

            const distance = mesh.position.distanceTo(pointer3D);
            if (distance < repulsionRadius) {
                const pushDirection = mesh.position.clone().sub(pointer3D).normalize();
                const pushStrength = (1 - distance / repulsionRadius) * repulsionStrength;

                targetPosition = homePosition.clone().add(pushDirection.multiplyScalar(pushStrength));
            }

            mesh.position.lerp(targetPosition, 0.1);
        });
    });

    return (
        <group scale={0.1}>
            <Text
                font={fontUrl}
                fontSize={fontSize}
                visible={false}
                anchorX="left"
                onSync={handleSync}
            >
                {word}
            </Text>

            {charOffsets.length > 0 && (
                <group position-x={-totalWidth / 2} ref={textGroupRef}>
                    {word.replace(/ /g, "").split('').map((char, i) =>
                        <Char
                            key={`${char}-${crypto.randomUUID()}`}
                            char={char}
                            position={[charOffsets[i] ?? 0, 0, 0]}
                            fontUrl={fontUrl}
                            fontSize={fontSize}
                            refCallback={(el) => (charRefs.current[i] = el)}
                        />
                    )}
                </group>
            )}
        </group>
    )
}