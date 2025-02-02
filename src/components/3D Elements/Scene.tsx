'use client'
import {
    Environment, MeshTransmissionMaterial, RoundedBox, Lightformer, Text, PerformanceMonitor
} from "@react-three/drei";
import {Canvas, useThree,} from "@react-three/fiber";
import {FishModel} from "../../../public/Fish";
import {Bacasime_Antique} from "next/font/google";
import {Color} from "three";
import {useState} from "react";
import round from 'lodash/round'
const Scene = () => {
    const color = new Color().setHex(0xFBF7ED)
    const [dpr, setDpr] = useState(1.5)
    return (
        <Canvas camera={{position: [0, 0, 30]}}
                performance={{ min: 0.5 }}
                dpr={dpr}
                style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
        >
            <PerformanceMonitor onChange={({ factor }) => setDpr(round(0.5 + 1.5 * factor, 1))}/>
            <rectAreaLight intensity={Math.PI / 2} position={[0, 0, 10]} width={30}/>
            <Environment resolution={1024}>
                <group rotation={[-Math.PI / 3, 0, 0]}>
                    <Lightformer rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]}
                                 color={color} intensity={50}/>
                </group>
            </Environment>
            <FishModel/>
            <NameText/>
            <BoxWithTransmissionMaterial/>
        </Canvas>

    )
}

function NameText() {
    const {width: w} = useThree((state) => state.viewport);
    const shared = {
        text: 'Designer × Developer\nSean Yoshihara',
        font: '/Bacasime_Antique/BacasimeAntique-Regular.ttf',
        letterSpacing: -0.025,
        color: 'black',
        fontSize: w*0.055-1,
        lineHeight: 1.2,
        textAlign: 'center'
    }
    return (
        <Text {...shared} anchorX="center" anchorY="middle"/>
    )
}

function BoxWithTransmissionMaterial() {
    const {width: w} = useThree((state) => state.viewport);
    return (
        <RoundedBox scale={[0.055 * w, 0.8 * 6, 6]} args={[10, 5, 2]} radius={0.3}>
            <MeshTransmissionMaterial
                // background={new Color().setHex( 0xFF0000 )}
                backside
                samples={4}
                thickness={3}
                chromaticAberration={0.025}
                anisotropy={0.1}
                distortion={0.1}
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
