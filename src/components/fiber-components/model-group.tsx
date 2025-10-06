import {FishOptModel} from "../../../public/FishOptimized";
import NameText from "@/components/fiber-components/text/name-text";
import Aquarium from "@/components/fiber-components/aquarium";
import { useThree } from "@react-three/fiber";


export default function ModelGroup() {
    const {viewport} = useThree()

    return (
        <group scale={viewport.width/3} position={[0, 0, 0]}>
            <FishOptModel/>
            <NameText/>
            <Aquarium/>
        </group>
    )
}