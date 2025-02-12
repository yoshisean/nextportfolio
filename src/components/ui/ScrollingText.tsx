'use client'

const ScrollingText = () => {
    return (
        <div className={'flex flex-col spaec-y-4'}>
            <div className={`w-full inline-flex flex-nowrap whitespace-nowrap overflow-hidden 
            font-light text-7xl md:text-8xl lg:text-9xl`}
            >
                <span className={'animate-infinite-scroll'}>
                    RECENT WORK RECENT WORK&nbsp;
                </span>
                <span className={'animate-infinite-scroll'} aria-hidden="true">
                    RECENT WORK RECENT WORK&nbsp;
                </span>
            </div>

            <div className={`w-full inline-flex flex-nowrap whitespace-nowrap overflow-hidden 
            font-light text-7xl md:text-8xl lg:text-9xl`}
            >
                <span className={'animate-infinite-scroll-reverse'}>
                    RECENT WORK RECENT WORK&nbsp;
                </span>
                <span className={'animate-infinite-scroll-reverse'} aria-hidden="true">
                    RECENT WORK RECENT WORK&nbsp;
                </span>
            </div>
        </div>
    )
};

export default ScrollingText;