'use client'
import {Canvas} from "@react-three/fiber";
import {Environment} from "@react-three/drei";
import {WallaceRoom} from "../../../../public/fiber/bladerunner/Wallace_room";
import {EffectComposer, Noise, ToneMapping} from "@react-three/postprocessing";
import {
    AgXToneMapping,
    SRGBColorSpace,
} from "three";
import CausticSpotLight from "@/components/fiber-components/bladerunner/caustics/caustic-spotlight";
import {Perf} from "r3f-perf";
import NameText from "@/components/fiber-components/fishtank/text/name-text";
import {LetterboxEffect} from "@/components/fiber-components/bladerunner/letterbox";

export default function WallaceRoomScene() {
    return (
        <Canvas
            //animate from 4 to 8, along with letterbox?
            camera={{position: [0, 1.35, 8], rotation: [-0.1, 0, 0], fov: 51.52}}
            shadows
            gl={{
                alpha: false,
                antialias: true,
                powerPreference: 'high-performance',
                outputColorSpace: SRGBColorSpace,
                toneMapping: AgXToneMapping,
                toneMappingExposure: 1.0
            }}
        >
            <Perf position="top-left" />
            <WallaceRoom/>
            <NameText/>
            <Environment
                resolution={128}
                files="../fiber/overcast_soil_puresky_1k.hdr"
                environmentIntensity={0.02}
            />

            <CausticSpotLight
                name="Left Light"
                position={[-3.423, 7, -1]}
                color="#ffd000"
                intensity={400}
                angle={0.7}
            />

            <CausticSpotLight
                name="Right Light"
                position={[3.423, 7, -1]}
                color="#ffd000"
                intensity={400}
                angle={0.7}
            />

            <CausticSpotLight
                name="Front Light"
                position={[0, 7.6, 5.6]}
                color="#ffcc88"
                intensity={600}
                angle={0.7}
            />

            <CausticSpotLight
                name="Back Light"
                position={[0, 8, -5]}
                color="#ffcc88"
                intensity={400}
                angle={0.4}
            />

            {/* Optional: Add a subtle fill light without caustics */}
            <ambientLight intensity={0.15} color="#ffeecc" />

            <EffectComposer multisampling={4} stencilBuffer={false} enableNormalPass={false}>
                <ToneMapping/>
                <LetterboxEffect targetAspect={2.39} vignette={0.5} vignetteStrength={0.4} />
                <Noise opacity={0.02} />
            </EffectComposer>
        </Canvas>
    )
}