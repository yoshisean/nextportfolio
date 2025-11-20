'use client'

import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { r3f } from '@/helpers/global'
import * as THREE from 'three'

export default function Scene({ ...props }) {
    // Everything defined in here will persist between route changes, only children are swapped
    return (
        <Canvas {...props}
                onCreated={(state) => (state.gl.toneMapping = THREE.AgXToneMapping)}
                gl={{
                    alpha: false, antialias: false,
                    depth: false, stencil: false,
                    powerPreference: 'high-performance'
                }}
        >
            {/* @ts-ignore */}
            <r3f.Out />
            <Preload all />
        </Canvas>
    )
}