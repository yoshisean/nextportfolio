import { motion, MotionValue,useTransform } from "motion/react"
import Scene from "@/components/fiber-components/scene";

interface HeroProps {
    scrollYProgress: MotionValue<number>
}
const HeroSection:React.FC<HeroProps> = ({scrollYProgress}) => {
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <motion.section
            className="sticky top-0 h-screen flex flex-col justify-center items-center w-full -z-10 bg-[#edede9]"
            style={{ opacity }}
            id="heroSection"
        >
            <Scene/>
        </motion.section>

    )
}

export default HeroSection