import { motion } from "framer-motion";
import gsap from 'gsap';
import Image from "next/image";
import {useEffect, useRef} from "react";
import {Variants} from "motion";

const scaleAnimation: Variants = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    enter: {
        scale: 1,
        x: "-50%",
        y: "-50%",
        transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
        scale: 0,
        x: "-50%",
        y: "-50%",
        transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    },
};

interface ModalProps {
    modal: { active: boolean, index: number };
    projects: {
        title: string;
        src: string;
        color: string;
    }[];
}

export default function Modal({ modal, projects }: ModalProps) {
    const { active, index } = modal;
    const modalContainer = useRef(null);
    const cursor = useRef(null);
    const cursorLabel = useRef(null);

    useEffect( () => {
        const xMoveContainer = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
        const yMoveContainer = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})

        const xMoveCursor = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
        const yMoveCursor = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})

        const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})
        const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})

        window.addEventListener('mousemove', (e) => {
            const { pageX, pageY } = e;
            xMoveContainer(pageX)
            yMoveContainer(pageY)
            xMoveCursor(pageX)
            yMoveCursor(pageY)
            xMoveCursorLabel(pageX)
            yMoveCursorLabel(pageY)
        })
    }, [])

    return (
        <>
            <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}
                        className="absolute h-[350px] w-[400px] bg-white overflow-hidden pointer-events-none flex items-center justify-center">
                <div style={{ top: index * -100 + "%" }}
                    className="absolute h-full w-full transition-[top] duration-500 ease-out">
                    {projects.map((project, i) => {
                        const { src, color } = project;
                        return (
                            <div key={`modal_${i}`} style={{ backgroundColor: color }} className="h-full w-full flex items-center justify-center">
                                <Image
                                    src={`/images/${src}`}
                                    width={300}
                                    height={0}
                                    alt="image"
                                    className="h-auto"
                                />
                            </div>
                        );
                    })}
                </div>
            </motion.div>

            {/* Cursor circle */}
            <motion.div ref={cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className="absolute z-[2] flex items-center justify-center w-[80px] h-[80px]
            rounded-full bg-[#455CE9] text-white text-[14px] font-light pointer-events-none"/>

            <motion.div ref={cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className="absolute z-[2] flex items-center justify-center w-[80px] h-[80px]
            rounded-full text-white text-[14px] font-light pointer-events-none bg-transparent">
                View
            </motion.div>
        </>
    );
}
