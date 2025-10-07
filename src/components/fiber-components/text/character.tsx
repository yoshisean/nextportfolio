import {useRef} from "react";
import {Mesh} from "three";
import {Text} from "@react-three/drei";

export default function Char({
                                 char,
                                 position,
                                 fontUrl,
                                 fontSize,
                                 refCallback
                             }: {
    char: string
    position: [number, number, number]
    fontUrl: string
    fontSize: number
    refCallback: (el: Mesh | null) => void
}) {
    const textRef = useRef<Mesh>(null!)

    return (
        <Text
            ref={(el) => {
                textRef.current = el as Mesh
                refCallback(el)
            }}
            position={position}
            font={fontUrl}
            fontSize={fontSize}
            anchorX="center"
            color="white"
        >
            {char}
        </Text>
    )
}