import {FishOptModel} from "../../../public/FishOptimized";
import NameText from "@/components/fiber-components/text/name-text";
import Aquarium from "@/components/fiber-components/aquarium";
import {useFrame, useThree} from "@react-three/fiber";
import {useRef} from "react";
import {Mesh} from "three";

export default function ModelGroup() {
    const {viewport} = useThree()
    const groupRef = useRef<Mesh>(null!);

    useFrame(() => {
        groupRef.current.rotation.y -= 0.001
    })
    return (
        <group scale={viewport.width / 3} ref={groupRef}>
            <FishOptModel/>
            <NameText/>
            <Aquarium/>
        </group>
    )
}