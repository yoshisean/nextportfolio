import React, { useRef, useState, useLayoutEffect, useEffect } from 'react'
import { Text } from '@react-three/drei'
import { gsap } from 'gsap'
import { Mesh, Vector3 } from 'three'

export function SplitWord({ word }: { word: string }) {
    const [charOffsets, setCharOffsets] = useState<number[]>([])
    const [totalWidth, setTotalWidth] = useState(0)
    const charRefs = useRef<(Mesh | null)[]>([])

    const fontUrl = '/Inter/Inter-VariableFont_opsz,wght.ttf'
    const fontSize = 1

    const handleSync = (troika: {
        textRenderInfo: {glyphBounds: Float32Array};
        geometry: { boundingBox: { getSize: (arg0: Vector3) => void }}
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
        const valid = charRefs.current.filter((m): m is Mesh => !!m)
        if (!valid.length) return

        gsap.fromTo(
            valid.map(c => c.position),
            { y: -1 },
            { y: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out' }
        )
        gsap.fromTo(
            valid.map(c => c.material),
            { opacity: 0 },
            { opacity: 1, duration: 0.4, stagger: 0.05, ease: 'power2.out' }
        )
    }, [word, charOffsets])

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
                <group position-x={-totalWidth / 2}>
                    {word.replace(/ /g, "").split('').map((char, i) => (
                        <Text
                            key={i}
                            ref={(el) => {charRefs.current[i] = el}}
                            anchorX="center"
                            position={[charOffsets[i] ?? 0, 0, 0]}
                            font={fontUrl}
                            fontSize={fontSize}
                            color="white"
                            material-transparent
                            material-opacity={0} // start invisible for GSAP
                        >
                            {char}
                        </Text>
                    ))}
                </group>
            )}
        </group>
    )
}

export default function NameText() {
    const [index, setIndex] = useState(0)
    const words = [
        'Sean Yoshihara',
        'Developer',
        'Designer',
        'Engineer',
    ]

    useEffect(() => {
        const id = setInterval(() => setIndex(i => (i + 1) % words.length), 5000)
        return () => clearInterval(id)
    }, [words.length])

    return <SplitWord word={words[index]} />
}
