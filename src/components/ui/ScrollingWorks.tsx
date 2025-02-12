'use client'
import React from 'react';

const ScrollingText = () => {
    return (
        <div className={`w-full inline-flex flex-nowrap whitespace-nowrap overflow-hidden
        font-light text-7xl md:text-8xl lg:text-9xl -rotate-2`}
        >
            <span className={'animate-infinite-scroll'}>
                RECENT WORK RECENT WORK&nbsp;
            </span>
            <span className={'animate-infinite-scroll'} aria-hidden="true">
                RECENT WORK RECENT WORK&nbsp;
            </span>
        </div>
    );
};

export default ScrollingText;
