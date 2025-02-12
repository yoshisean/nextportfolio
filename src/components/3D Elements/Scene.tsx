'use client'
import {
    Environment,
    RoundedBox,
    Text,
    AdaptiveDpr,
    Float,
    BakeShadows, Bvh, Preload
} from "@react-three/drei";

import {Canvas, useThree,} from "@react-three/fiber";
import {FishOptModel} from "../../../public/FishOptimized";
import {Suspense, useEffect, useRef, useState} from "react";
import {JSX} from "react/jsx-runtime";
import {MotionValue,motion} from "motion/react";

interface Props {
    material: JSX.Element
    scale: MotionValue<number>
}

const Scene: React.FC<Props> = ({material , scale}) => {
    const [isLgScreen, setIsLgScreen] = useState(false);
    const canvasRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLgScreen(window.innerWidth >= 1024);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false); // Canvas is not visible
                    }
                });
            },
            {
                threshold: 0, // Change this based on how much of the element needs to be visible
            }
        );

        if (canvasRef.current) {
            observer.observe(canvasRef.current);
        }

        // Cleanup observer on unmount
        return () => {
            if (canvasRef.current) {
                observer.unobserve(canvasRef.current);
            }
        };
    }, []);

    return (
        <motion.div ref={canvasRef}
                    className={'h-fit lg:h-full w-full p-0 m-0'}
                    style={{transition: 'all 200ms ease-in-out'}}
        >
            {
                isVisible && isLgScreen ?
                    <Canvas camera={{position: [0, 0, 30]}}
                            performance={{min: 1}}
                            // style={{
                            //     position: 'absolute',
                            //     top: 0, left: 0,
                            //     width: '100%', height: '100%',
                            //     zIndex: -10, padding: 0, margin: 0
                            // }}
                            fallback={<div>Sorry no WebGL supported!</div>}
                    >
                        <Suspense fallback={null}>
                            <AdaptiveDpr pixelated/>
                            <Environment resolution={512} files={'overcast_soil_puresky_1k.hdr'}/>
                            <Bvh firstHitOnly>
                                <FishOptModel/>
                                <NameText/>
                                <BoxWithTransmissionMaterial material={material}/>
                            </Bvh>
                            <Preload all/>
                        </Suspense>
                    </Canvas>

                    : <></>
            }
        </motion.div>
    )
}

function NameText() {
    const {width: w} = useThree((state) => state.viewport);
    // Designer × Developer
    const shared = {
        text: 'Sean Yoshihara',
        font: '/Inter/Inter-VariableFont_opsz,wght.ttf',
        letterSpacing: 0,
        color: 'black',
        fontSize: w * 0.055 - 1.5,
        lineHeight: 1.2,
        textAlign: 'center'
    }
    return (
        <Float rotationIntensity={0.5}>
            <Text {...shared} anchorX="center" anchorY="middle"/>
        </Float>
    )
}

interface boxMat {
    material: JSX.Element
}
function BoxWithTransmissionMaterial({material}: boxMat) {
    const width = useThree((state) => state.viewport.getCurrentViewport().width);
    return (
        <RoundedBox scale={[0.055 * width, 4.8, 8]} args={[10, 5, 2]} radius={0.3}>
            {material}
        </RoundedBox>
    )
}

export default Scene;
