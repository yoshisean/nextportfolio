'use client'
import VoronoiLayer from "@/components/fiber-components/fishtank/caustics/voronoi-layer";

export default function ProceduralCaustics({size = [1.2, 0.7-0.02],}: { size?: [number, number] }) {
    return (
        <group>
            {/* bottom: slow, wide pattern */}
            <VoronoiLayer
                scale={5}
                color={[0.15, 0.15, 0.15]}
                intensity={0.2}
                timeMultiplier={0.5}
                position={[0, -0.35+0.001, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                size={size}
                opacity={0.05}
            />

            {/* bottom: finer, faster pattern */}
            {/*<VoronoiLayer*/}
            {/*    scale={12}*/}
            {/*    color={[0.2, 0.2, 0.2]}*/}
            {/*    intensity={0.3}*/}
            {/*    timeMultiplier={1}*/}
            {/*    position={[0, -0.35+0.001, 0]}*/}
            {/*    rotation={[-Math.PI / 2, 0, 0]}*/}
            {/*    size={size}*/}
            {/*    opacity={0.25}*/}
            {/*/>*/}


            <VoronoiLayer
                scale={5}
                color={[0.15, 0.15, 0.15]}
                intensity={0.1}
                timeMultiplier={0.5}
                position={[0, 0, -0.35]}
                rotation={[0, 0, 0]}
                size={[1.2, 0.7]}
                opacity={0.15}
            />

            {/*<VoronoiLayer*/}
            {/*    scale={12}*/}
            {/*    color={[0.2, 0.2, 0.2]}*/}
            {/*    intensity={0.2}*/}
            {/*    timeMultiplier={1}*/}
            {/*    position={[0, 0, -0.35]}*/}
            {/*    rotation={[0, 0, 0]}*/}
            {/*    size={[1.2, 0.7]}*/}
            {/*    opacity={0.05}*/}
            {/*/>*/}
        </group>
    )
}
