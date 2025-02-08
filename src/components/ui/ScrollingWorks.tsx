'use client'
import React from 'react';

const ScrollingText = () => {
    return (
        <div className={`w-full inline-flex flex-nowrap whitespace-nowrap overflow-hidden px-0
        font-medium text-7xl md:text-8xl lg:text-9xl mt-32`}
        >
            <span className={'animate-infinite-scroll'}>
                SELECTED WORKS SELECTED WORKS SELECTED&nbsp;
            </span>
            <span className={'animate-infinite-scroll'} aria-hidden="true">
                SELECTED WORKS SELECTED WORKS SELECTED&nbsp;
            </span>
        </div>
    );
};

export default ScrollingText;
