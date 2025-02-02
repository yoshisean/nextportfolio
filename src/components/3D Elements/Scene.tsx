'use client'
import {
    Environment, MeshTransmissionMaterial,
    SoftShadows, RoundedBox
} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {FishModel} from "../../../public/Fish";

const Scene = () => {
    return (
        <Canvas camera={{position: [0, 0, 40]}}
                style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
            <rectAreaLight intensity={Math.PI / 2} position={[0, 0, 10]} width={30}/>
            <Environment preset="forest" background={false} blur={0.5}/>
            <FishModel/>
            <BoxWithTransmissionMaterial/>
            <SoftShadows/>
        </Canvas>
    )
}
//
// const Fish = () => {
//     // Type-safe ref for Mesh component
//     const group = useRef();
//
//     const {scene, animations, materials} = useGLTF("fish.glb");
//     const {actions} = useAnimations(animations, group);
//     useEffect(() => {
//         actions.KeyAction!.play();
//     }, [actions]);
//     useMemo(() => {
//         materials["Material.001"].transparent = true
//         materials["Material.001"].opacity = 0.9
//         materials["fin.001"].transparent = true
//         materials["fin.001"].opacity = 0.9
//     }, [materials])
//
//     return (
//         <group ref={group}>
//             <mesh>
//                 <primitive object={scene} scale={1.8} rotation={[0, Math.PI, 0]}/>
//             </mesh>
//         </group>
//     );
// };
// useGLTF.preload("fish.glb");
function BoxWithTransmissionMaterial(props) {
    return (
        <RoundedBox props={props} scale={[0.61 * 6, 0.8 * 6, 6]} args={[10, 5, 2]} radius={0.3}>
            <MeshTransmissionMaterial
                backside
                samples={4}
                thickness={3}
                chromaticAberration={0.025}
                anisotropy={0.1}
                distortion={0.1}
                distortionScale={0.1}
                temporalDistortion={0.2}
                iridescence={1}
                iridescenceIOR={1}
                iridescenceThicknessRange={[0, 1400]}
            />
        </RoundedBox>
        // <mesh {...props} castShadow={true} scale={[0.61 * 6, 0.8 * 6, 6]}>
        //     {/* Box Geometry */}
        //     <boxGeometry args={[10, 5, 2]} />  {/* Adjust the size of the box as needed */}
        //
        //     {/* Transmission Material applied to the box */}
        // </mesh>
    )
}

export default Scene;
