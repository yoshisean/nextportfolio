'use client'
import {MeshTransmissionMaterial} from '@react-three/drei'
import {useEffect, useMemo, useRef} from "react";
import {LinearFilter, RepeatWrapping, Texture, TextureLoader} from "three";
import {useFrame, useLoader} from "@react-three/fiber";
import * as THREE from 'three';
import {useControls} from 'leva';

function CausticsPlane() {
    const meshRef = useRef<THREE.Mesh>(null);
    const currentFrameRef = useRef(0);

    const texturePaths = useMemo(() => {
        return Array.from({length: 240}, (_, i) =>
            `/fiber/caustics/02B_Caribbean_Caustics_Deep_FREE_SAMPLE_${i.toString().padStart(4, '0')}.jpg`
        );
    }, []);

    const textures = useLoader(TextureLoader, texturePaths);

    const configuredTextures = useMemo(() => {
        textures.forEach(texture => {
            texture.wrapS = texture.wrapT = RepeatWrapping;
            texture.repeat.set(0.7, 0.7);
            texture.minFilter = LinearFilter;
            texture.magFilter = LinearFilter;
            texture.anisotropy = 16;
        });
        return textures;
    }, [textures]);

    useFrame(({ clock }) => {
        const frame = Math.floor(clock.elapsedTime * 24) % 240;

        if (frame !== currentFrameRef.current && meshRef.current) {
            currentFrameRef.current = frame;
            const material = meshRef.current.material as THREE.MeshBasicMaterial;
            material.map = configuredTextures[frame];
            material.needsUpdate = true;
        }
    });

    // Initial map
    useEffect(() => {
        if (meshRef.current && configuredTextures[0]) {
            const material = meshRef.current.material as THREE.MeshBasicMaterial;
            material.map = configuredTextures[0];
        }
    }, [configuredTextures]);

    // const color = useMemo(() => new THREE.Color(colorTint), [colorTint]);

    return (
        <mesh
            ref={meshRef}
            position={[0, -0.35, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
        >
            <planeGeometry args={[1.2, 0.7]} />
            <meshBasicMaterial
                transparent
                opacity={0.3}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
                // color={color}
            />
        </mesh>
    );
}

export default function Aquarium() {
    return (
        <group>
            <mesh>
                <boxGeometry args={[1.2, 0.7, 0.7]}/>
                <MeshTransmissionMaterial
                    backside={true}
                    samples={4}
                    thickness={0.1}
                    transmission={1}
                    ior={1.52}
                    chromaticAberration={0.025}
                    roughness={0.05}
                />
            </mesh>
            <CausticsPlane />
        </group>
    )
}