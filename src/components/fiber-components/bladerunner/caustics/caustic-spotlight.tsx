import {useEffect, useMemo, useRef} from "react";
import {LinearFilter, RepeatWrapping, SpotLight, TextureLoader} from "three";
import {useFrame, useLoader} from "@react-three/fiber";

interface CausticSpotLightProps {
    name: string;
    position: [number, number, number];
    color: string;
    intensity: number;
    angle?: number;
    penumbra?: number;
    distance?: number;
    rotation?: number; // Rotation in degrees around Z-axis
}

export default function CausticSpotLight({
                                             position,
                                             color,
                                             intensity,
                                             angle = 0.8,
                                             penumbra = 0.3,
                                             distance = 20,
                                             rotation = 0,
                                         }: CausticSpotLightProps) {
    const spotLightRef = useRef<SpotLight>(null);
    const currentFrameRef = useRef(0);

    const texturePaths = useMemo(() => {
        return Array.from({length: 240}, (_, i) =>
            `/fiber/caustics/02B_Caribbean_Caustics_Deep_FREE_SAMPLE_${i.toString().padStart(4, '0')}.jpg`
        );
    }, []);

    const textures = useLoader(TextureLoader, texturePaths);

    const configuredTextures = useMemo(() => {
        textures.forEach(texture => {
            texture.wrapS = texture.wrapT = RepeatWrapping;
            texture.repeat.set(1, 1);
            texture.minFilter = LinearFilter;
            texture.magFilter = LinearFilter;
            texture.anisotropy = 16;
        });
        return textures;
    }, [textures]);

    useFrame(({ clock }) => {
        const frame = Math.floor(clock.elapsedTime * 24) % 240;

        if (frame !== currentFrameRef.current && spotLightRef.current) {
            currentFrameRef.current = frame;
            spotLightRef.current.map = configuredTextures[frame];
        }
    });

    // Initial map
    useEffect(() => {
        if (spotLightRef.current && configuredTextures[0]) {
            spotLightRef.current.map = configuredTextures[0];
        }
    }, [configuredTextures]);

    const rotationRadians = (rotation * Math.PI) / 180;

    return (
        <group position={position} rotation={[0, rotationRadians, 0]}>
            <spotLight
                ref={spotLightRef}
                position={[0, 0, 0]}
                angle={angle}
                penumbra={penumbra}
                intensity={intensity}
                distance={distance}
                color={color}
                castShadow
                shadow-mapSize={[1024, 1024]}
                shadow-bias={-0.001}
            />
        </group>
    );
}