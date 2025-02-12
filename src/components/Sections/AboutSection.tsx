'use client'
import Image from "next/image";
import {useRef} from "react";
import {useScroll, useTransform, motion} from "framer-motion";

const AboutSection = () => {
    const container = useRef(null);

    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start start', 'end start']
    })

    const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

    return (
        <section ref={container}
                 className={'relative flex items-center justify-center h-screen overflow-hidden bg-black'}
                 style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
                 id={'aboutSection'}
        >
            <div className='relative flex justify-center my-40 z-10'>
                <p className='text-[4vw] uppercase text-center max-w-[80vw] leading-none text-white'>
                    Developer, designer, and cellist.
                    Coding for 7+ years.
                    Startup and solo project enthusiast.
                </p>
            </div>
            <div className={'fixed top-[-10vh] left-0 h-[120vh] w-full'}>
                <motion.div className="relative h-full w-full" style={{y}}>
                    <Image
                        src={'/SeanViewBW.jpg'}
                        alt={'Watching the sea at Sassnitz, GER'}
                        fill
                        objectFit="cover"
                    />
                </motion.div>
            </div>
        </section>

    )
}
export default AboutSection