import {MeshTransmissionMaterial, RoundedBox} from "@react-three/drei";

export default function Aquarium() {
    return (
        <RoundedBox args={[1.2,0.7,0.7]} radius={0.015}>
            <MeshTransmissionMaterial
                backside={true}
                samples={4}
                thickness={0.1}
                transmission={1}
                ior={1.52}
                chromaticAberration={0.025}
            />
        </RoundedBox>
    )
}