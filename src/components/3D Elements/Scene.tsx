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
import FallbackMarkdown from "@/components/3D Elements/Fallback";

interface Props {
    material: JSX.Element
}

const Scene: React.FC<Props> = ({material}) => {
    const [isLgScreen, setIsLgScreen] = useState(false);
    const canvasRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLgScreen(window.innerWidth >= 1024);
        };

        // Initial check
        checkScreenSize();

        // Event listener for window resize
        window.addEventListener('resize', checkScreenSize);

        // Cleanup the event listener
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
        <div ref={canvasRef} className={'h-fit lg:h-full'}>
            {
                isVisible ?
                    (
                        isLgScreen &&
                        <Canvas camera={{position: [0, 0, 30]}}
                                performance={{min: 1}}
                                style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
                                fallback={<div>Sorry no WebGL supported!</div>}
                        >
                            <Suspense fallback={<FallbackMarkdown/>}>
                                <AdaptiveDpr pixelated/>
                                <BakeShadows/>
                                <Environment resolution={512} files={'overcast_soil_puresky_1k.hdr'}/>
                                <Bvh firstHitOnly>
                                    <FishOptModel/>
                                    <NameText/>
                                    <BoxWithTransmissionMaterial material={material}/>
                                </Bvh>
                                <Preload all/>
                            </Suspense>
                        </Canvas>
                    )
                    : <></>
            }
        </div>
    )
}

function NameText() {
    const {width: w} = useThree((state) => state.viewport);
    const shared = {
        text: 'Designer × Developer\nSean Yoshihara',
        font: '/Bacasime_Antique/BacasimeAntique-Regular.ttf',
        letterSpacing: -0.025,
        color: 'black',
        fontSize: w * 0.055 - 1,
        lineHeight: 1.2,
        textAlign: 'center'
    }
    return (
        <Float rotationIntensity={0.5}>
            <Text {...shared} anchorX="center" anchorY="middle"/>
        </Float>
    )
}

function BoxWithTransmissionMaterial({material}: Props) {
    const {width: w} = useThree((state) => state.viewport);
    return (
        <RoundedBox scale={[0.055 * w, 4.8, 8]} args={[10, 5, 2]} radius={0.3}>
            {material}
        </RoundedBox>
    )
}

export default Scene;
