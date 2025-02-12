'use client'
import ScrollingWorks from "@/components/ui/ScrollingWorks";
import {useEffect, useRef} from "react";
import Lenis from "lenis";
import Footer from "@/components/ui/Footer";
import {useScroll} from "motion/react";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import {caseStudies} from "@/components/ui/worksList";
import HeroSection from "@/components/Sections/HeroSection";
import SkillsSection from "@/components/Sections/SkillsSection";
import AboutSection from "@/components/Sections/AboutSection";

export default function Home() {

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

    const mainContainer = useRef(null);
    const { scrollYProgress: mainYProgress } = useScroll({
        target: mainContainer,
        offset: ["start start", "end end"]
    })

    return (
        <div className="flex flex-col scroll-smooth w-screen">
            <main className={'relative h-[200vh]'} ref={mainContainer}>
                <HeroSection scrollYProgress={mainYProgress}/>
                <SkillsSection scrollYProgress={mainYProgress}/>
            </main>

            <section className={'relative w-full flex flex-col bg-[#FBF7ED]'}
                     id={'worksSection'}
            >
                <ScrollingWorks/>
                <div className="mx-auto container space-y-8 mt-32 md:mt-0 mb-16" ref={container}>
                    {caseStudies.map((work, index) => {
                        const targetScale = 1 - ((caseStudies.length - index) * 0.05);
                        return (
                            <CaseStudyCard key={work.number} index={index} {...work}
                                           progress={scrollYProgress} range={[index / caseStudies.length, 1]}
                                           targetScale={targetScale}
                            />
                        )
                    })
                    }
                </div>
            </section>
            <AboutSection/>
            <Footer/>
        </div>
    );
}
