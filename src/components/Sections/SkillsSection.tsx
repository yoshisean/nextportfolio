'use client'
import {MotionValue, useTransform, motion} from "framer-motion";
import {Bacasime_Antique} from "next/font/google";

const bantique = Bacasime_Antique({
    variable: '--font-bantique',
    weight: '400'
})

interface SkillProps {
    scrollYProgress: MotionValue<number>
}

const SkillsSection: React.FC<SkillProps> = ({scrollYProgress}) => {
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

    return (
        <motion.section className="h-[100vh] flex flex-col justify-center items-center w-full
                space-y-8 mx-auto md:px-8 z-10 bg-[#C72626]"
                 style={{scale, rotate}}
        >
            <h1 className={`${bantique.className} font-light text-6xl md:text-7xl lg:text-8xl`}>
                Software engineer with a strong theoretical background
            </h1>
            <div className="md:w-1/2 md:ml-auto flex justify-center w-full">
                <h1 className="text-sm sm:text-md md:text-lg font-light mx-8 text-center">
                    I&apos;m an undergrad at Georgia Tech with an interest in interactive design.
                    My computer science degree concentrations are in AI/ML model development processes and
                    mathematical theory.
                </h1>
            </div>
        </motion.section>
    )
}

export default SkillsSection