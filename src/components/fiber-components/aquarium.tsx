import {MeshTransmissionMaterial, RoundedBox} from "@react-three/drei";

export default function Aquarium() {
    return (
        <RoundedBox args={[1.2,0.7,0.7]} radius={0.05}>
            <MeshTransmissionMaterial
                backside={true}
                samples={4}
                thickness={0.3}
                chromaticAberration={0.025}
                // chromaticAberration={0.0}
                anisotropy={0.1}
                distortion={0.1}
                distortionScale={0.1}
                iridescence={0}
                iridescenceIOR={1}
                // iridescenceThicknessRange={[0, 1400]}
            />
        </RoundedBox>
    )
}