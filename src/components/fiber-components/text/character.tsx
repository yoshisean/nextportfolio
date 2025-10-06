import React, { forwardRef } from 'react'
import { Text } from '@react-three/drei'
import * as THREE from 'three'

type CharacterProps = {
    char: string
    x: number
    fontUrl: string
    fontSize: number
}

const Character = forwardRef<THREE.Mesh, CharacterProps>(function Character(
    { char, x, fontUrl, fontSize },
    ref
) {
    return (
        <Text
            ref={ref}
            anchorX="center"
            position={[x, 0, 0]}
            font={fontUrl}
            fontSize={fontSize}
            color="white"
            material-transparent
            material-opacity={0} // start invisible for GSAP
        >
            {char}
        </Text>
    )
})

export default Character
