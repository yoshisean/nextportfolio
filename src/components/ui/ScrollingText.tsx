'use client'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import {horizontalLoop} from "@/components/horizontalLoop";

gsap.registerPlugin(Observer);

interface ScrollingTextProps {
    text: string;
    speed?: number;
}

const ScrollingText = ({ text, speed = 1.3 }: ScrollingTextProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // These variables will hold our GSAP instances
        let loop: gsap.core.Timeline;
        let observer: Observer;

        // We run the setup inside a timeout to ensure the DOM is fully ready
        const timeoutId = setTimeout(() => {
            if (!containerRef.current) return;

            const items = gsap.utils.toArray<Element>(containerRef.current.children);

            // Create the main seamless loop animation
            loop = horizontalLoop(items, {
                repeat: -1,
                speed: speed,
                paused: false,
            });

            // Create an observer to react to vertical scrolling
            observer = Observer.create({
                type: "wheel,pointer", // Listen to all scroll-like events
                onChangeY: (self) => {
                    // Set direction based on scroll. Negative for up, positive for down.
                    const factor = self.deltaY < 0 ? -speed : speed;

                    // Animate the timeScale for a dynamic speed-up/slow-down effect
                    gsap.to(loop, {
                        timeScale: factor * 1.5, // Speed up in the scroll direction
                        duration: 0.2,
                        overwrite: true,
                    });
                    gsap.to(loop, {
                        timeScale: factor / 1.5, // Return to the base speed and direction
                        duration: 1,
                        delay: 0.2, // Wait for the speed-up to finish
                    });
                }
            });
        }, 0);

        // FIX: Always return a cleanup function.
        // This function will be called when the component unmounts.
        return () => {
            clearTimeout(timeoutId);
            // Check if the instances were created before trying to kill them
            if (loop) loop.kill();
            if (observer) observer.kill();
        };

    }, [text, speed]); // Rerun effect if props change

    return (
        <div className={`w-full inline-flex flex-nowrap whitespace-nowrap overflow-hidden
            font-light text-7xl md:text-8xl lg:text-9xl tracking-wide pt-24`}
        >
            <div ref={containerRef} className="inline-flex flex-nowrap">
                <span className="pr-6">{text} •</span>
                <span className="pr-6">{text} •</span>
                <span className="pr-6">{text} •</span>
                <span className="pr-6">{text} •</span>
            </div>
        </div>
    );
};

export default ScrollingText;