import {useThree} from "@react-three/fiber";
import {WallaceRoomOptimized} from "../../../../public/fiber/bladerunner/Wallace_room_opt";

export default function RoomGroup() {
    const {viewport} = useThree()
    const scale = Math.pow(viewport.width, 0.9) / 11;
    return (
        <group scale={scale} position={[0, 0, 0]}>
            <WallaceRoomOptimized/>
        </group>
        )
}