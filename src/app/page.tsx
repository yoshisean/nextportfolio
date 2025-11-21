'use client'
import ScrollingWorks from "@/components/ui/ScrollingText";
import {Suspense, useEffect, useRef} from "react";
import Lenis from "lenis";
import Footer from "@/components/ui/Footer";
import HeroSection from "@/components/Sections/HeroSection";
import SkillsSection from "@/components/Sections/SkillsSection";
import AboutSection from "@/components/Sections/AboutSection";
import WorksSection from "@/components/Sections/works-section";
import {usePathname} from "next/navigation";

export default function Home() {

    const pathname = usePathname()
    const lenisRef = useRef<Lenis | null>(null)

    useEffect(() => {
        // Only init Lenis on home page
        if (pathname !== '/') return

        const lenis = new Lenis()
        lenisRef.current = lenis

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        const rafId = requestAnimationFrame(raf)

        // CRITICAL: Cleanup on unmount
        return () => {
            cancelAnimationFrame(rafId)
            lenis.destroy()
            lenisRef.current = null
        }
    }, [pathname])

    return (
        <main className="flex flex-col scroll-smooth w-full">
            <HeroSection/>
            <SkillsSection/>
            <ScrollingWorks text={'Project Highlights'}/>
            <WorksSection/>
            <AboutSection/>
            <Footer/>
        </main>
    );
}
