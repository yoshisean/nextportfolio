'use client';
import React, {Dispatch, SetStateAction} from 'react'

interface ProjectProps {
    index: number;
    title: string;
    category: string;
    setModal: Dispatch<SetStateAction<{active: boolean, index: number}>>

}
export default function Project({ index, title, category, setModal }: ProjectProps) {
    return (
        <div
            onMouseEnter={() => setModal({ active: true, index })}
            onMouseLeave={() => setModal({ active: false, index })}
            className="group flex w-full items-center justify-between border-t border-gray-300 px-6 md:px-12 lg:px-18 xl:px-24 py-24
            cursor-pointer transition-all duration-200 ease-in-out container last:border-b hover:opacity-50">
            <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-normal m-0 transition-all duration-400 group-hover:-translate-x-[10px]">
                {title}
            </h2>
            <p className="font-light transition-all duration-400 group-hover:translate-x-[10px]">
                {category}
            </p>
        </div>
    );
}
