import React, {useState} from 'react'

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
    const [shuffledText, setShuffledText] = useState('Get in touch');
    const originalText = 'Get in touch';
    const velocity = 75;

    const shuffle = (arr: string[]) => {
        let j, x, i = arr.length;
        while (i) {
            j = Math.floor(Math.random() * i);
            x = arr[--i];
            arr[i] = arr[j];
            arr[j] = x;
        }
        return arr;
    };

    const shuffleText = (element: string) => {
        const elementTextArray = element.split('');
        let randomText = [];

        const repeatShuffle = (times: number, index: number) => {
            if (index === times) {
                setShuffledText(originalText);
                return;
            }

            setTimeout(() => {
                randomText = shuffle([...elementTextArray]);
                for (let i = 0; i < index; i++) {
                    randomText[i] = originalText[i];
                }
                setShuffledText(randomText.join(''));
                index++;
                repeatShuffle(times, index);
            }, velocity);
        };

        repeatShuffle(element.length, 0);
    };

    return (
        <div className='flex justify-between items-end'>
            <a href="mailto:vcsean3@gmail.com">
                <h1 className='text-[10vw] leading-[0.8] mt-10'
                    onMouseEnter={()=>shuffleText(originalText)}
                >
                    {shuffledText}
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