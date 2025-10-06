import React, {useRef} from 'react'
import { gsap } from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';


gsap.registerPlugin(ScrambleTextPlugin);

export default function FooterContent() {
    return (
        <div className='bg-[#132a13] text-white py-8 px-12 h-full w-full flex flex-col justify-between'>
            <Section1 />
            <Section2 />
        </div>
    )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {
    const textRef = useRef(null);
    const originalText = 'Get in touch';

    const shuffleText = () => {
        gsap.to(textRef.current, {
            duration: 0.8,
            scrambleText: {
                text: originalText,
                chars: 'abcdefghijklmnopqrstuvwxyz',
                speed: 0.3,
            },
            ease: 'power1.inOut',
        });
    };

    return (
        <div className='flex justify-between items-end'>
            <a href="mailto:vcsean3@gmail.com">
                <h1
                    ref={textRef}
                    className='text-[10vw] leading-[0.8] mt-10'
                    onMouseEnter={shuffleText}
                >
                    {/* The original text is now the default content */}
                    {originalText}
                </h1>
            </a>
            <p>©Sean Yoshihara 2025</p>
        </div>
    );
};

const Nav = () => {
    return (
        <div className='flex shrink-0 gap-20 items-center'>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-[#ffffff80]'>Socials</h3>
                <a href='https://www.linkedin.com/in/yoshisean/' className={'w-fit hover:underline-animation'}>
                    <p>LinkedIn</p>
                </a>
                <a href='https://www.instagram.com/yoshi.sean/' className={'w-fit hover:underline-animation'}>
                    <p>Instagram</p>
                </a>
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='mb-2 uppercase text-gray-300 text-[3vw] tracking-wide'>
                    Based in Chicago and Atlanta
                </h1>
            </div>
        </div>
    )
}