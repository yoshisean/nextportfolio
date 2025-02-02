'use client'
import type React from "react"
import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"

const ScrollDownElement: React.FC = () => {
    const [rotation, setRotation] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            const newRotation = (scrollY % 360) * 0.1 // Adjust the multiplier to control rotation speed
            setRotation(newRotation)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-24 flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 100 100" style={{transform: `rotate(${rotation}deg)`}}>
                <path id="curve" d="M50,90 A40,40 0 1,1 50,10 A40,40 0 1,1 50,90" fill="none" stroke="none"/>
                <text className="text-primary fill-current text-[10px]">
                    <textPath href="#curve" startOffset="0%" textLength="245%">
                        SCROLL-DOWN-SCROLL-DOWN-
                    </textPath>
                </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <ArrowDown className="w-8 h-8 text-primary stroke-1"/>
            </div>
        </div>
    )
}

export default ScrollDownElement

