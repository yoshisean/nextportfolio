'use client'
import {
    Environment,
    AdaptiveDpr,
    BakeShadows, Bvh, Preload, Html
} from "@react-three/drei";

import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import ModelGroup from "@/components/fiber-components/model-group";

export default function Scene() {
    return (
        <div className={'h-full w-full p-0 m-0'}>
            <Canvas performance={{min: 1}}
                    fallback={<div>Sorry no WebGL supported!</div>}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                    }}
            >
                <Suspense fallback={
                    <Html center>
                        <h1 className={'whitespace-nowrap text-lg'}>Loading content... Please be patient :)</h1>
                    </Html>
                }>
                    <AdaptiveDpr pixelated/>
                    <BakeShadows/>
                    <Environment resolution={512} files={'../overcast_soil_puresky_1k.hdr'}
                                 environmentIntensity={0.6}/>
                    <Bvh firstHitOnly>
                        <ModelGroup/>
                    </Bvh>
                    <Preload all/>
                </Suspense>
            </Canvas>
        </div>
    )
}