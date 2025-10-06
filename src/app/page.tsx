'use client'
import ScrollingWorks from "@/components/ui/ScrollingText";
import {useEffect} from "react";
import Lenis from "lenis";
import Footer from "@/components/ui/Footer";
import HeroSection from "@/components/Sections/HeroSection";
import SkillsSection from "@/components/Sections/SkillsSection";
import AboutSection from "@/components/Sections/AboutSection";
import WorksSection from "@/components/Sections/works-section";

export default function Home() {

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf);
    }, [])

    return (
        <div className="flex flex-col scroll-smooth w-full overflow-x-hidden bg-white">
            <main className={'relative h-full'}>
                <HeroSection/>
                <SkillsSection/>
                <WorksSection/>
            </main>

            <section className={'relative w-full flex flex-col '}
                     id={'worksSection'}
            >
                <ScrollingWorks text={'Recent Works'}/>
                {/*<InteractiveInfiniteScroll/>*/}
                {/*<div className="mx-auto container space-y-8 mt-32 md:mt-0 mb-16" >*/}
                {/*    {caseStudies.map((work, index) => {*/}
                {/*        const targetScale = 1 - ((caseStudies.length - index) * 0.05);*/}
                {/*        return (*/}
                {/*            <CaseStudyCard key={work.number} index={index} caseStudy={work} range={[index / caseStudies.length, 1]}*/}
                {/*                           targetScale={targetScale}*/}
                {/*            />*/}
                {/*        )*/}
                {/*    })*/}
                {/*    }*/}
                {/*</div>*/}
            </section>
            <AboutSection/>
            <Footer/>
        </div>
    );
}
