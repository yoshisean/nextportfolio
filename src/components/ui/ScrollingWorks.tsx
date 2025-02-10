'use client'
import React from 'react';

const ScrollingText = () => {
    return (
        <div className={`w-full inline-flex flex-nowrap whitespace-nowrap overflow-hidden
        font-light text-7xl md:text-8xl lg:text-9xl mt-32 -rotate-2`}
        >
            <span className={'animate-infinite-scroll'}>
                SELECTED WORKS SELECTED WORKS&nbsp;
            </span>
            <span className={'animate-infinite-scroll'} aria-hidden="true">
                SELECTED WORKS SELECTED WORKS&nbsp;
            </span>
        </div>
    );
};

export default ScrollingText;
