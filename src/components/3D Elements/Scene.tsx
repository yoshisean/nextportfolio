'use client'
import {useEffect, useRef} from "react";
import {Environment, SoftShadows, useAnimations, useGLTF} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
const Scene = () => {
    return(
        <Canvas camera={{position:[0,0,40]}} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            <rectAreaLight intensity={Math.PI / 2} position={[0, 0, 10]} width={30}/>
            <Environment preset="forest" background={false} blur={0.5}/>
            <Fish/>
            <SoftShadows/>
        </Canvas>
    )
}

const Fish = () => {
    // Type-safe ref for Mesh component
    const group = useRef();

    const {scene, animations} = useGLTF("fish.glb");
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        actions.KeyAction!.play();
    }, [actions]);

    return (
        <group ref={group}>
            <mesh>
                <primitive object={scene} scale={1.8} rotation={[0, Math.PI, 0]}/>
            </mesh>
        </group>
    );
};
useGLTF.preload("fish.glb");

export default Scene;
