'use client'
import { Canvas, useThree } from "@react-three/fiber";
import {Environment, OrbitControls, SoftShadows, useHelper} from "@react-three/drei";
import { WallaceRoom } from "../../../../public/fiber/bladerunner/Wallace_room";
import {EffectComposer, Noise} from "@react-three/postprocessing";
import {useRef} from "react";
import {ColorRepresentation, PointLightHelper} from "three";

interface LightWithHelperProps {
    position: [number, number, number];
    color: ColorRepresentation;
    intensity: number;
};
function LightWithHelper({ position, color, intensity }: LightWithHelperProps) {
    const lightRef = useRef(null!);

    // useHelper will add a THREE.PointLightHelper to the scene
    // The second argument is the helper's constructor
    // The third argument (optional) is the size of the helper gizmo
    useHelper(lightRef, PointLightHelper, 0.5, color);

    return (
        <pointLight
            castShadow={true}
            ref={lightRef}
            position={position}
            intensity={intensity}
            color={color}
            shadow-mapSize={2048}
        />
    );
}

export default function MinimalScene() {
    return (
        <Canvas camera={{ position: [0, 2.1, 11], rotation: [-0.11,0,0], fov: 27}} shadows
                gl={{ alpha: false, antialias: false,
                    depth: false, stencil: false,
                    powerPreference: 'high-performance' }}
        >
            <SoftShadows samples={6} />
            <WallaceRoom/>
            {/*<CameraLogger />*/}
            <Environment
                resolution={256}
                files="../fiber/fish/overcast_soil_puresky_1k.hdr"
                environmentIntensity={0.2}
            />
            <LightWithHelper
                position={[-3, 7, -1]}
                intensity={200}
                color="#fff"
            />
            <LightWithHelper
                position={[3, 7, -1]}
                intensity={200}
                color="#fff"
            />

            <LightWithHelper
                position={[0, 9, 7]}
                intensity={200}
                color="#fff"
            />
            <LightWithHelper
                position={[0, 8, -5]}
                intensity={200}
                color="#fff"
            />
            <fog attach="fog" args={["#d0d0d0", 8, 35]} />

            <EffectComposer
                multisampling={4}
                // enableNormalPass={false}
                stencilBuffer={false}
            >
                <Noise opacity={0.02} />
            </EffectComposer>
            {/*<OrbitControls/>*/}
        </Canvas>
    )
}