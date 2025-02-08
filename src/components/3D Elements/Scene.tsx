'use client'
import {
    Environment, MeshTransmissionMaterial, RoundedBox, Text, AdaptiveDpr, Float
} from "@react-three/drei";
import {Canvas, useThree,} from "@react-three/fiber";
import {FishOptModel} from "../../../public/FishOptimized";
import {useEffect, useState} from "react";

const Scene = () => {
    const [isLgScreen, setIsLgScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLgScreen(window.innerWidth >= 1024);
        };

        // Initial check
        checkScreenSize();

        // Event listener for window resize
        window.addEventListener('resize', checkScreenSize);

        // Cleanup the event listener
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
    return (
        <>
            {
                isLgScreen &&
                <Canvas camera={{position: [0, 0, 30]}}
                        performance={{min: 0.5}}
                        style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
                    <AdaptiveDpr pixelated/>
                    <Environment resolution={512} files={'overcast_soil_puresky_1k.hdr'}/>
                    <FishOptModel/>
                    <NameText/>
                    <BoxWithTransmissionMaterial/>
                </Canvas>
            }
        </>
    )
}

function NameText() {
    const {width: w} = useThree((state) => state.viewport);
    const shared = {
        text: 'Designer × Developer\nSean Yoshihara',
        font: '/Bacasime_Antique/BacasimeAntique-Regular.ttf',
        letterSpacing: -0.025,
        color: 'black',
        fontSize: w * 0.055 - 1,
        lineHeight: 1.2,
        textAlign: 'center'
    }
    return (
        <Float rotationIntensity={0.5}>
            <Text {...shared} anchorX="center" anchorY="middle"/>
        </Float>
    )
}

function BoxWithTransmissionMaterial() {
    const {width: w} = useThree((state) => state.viewport);
    return (
        <RoundedBox scale={[0.055 * w, 4.8, 8]} args={[10, 5, 2]} radius={0.3}>
            <MeshTransmissionMaterial
                backside
                samples={4}
                thickness={2.5}
                chromaticAberration={0.025}
                anisotropy={0.1}
                distortion={0.15}
                distortionScale={0.1}
                temporalDistortion={0.2}
                iridescence={1}
                iridescenceIOR={1}
                iridescenceThicknessRange={[0, 1400]}
            />
        </RoundedBox>
    )
}

export default Scene;
