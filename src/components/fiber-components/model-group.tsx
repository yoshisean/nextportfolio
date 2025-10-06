import {FishOptModel} from "../../../public/FishOptimized";
import NameText from "@/components/fiber-components/text/name-text";
import Aquarium from "@/components/fiber-components/aquarium";
import {useFrame, useThree} from "@react-three/fiber";
import {useRef} from "react";
import {Group} from "three"; // Import Group for correct ref typing

export default function ModelGroup() {
    const {viewport} = useThree()
    const groupRef = useRef<Group>(null!); // Corrected ref type from Mesh to Group

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y -= 0.001
        }
    })

    return (
        // Apply the new responsive scale
        <group scale={viewport.width/2} ref={groupRef} position={[0, 0, 0]}>
            <FishOptModel/>
            <NameText/>
            <Aquarium/>
        </group>
    )
}