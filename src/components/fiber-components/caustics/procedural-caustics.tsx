'use client'
import VoronoiLayer from "@/components/fiber-components/caustics/voronoi-layer";

export default function ProceduralCaustics({size = [1.2, 0.7-0.02],}: { size?: [number, number] }) {
    return (
        <group>
            {/* bottom: slow, wide pattern */}
            <VoronoiLayer
                scale={3}
                color={[0.15, 0.15, 0.15]}
                intensity={1.3}
                timeMultiplier={0.1}
                position={[0, -0.35, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                size={size}
                opacity={0.15}
            />

            {/* bottom: finer, faster pattern */}
            <VoronoiLayer
                scale={8}
                color={[0.2, 0.2, 0.2]}
                intensity={1.2}
                timeMultiplier={0.4}
                position={[0, -0.35+0.001, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                size={size}
                opacity={0.25}
            />


            <VoronoiLayer
                scale={6}
                color={[0.1, 0.1, 0.1]}
                intensity={1.0}
                timeMultiplier={0.25}
                position={[0, 0, -0.35]}
                rotation={[0, 0, 0]}
                size={[1.2, 0.7]}
                opacity={0.15}
            />

            <VoronoiLayer
                scale={8}
                color={[0.15, 0.15, 0.15]}
                intensity={1.0}
                timeMultiplier={0.24}
                position={[0, 0, -0.35]}
                rotation={[0, 0, 0]}
                size={[1.2, 0.7]}
                opacity={0.15}
            />
        </group>
    )
}
