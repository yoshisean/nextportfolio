import {FishOptModel} from "../../../public/fiber/FishOptimized";
import NameText from "@/components/fiber-components/text/name-text";
import Aquarium from "@/components/fiber-components/aquarium";
import {useThree} from "@react-three/fiber";
import Atmosphere from "@/components/fiber-components/atmosphere";


export default function ModelGroup() {
    const {viewport} = useThree()
    const scale = Math.pow(viewport.width, 0.9) / 2;
    return (
        <group scale={scale} position={[0, 0, 0]}>
            <FishOptModel/>
            <NameText/>
            <Aquarium/>
            <Atmosphere/>
        </group>
    )
}