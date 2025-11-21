// components/canvas-wrapper.tsx
'use client'
import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import SceneRouter from './scene-router'

export default function CanvasWrapper() {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
            <Canvas
                gl={{ alpha: false, antialias: false, stencil: false, depth: false }}
                dpr={[1, 1.5]}
                eventPrefix="client"
            >
                <SceneRouter />
                <Preload all />
            </Canvas>
        </div>
    )
}