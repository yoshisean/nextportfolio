'use client'

import Image from 'next/image';
import {useScroll, useTransform, motion} from "framer-motion";
import {useRef} from "react";

type CardProps = {
    title: string;
    description: string;
    src: string;
    url: string;
    alt: string
    color: string;
    i: number;
};

const ParallaxCard: React.FC<CardProps> = ({title, description, src, url, alt, color, i}) => {
    const container = useRef(null);
    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start end', 'start start']
    })
    const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1])

    return (
        <div className="flex items-center justify-center h-screen sticky top-0" ref={container}>
            <div
                className="flex flex-col relative h-[600px] w-[1000px] rounded-xl p-[50px]"
                style={{backgroundColor: color, top: `calc(-5vh + ${i * 25}px)`}}
            >
                <h2 className="text-center text-3xl m-0 font-bold">{title}</h2>
                <div className="flex flex-col md:flex-row h-full mt-12 gap-12">
                    <div className="w-2/5 relative top-[10%]">
                        <p className="text-base first-letter:text-4xl first-letter:font-title">{description}</p>
                        <span className="flex items-center gap-2 mt-2">
                            <a href={url} target="_blank" className="text-xs underline cursor-pointer">
                                See more
                            </a>
                            <svg
                                width="22"
                                height="12"
                                viewBox="0 0 22 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                                    fill="black"
                                />
                            </svg>
                        </span>
                    </div>
                    <div className="relative w-3/5 h-full rounded-xl overflow-hidden">
                        <motion.div className="w-full h-full"
                                    style={{scale: imageScale}}
                        >
                            <Image
                                src={src}
                                alt={alt}
                                fill
                                className="object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParallaxCard;
