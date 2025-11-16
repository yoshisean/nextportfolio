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
        <main className="flex flex-col scroll-smooth w-full [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <HeroSection/>
            <SkillsSection/>
            <ScrollingWorks text={'Project Highlights'}/>
            <WorksSection/>
            <AboutSection/>
            <Footer/>
        </main>
    );
}
