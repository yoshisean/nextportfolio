'use client'
import {Canvas, useThree} from "@react-three/fiber";
import {AdaptiveDpr, AdaptiveEvents, Bvh, Environment, PerspectiveCamera} from "@react-three/drei";
import {
    EffectComposer,
    ToneMapping
} from "@react-three/postprocessing";
import {
    AgXToneMapping,
    SRGBColorSpace,
} from "three";
import {useEffect} from "react";
import CausticSpotLight from "@/components/fiber-components/bladerunner/caustics/caustic-spotlight";
import {LetterboxEffect} from "@/components/fiber-components/bladerunner/letterbox";
import {WallaceRoomOptimized} from "../../../../public/fiber/bladerunner/room/Wallace_room_opt";
import {SimpleTableOpt} from "../../../../public/fiber/bladerunner/table/Simple_table";
import {RibbonChair} from "../../../../public/fiber/bladerunner/chair/Ribbon_chair";
import {CoffeeTable} from "../../../../public/fiber/bladerunner/coffee_table/Coffee_table";

function ResponsiveCamera() {
    const { camera, viewport } = useThree();

    useEffect(() => {
        // Base values tuned for 2560x1440 (aspect ratio ≈ 1.778)
        const baseAspect = 2560 / 1440;
        const currentAspect = viewport.aspect;

        // Keep camera position fixed
        const baseZ = 8;
        camera.position.set(0, 1.35, baseZ);
        camera.rotation.set(-0.1, 0, 0);

        // === FOV ADJUSTMENT BASED ON ASPECT RATIO ===
        const baseFov = 51.52;
        let fovAdjustment;

        if (currentAspect < baseAspect) {
            // Narrower screens (more vertical space) - increase FOV
            // Sensitivity: controls how much FOV increases
            const narrowSensitivity = 0.75; // Try 0.2 - 0.5
            fovAdjustment = 1 + (baseAspect - currentAspect) * narrowSensitivity;
        } else {
            // Wider screens - decrease FOV slightly
            // Sensitivity: controls how much FOV decreases
            const wideSensitivity = 0.15; // Try 0.1 - 0.3
            fovAdjustment = 1 - (currentAspect - baseAspect) * wideSensitivity;
        }

        if ('fov' in camera) {
            camera.fov = baseFov * fovAdjustment;
            camera.updateProjectionMatrix();
        }
    }, [viewport.aspect, camera]);

    return null;
}

export default function WallaceRoomScene() {

    return (
        // <Canvas
        //     //animate from 4 to 8, along with letterbox?
        //     camera={{position: [0, 1.35, 8], rotation: [-0.1, 0, 0], fov: 51.52}}
        //     shadows
        //     gl={{
        //         alpha: false,
        //         antialias: true,
        //         powerPreference: 'high-performance',
        //         outputColorSpace: SRGBColorSpace,
        //         toneMapping: AgXToneMapping,
        //         toneMappingExposure: 0.9
        //     }}
        // >
        <>
            <PerspectiveCamera makeDefault position={[0, 1.35, 8]} rotation={[-0.1, 0, 0]} fov={51.52}/>
            <AdaptiveDpr pixelated />
            <AdaptiveEvents />
            <ResponsiveCamera />
            {/*<Perf position="top-left" />*/}

            <Bvh firstHitOnly>
                <WallaceRoomOptimized/>
                <SimpleTableOpt/>
                <pointLight
                    position={[0, -1, 15]}
                    color="#ffffff"
                    intensity={20}
                />
                <group position={[2, 0, 1]} rotation={[0, -0.5, 0]}>
                    <RibbonChair/>
                </group>
                <group position={[1.9, 0, 2]} rotation={[0, 0, 0]}>
                    <CoffeeTable/>
                </group>
                <group position={[2.5, 0, 2.8]} rotation={[0, -2.5, 0]}>
                    <RibbonChair/>
                </group>
                <Environment
                    resolution={128}
                    files="../fiber/overcast_soil_puresky_1k.hdr"
                    environmentIntensity={0.02}
                />

                <CausticSpotLight
                    name="Left Light"
                    position={[-3.423, 7, -1]}
                    color="#ffd000"
                    intensity={200}
                    angle={0.7}
                />

                <CausticSpotLight
                    name="Right Light"
                    position={[3.423, 7, -1]}
                    color="#ffd000"
                    intensity={200}
                    angle={0.7}
                    rotation={180}
                />

                <CausticSpotLight
                    name="Front Light"
                    position={[0, 7.6, 5.6]}
                    color="#ffcc88"
                    intensity={200}
                    angle={0.7}
                />

                <CausticSpotLight
                    name="Back Light"
                    position={[0, 8, -5]}
                    color="#ffcc88"
                    intensity={200}
                    angle={0.4}
                />
                <ambientLight intensity={0.05} color="#ffeecc" />
            </Bvh>

            <EffectComposer multisampling={4} stencilBuffer={false} enableNormalPass={false}>
                <ToneMapping/>
                <LetterboxEffect targetAspect={2.39} />
            </EffectComposer>
        </>
    )
}