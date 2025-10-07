'use client'
import { MeshTransmissionMaterial, RoundedBox, useTexture } from '@react-three/drei'
import {AdditiveBlending, MeshBasicMaterial, RepeatWrapping} from 'three'
import { useFrame } from '@react-three/fiber'
import {useEffect, useRef} from 'react'

export default function Aquarium() {
    const causticsTex = useTexture('/fiber/caustics.jpg')
    const matRef = useRef<MeshBasicMaterial>(null)

    // ensure repeat wrapping
    useEffect(() => {
        causticsTex.wrapS = causticsTex.wrapT = RepeatWrapping
        causticsTex.repeat.set(2, 2)  // increase tiling density
    }, [causticsTex])

    useFrame((state) => {
        // move texture slowly over time
        const t = state.clock.getElapsedTime()
        causticsTex.offset.x = (t * 0.03) % 1
        causticsTex.offset.y = (t * 0.015) % 1
        causticsTex.needsUpdate = true
    })

    return (
        <group>
            <RoundedBox args={[1.2, 0.7, 0.7]} radius={0.015}>
                <MeshTransmissionMaterial
                    backside
                    samples={4}
                    thickness={0.1}
                    transmission={1}
                    ior={1.33}
                    chromaticAberration={0.025}
                    roughness={0.05}
                />
            </RoundedBox>

            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.35, 0]}>
                <planeGeometry args={[1.2, 0.7]} />
                <meshBasicMaterial
                    ref={matRef}
                    map={causticsTex}
                    color="#ffffff"
                    transparent
                    opacity={0.25}
                    blending={AdditiveBlending}
                    depthWrite={false}
                />
            </mesh>
        </group>
    )
}
