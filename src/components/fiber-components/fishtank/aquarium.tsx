'use client'
import {MeshTransmissionMaterial} from '@react-three/drei'
import ProceduralCaustics from "@/components/fiber-components/fishtank/caustics/procedural-caustics";

export default function Aquarium() {
    return (
        <group>
            <mesh>
                <boxGeometry args={[1.2, 0.7, 0.7]}/>
                <MeshTransmissionMaterial
                    backside={true}
                    samples={4}
                    thickness={0.1}
                    transmission={1}
                    ior={1.52}
                    chromaticAberration={0.025}
                    roughness={0.05}
                />
            </mesh>
            <ProceduralCaustics />
        </group>
    )
}
