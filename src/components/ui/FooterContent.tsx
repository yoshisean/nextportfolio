import React from 'react'

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
    return (
        <div className='flex justify-between items-end'>
            <a href="mailto:vcsean3@gmail.com">
                <h1 className='text-[14vw] leading-[0.8] mt-10 hover:underline-animation'>
                    Get in touch
                </h1>
            </a>
            <p>©Sean Yoshihara 2025</p>
        </div>
    )
}

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