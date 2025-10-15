'use client'
import {Canvas, useFrame, useLoader} from "@react-three/fiber";
import {Environment, OrbitControls, SoftShadows, useHelper} from "@react-three/drei";
import {WallaceRoom} from "../../../../public/fiber/bladerunner/Wallace_room";
import {DepthOfField, EffectComposer, Noise, SSAO, ToneMapping} from "@react-three/postprocessing";
import {useRef, useMemo, useState, useEffect} from "react";
import {
    AgXToneMapping,
    ColorRepresentation,
    PointLightHelper,
    SRGBColorSpace,
    SpotLight,
    TextureLoader,
    RepeatWrapping,
    LinearFilter
} from "three";
import * as THREE from 'three';
import {LetterboxEffect} from "@/components/fiber-components/bladerunner/letterbox";
import {useControls} from 'leva';

interface CausticSpotLightProps {
    name: string;
    position: [number, number, number];
    targetPosition: [number, number, number];
    color: string;
    intensity: number;
    angle?: number;
    penumbra?: number;
    distance?: number;
}

function CausticSpotLight({
                              name,
                              position,
                              targetPosition,
                              color,
                              intensity,
                              angle = 0.8,
                              penumbra = 0.3,
                              distance = 20
                          }: CausticSpotLightProps) {
    const spotLightRef = useRef<SpotLight>(null);

    const config = useControls(name, {
        intensity: { value: intensity, min: 0, max: 1000, step: 10 },
        angle: { value: angle, min: 0, max: Math.PI / 2, step: 0.01 },
        penumbra: { value: penumbra, min: 0, max: 1, step: 0.01 },
        distance: { value: distance, min: 0, max: 50, step: 1 },
        fps: { value: 24, min: 1, max: 60, step: 1 },
        textureRepeat: { value: 1, min: 0.1, max: 5, step: 0.1 }
    });

    // Generate array of texture paths
    const texturePaths = useMemo(() => {
        return Array.from({ length: 240 }, (_, i) =>
            `/fiber/caustics/02B_Caribbean_Caustics_Deep_FREE_SAMPLE_${i.toString().padStart(4, '0')}.jpg`
        );
    }, []);

    // Load all textures
    const textures = useLoader(TextureLoader, texturePaths);

    // Configure textures
    useEffect(() => {
        textures.forEach(texture => {
            texture.wrapS = texture.wrapT = RepeatWrapping;
            texture.repeat.set(config.textureRepeat, config.textureRepeat);
            texture.minFilter = LinearFilter;
            texture.magFilter = LinearFilter;
        });
    }, [textures, config.textureRepeat]);

    const [currentFrame, setCurrentFrame] = useState(0);

    useFrame(({ clock }) => {
        const frame = Math.floor(clock.elapsedTime * config.fps) % 240;
        setCurrentFrame(frame);

        // Update spotlight map
        if (spotLightRef.current) {
            spotLightRef.current.map = textures[frame];
        }
    });

    // Update spotlight properties
    useEffect(() => {
        if (spotLightRef.current) {
            spotLightRef.current.intensity = config.intensity;
            spotLightRef.current.angle = config.angle;
            spotLightRef.current.penumbra = config.penumbra;
            spotLightRef.current.distance = config.distance;
        }
    }, [config.intensity, config.angle, config.penumbra, config.distance]);

    return (
        <spotLight
            ref={spotLightRef}
            position={position}
            target-position={targetPosition}
            angle={config.angle}
            penumbra={config.penumbra}
            intensity={config.intensity}
            distance={config.distance}
            color={color}
            castShadow
            shadow-mapSize={[2048, 2048]}
            shadow-bias={-0.0001}
            map={textures[currentFrame]}
        />
    );
}

// Keep one regular point light for ambient/fill
function LightWithHelper({position, color, intensity}: {
    position: [number, number, number];
    color: ColorRepresentation;
    intensity: number;
}) {
    const lightRef = useRef(null!);
    useHelper(lightRef, PointLightHelper, 0.5, color);

    return (
        <pointLight
            castShadow={true}
            ref={lightRef}
            position={position}
            intensity={intensity}
            color={color}
            shadow-mapSize={2048}
            shadow-bias={-0.001}
            shadow-normalBias={0.05}
        />
    );
}

export default function BladerunnerScene() {
    return (
        <Canvas
            camera={{position: [0, 1.38, 8], rotation: [-0.01, 0, 0], fov: 51.52}}
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
            <SoftShadows samples={16} size={32} focus={0.5}/>

            <WallaceRoom/>

            <Environment
                resolution={256}
                files="../fiber/fish/overcast_soil_puresky_1k.hdr"
                environmentIntensity={0.2}
            />

            {/* Main caustic spotlights */}
            <CausticSpotLight
                name="Left Light"
                position={[-3, 7, -1]}
                targetPosition={[3, 0, -1]}  // Points to right wall
                color="#ffb366"
                intensity={400}
                angle={0.6}
            />

            <CausticSpotLight
                name="Right Light"
                position={[3, 7, -1]}
                targetPosition={[-3, 0, -1]}  // Points to left wall
                color="#ffb366"
                intensity={400}
                angle={0.6}
            />

            <CausticSpotLight
                name="Front Light"
                position={[0, 9, 7]}
                targetPosition={[0, 0, -5]}  // Points to back wall
                color="#ff9944"
                intensity={400}
                angle={0.7}
            />

            <CausticSpotLight
                name="Back Light"
                position={[0, 8, -5]}
                targetPosition={[0, 0, 5]}  // Points forward
                color="#ffcc88"
                intensity={400}
                angle={0.8}
            />

            {/* Optional: Add a subtle fill light without caustics */}
            <ambientLight intensity={0.1} color="#ffeecc" />

            <fog attach="fog" args={["#1a1410", 12, 40]}/>

            <EffectComposer multisampling={8} stencilBuffer={false} enableNormalPass={true}>
                <SSAO samples={16} radius={0.5} intensity={30} luminanceInfluence={0.6} />
                <DepthOfField focusDistance={0.02} focalLength={0.05} bokehScale={3} />
                <ToneMapping/>
                <LetterboxEffect targetAspect={2.39} vignette={0.5} vignetteStrength={0.4} />
                <Noise opacity={0.02} />
            </EffectComposer>

            <OrbitControls/>
        </Canvas>
    )
}