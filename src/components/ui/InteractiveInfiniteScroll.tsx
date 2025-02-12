'use client'
import {useEffect, useState} from 'react'
import {motion, useAnimation} from 'framer-motion'

const InfiniteScrollText = () => {
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down')
    const controls = useAnimation()

    // Scroll direction detection
    useEffect(() => {
        let lastScroll = window.scrollY
        const updateScrollDir = () => {
            const currentScroll = window.scrollY
            setScrollDirection(currentScroll > lastScroll ? 'down' : 'up')
            lastScroll = currentScroll
        }
        window.addEventListener('scroll', updateScrollDir)
        return () => window.removeEventListener('scroll', updateScrollDir)
    }, [])

    // Animation control
    useEffect(() => {
        controls.start({
            x: scrollDirection === 'down' ? '-100%' : '100%',
            transition: {
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'linear',
                duration: 10
            }
        })
    }, [scrollDirection, controls])

    return (
        <div className="w-full overflow-hidden">
            <motion.div
                className="flex whitespace-nowrap"
                animate={controls}
            >
                {/* Double the content for seamless looping */}
                <span className="text-7xl md:text-8xl lg:text-9xl">
                    RECENT WORK RECENT WORK&nbsp;
                </span>
                <span className="text-7xl md:text-8xl lg:text-9xl">
                    RECENT WORK RECENT WORK&nbsp;
                </span>
            </motion.div>
        </div>
    )
}

export default InfiniteScrollText