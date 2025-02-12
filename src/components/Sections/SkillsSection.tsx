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
    const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
    // const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

    return (
        <motion.section className="h-[100vh] flex flex-col justify-center items-center w-full
                space-y-8 mx-auto md:p-8 z-10 bg-[#FBF7ED]"
                        style={{scale}}
        >
            <h1 className={`${bantique.className} font-light text-6xl md:text-7xl lg:text-8xl mx-8`}>
                Software engineer with a strong theoretical background
            </h1>
            <div className="flex flex-col md:flex-row">
                <div className="flex-1 text-3xl md:text-4xl lg:text-5xl mx-8 space-y-4">
                    <h1>
                        (01) ML Model Development
                    </h1>
                    <h1>
                        (02) Fullstack WebDev
                    </h1>
                    <h1>
                        (03) Web Design
                    </h1>
                </div>
                <div className="md:w-1/2 md:ml-auto flex justify-center w-full">
                    <h1 className="text-sm sm:text-lg md:text-xl font-light mx-8">
                        I&apos;m an undergraduate student at Georgia Tech with an interest in interactive design.
                        My computer science degree concentrations are in AI/ML model development processes and
                        theoretical study. Notable coursework includes Natural Language Processing,
                        Computer Vision, Machine Learning, and Advanced Algorithms.
                    </h1>
                </div>
            </div>

        </motion.section>
    )
}

export default SkillsSection