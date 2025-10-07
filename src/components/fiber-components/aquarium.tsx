'use client'
import {Environment, MeshTransmissionMaterial, RoundedBox} from '@react-three/drei'
import ProceduralCaustics from "@/components/fiber-components/caustics/procedural-caustics";

export default function Aquarium() {
    return (
        <group>
            <RoundedBox args={[1.2, 0.7, 0.7]} radius={0.01}>
                <MeshTransmissionMaterial
                    backside={true}
                    samples={4}
                    thickness={0.1}
                    transmission={1}
                    ior={1.52}
                    chromaticAberration={0.025}
                    roughness={0.05}

                />
                {/*<meshPhysicalMaterial*/}
                {/*    transmission={1}*/}
                {/*    thickness={0.1}*/}
                {/*    roughness={0.01}*/}
                {/*    ior={1.52}*/}
                {/*    envMapIntensity={0}*/}
                {/*    clearcoatRoughness={0.05}*/}
                {/*    side={DoubleSide}*/}
                {/*/>*/}
            </RoundedBox>
            <ProceduralCaustics />
        </group>
    )
}
