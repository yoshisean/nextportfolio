import {Color, DoubleSide, LinearFilter, Mesh, RepeatWrapping, ShaderMaterial, SpotLight, TextureLoader} from "three";
import {useEffect, useMemo, useRef, useState} from "react";
import {useFrame, useLoader} from "@react-three/fiber";
import {useControls} from "leva";

export default function PrecomputedCaustics() {
    const spotLightRef = useRef<SpotLight>(null);

    const config = useControls('Caustics', {
        position: { value: [0, 8, -2], step: 0.1 },
        targetPosition: { value: [0, 0, -2], step: 0.1 },
        fps: { value: 24, min: 1, max: 60, step: 1 },
        intensity: { value: 200, min: 0, max: 500, step: 10 },
        angle: { value: 0.8, min: 0, max: Math.PI / 2, step: 0.01 },
        penumbra: { value: 0.3, min: 0, max: 1, step: 0.01 },
        distance: { value: 20, min: 0, max: 50, step: 1 },
        color: '#ffcc88',
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
            spotLightRef.current.color.set(config.color);
        }
    }, [config.intensity, config.angle, config.penumbra, config.distance, config.color]);

    return (
        <>
            <spotLight
                ref={spotLightRef}
                position={config.position as [number, number, number]}
                target-position={config.targetPosition as [number, number, number]}
                angle={config.angle}
                penumbra={config.penumbra}
                intensity={config.intensity}
                distance={config.distance}
                color={config.color}
                castShadow
                shadow-mapSize={[2048, 2048]}
                shadow-bias={-0.0001}
                map={textures[currentFrame]}
            />
            {/* Helper to visualize light target */}
            <mesh position={config.targetPosition as [number, number, number]}>
                <sphereGeometry args={[0.1]} />
                <meshBasicMaterial color="red" />
            </mesh>
        </>
    );
}