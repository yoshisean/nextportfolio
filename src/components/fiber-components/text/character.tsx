import {useRef, useState} from "react";
import {Mesh} from "three";
import {useFrame} from "@react-three/fiber";
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
    const [hovered, setHovered] = useState(false)
    const textRef = useRef<Mesh>(null!)

    // Smooth hover scale animation
    useFrame(() => {
        if (!textRef.current) return
        const targetScale = hovered ? 1.5 : 1
        textRef.current.scale.x += (targetScale - textRef.current.scale.x) * 0.1
        textRef.current.scale.y += (targetScale - textRef.current.scale.y) * 0.1
    })

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
            material-transparent
            material-opacity={0}
            onPointerOver={(e) => {
                e.stopPropagation()
                setHovered(true)
            }}
            onPointerOut={() => setHovered(false)}
        >
            {char}
        </Text>
    )
}