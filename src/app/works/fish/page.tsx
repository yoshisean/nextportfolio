'use client'
import HeroSection from "@/components/Sections/HeroSection";
import {useMotionValue} from "framer-motion";

export default function FishPortfolio() {
    return (
        <HeroSection scrollYProgress={useMotionValue(0)}/>
    )
}