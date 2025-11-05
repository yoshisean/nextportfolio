import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Mesh } from 'three'

export function CoffeeTable(props) {
    const { nodes, materials } = useGLTF('fiber/bladerunner/coffee_table/coffee_table-transformed.glb')


    return (
        <group {...props} position={[0, 0.12, 0]}>
            <mesh
                geometry={nodes.COFFEE_TABLE.geometry}
                material={materials.metal}
                position={[0, 0.372, 0]}
                scale={[0.313, 0.008, 0.313]}
                castShadow
            />
        </group>
    )
}

useGLTF.preload('fiber/bladerunner/coffee_table/coffee_table-transformed.glb')