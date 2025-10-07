'use client'
import {
    Environment,
    AdaptiveDpr,
    Bvh,
    Preload,
    Html,
    PerspectiveCamera, AdaptiveEvents, RandomizedLight
} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import { Suspense } from 'react'
import ModelGroup from '@/components/fiber-components/model-group'
import {
    EffectComposer,
    Noise,
    DepthOfField,
} from '@react-three/postprocessing'

const isCoarsePointer = typeof window !== 'undefined' && matchMedia('(pointer: coarse)').matches

export default function Scene() {
    return (
        <Canvas
            fallback={<div>Looks like your device doesn’t support WebGL!</div>}
            className="w-full h-full absolute top-0"
            dpr={[1, 1.5]}
            // gl={{ alpha: false, antialias: false,
            //     depth: false, stencil: false,
            //     powerPreference: 'high-performance' }}
        >
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
            <color attach="background" args={['#ffffff']}/>

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
                <AdaptiveEvents />
                <RandomizedLight radius={10} ambient={0.5} intensity={Math.PI} position={[2.5, 8, -2.5]} bias={0.001} />
                <Environment
                    resolution={256}
                    files="../fiber/overcast_soil_puresky_1k.hdr"
                    environmentIntensity={0.7}
                />

                <Bvh firstHitOnly>
                    <ModelGroup />
                </Bvh>
                <EffectComposer
                    multisampling={0} resolutionScale={isCoarsePointer ? 0.6 : 1}
                    // enableNormalPass={false} stencilBuffer={false}
                >
                    <DepthOfField
                        focusDistance={0}
                        focalLength={0.02}
                        height={isCoarsePointer ? 240 : 480}
                        bokehScale={isCoarsePointer ? 1 : 2}
                    />
                    <Noise opacity={0.02} />
                </EffectComposer>

                <Preload all />
            </Suspense>
        </Canvas>
    )
}
