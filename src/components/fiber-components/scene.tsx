'use client'
import {
    Environment,
    AdaptiveDpr,
    BakeShadows,
    Bvh,
    Preload,
    Html,
    PerspectiveCamera
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import ModelGroup from '@/components/fiber-components/model-group'

export default function Scene() {
    return (
        <Canvas
            fallback={<div>Looks like your device doesn’t support WebGL!</div>}
            className="!m-0 !p-0 block w-full h-full !mr-0 absolute top-0"
            style={{
                margin: 0,
                padding: 0,
                display: 'block',
                width: '100%',
                height: '100%'
            }}
            performance={{ min: 1 }}
            shadows
        >
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />

            <Suspense
                fallback={
                    <Html center>
                        <h1 className="whitespace-nowrap text-lg">
                            Loading content... Please be patient :)
                        </h1>
                    </Html>
                }
            >
                <AdaptiveDpr pixelated />
                <BakeShadows />
                <Environment
                    resolution={512}
                    files="../overcast_soil_puresky_1k.hdr"
                    environmentIntensity={1}
                />
                <Bvh firstHitOnly>
                    <ModelGroup />
                </Bvh>
                <Preload all />
            </Suspense>
        </Canvas>
    )
}
