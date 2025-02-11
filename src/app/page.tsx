'use client'
import {Bacasime_Antique} from "next/font/google";
import ScrollDown from "@/components/ui/scrollDown";
import ScrollingWorks from "@/components/ui/ScrollingWorks";
import {useEffect, useMemo, useRef} from "react";
import {MeshTransmissionMaterial} from "@react-three/drei";
import Scene from "@/components/3D Elements/Scene";
import Lenis from "lenis";
import Footer from "@/components/ui/Footer";
import {useScroll} from "framer-motion";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import {caseStudies} from "@/components/ui/worksList";


const bantique = Bacasime_Antique({
    variable: '--font-bantique',
    weight: '400'
})
export default function Home() {
    const transmissionMaterial = useMemo(() => {
        return (
            <MeshTransmissionMaterial
                backside={true}
                samples={4}
                thickness={2.5}
                chromaticAberration={0.025}
                anisotropy={0.1}
                distortion={0.15}
                distortionScale={0.1}
                temporalDistortion={0.2}
                iridescence={1}
                iridescenceIOR={1}
                iridescenceThicknessRange={[0, 1400]}
            />
        );
    }, []);

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf);
    }, [])


    const container = useRef(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    useEffect(() => {
        scrollYProgress.on("change", e=>console.log(scrollYProgress.get()))
    }, []);
    // useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // })

    return (
        <div className="flex flex-col space-y-8 scroll-smooth w-screen">
            <section
                className="relative h-[90vh] flex flex-col justify-center items-center w-full"
            >
                <div className="text-center lg:hidden">
                    <h2 className="font-light text-2xl tracking-[0.2em]">Designer × Developer</h2>
                    <h1 className={`text-7xl sm:text-8xl md:text-9xl tracking-tight ${bantique.className}`}>
                        Sean Yoshihara
                    </h1>
                </div>
                <Scene material={transmissionMaterial}/>
                <ScrollDown/>
            </section>
            <section
                className={'h-fit flex flex-col items-center w-full'}
            >
                <div className="md:w-1/3 md:ml-auto flex justify-center w-full">
                    <h1 className={`text-sm sm:text-md md:text-lg font-light mx-8`}>
                        I&apos;m a software engineer with an interest in interactive design.
                        My computer science degree concentrations are in AI/ML model development processes and
                        mathematical theory.
                    </h1>
                </div>
            </section>
            <section className={'relative w-full flex flex-col'}
                     id={'worksSection'}
            >
                <ScrollingWorks/>
                <div className="mx-auto container space-y-8 mt-32 md:mt-0" ref={container}>
                    {caseStudies.map((work, index) => {
                        const targetScale = 1 - ((caseStudies.length - index) * 0.05);
                        return (
                            <CaseStudyCard key={work.number} index={index} {...work}
                                           progress={scrollYProgress} range={[index/caseStudies.length, 1]} targetScale={targetScale}
                            />
                        )
                    })
                    }
                </div>
            </section>
            <Footer/>
        </div>
    );
}
