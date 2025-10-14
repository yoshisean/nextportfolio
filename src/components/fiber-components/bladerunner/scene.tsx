'use client'
import {
    AdaptiveDpr,
    Bvh,
    Preload,
    Html,
    PerspectiveCamera, AdaptiveEvents, Environment, GizmoViewport, GizmoHelper, CameraControls, Grid, ArcballControls,
    OrbitControls
} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import { Suspense } from 'react'
import {
    EffectComposer,
    Noise,
} from '@react-three/postprocessing'
import {WallaceRoomOptimized} from "../../../../public/fiber/bladerunner/Wallace_room_opt";


export default function BladeRunnerScene() {
    return (
        <Canvas
            fallback={<div>Looks like your device doesn’t support WebGL!</div>}
            className="w-full h-full absolute top-0"
            camera={{ position: [0, 0, 5], fov: 50 }}
            dpr={[1, 1.5]}
            gl={{ alpha: false, antialias: false,
                depth: false, stencil: false,
                powerPreference: 'high-performance' }}
        >


            {/*<PerspectiveCamera makeDefault position={[0, -9.35711616, 1.37608056]} rotation={[87,0,0]} fov={27} />*/}
            {/*<color attach="background" args={['#ffffff']}/>*/}

            <Suspense
                fallback={
                    <Html center>
                        <h1 className="whitespace-nowrap text-lg">
                            Loading content...
                        </h1>
                    </Html>
                }
            >

                <ambientLight intensity={1} />
                <directionalLight position={[2, 2, 2]} />
                <AdaptiveDpr pixelated />
                <AdaptiveEvents />

                <Environment
                    resolution={256}
                    files="../fiber/fish/overcast_soil_puresky_1k.hdr"
                    environmentIntensity={0.7}
                />

                <Grid/>

                <Bvh firstHitOnly>
                    {/*<WallaceRoomOptimized/>*/}
                    <mesh>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color={'orange'} />
                    </mesh>
                </Bvh>

                <GizmoHelper alignment="bottom-right" margin={[80, 80]} renderPriority={2}>
                    <GizmoViewport axisColors={["hotpink", "aquamarine", "#3498DB"]} labelColor="black" />
                </GizmoHelper>
                <OrbitControls/>
                <Preload all />
            </Suspense>
        </Canvas>
    )
}
