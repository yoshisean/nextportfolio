import { motion, MotionValue,useTransform } from "motion/react"
import Scene from "@/components/fiber-components/scene";

interface HeroProps {
    scrollYProgress: MotionValue<number>
}
const HeroSection:React.FC<HeroProps> = ({scrollYProgress}) => {
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <motion.section
            className="sticky top-0 h-[100vh] flex flex-col justify-center items-center w-screen -z-10 bg-[#edede9]"
            style={{ opacity }} // Control scaling origin
            id={'heroSection'}
        >
            <Scene/>
        </motion.section>
    )
}

export default HeroSection