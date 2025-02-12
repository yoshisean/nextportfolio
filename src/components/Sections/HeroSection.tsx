'use client'
import { motion, MotionValue,useTransform } from "motion/react"
import Scene from "@/components/3D Elements/Scene";
import ScrollDown from "@/components/ui/scrollDown";
import {useMemo} from "react";
import {MeshTransmissionMaterial} from "@react-three/drei";

interface HeroProps {
    scrollYProgress: MotionValue<number>
}
const HeroSection:React.FC<HeroProps> = ({scrollYProgress}) => {
    const transmissionMaterial = useMemo(() => {
        return (
            <MeshTransmissionMaterial
                backside={true}
                samples={4}
                thickness={2.5}
                chromaticAberration={0.025}
                anisotropy={0.1}
                distortion={0.25}
                distortionScale={0.1}
                temporalDistortion={0.2}
                iridescence={1}
                iridescenceIOR={1}
                iridescenceThicknessRange={[0, 1400]}
            />
        );
    }, []);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    // const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

    return (
        <motion.section
            className="sticky top-0 h-[100vh] flex flex-col justify-center items-center w-full
             pb-[10vh] -z-10 bg-[#edede9]"
            style={{ scale }} // Control scaling origin
            id={'heroSection'}
        >
            <div className="text-center lg:hidden">
                {/*<h2 className="font-light text-2xl tracking-[0.2em]">Designer × Developer</h2>*/}
                <h1 className={`text-7xl sm:text-8xl md:text-9xl tracking-tight`}>
                    Sean Yoshihara
                </h1>
            </div>
            <Scene material={transmissionMaterial}/>
            <ScrollDown/>
        </motion.section>
    )
}

export default HeroSection