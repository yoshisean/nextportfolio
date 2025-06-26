import Image from "next/image"
import Link from "next/link";
import {MotionValue, useTransform, motion} from "framer-motion";
import {caseStudyProps} from "@/components/ui/worksList";
import { ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
    index: number
    progress: MotionValue<number>
    range: number[]
    targetScale: number

    caseStudy: caseStudyProps
}

export default function CaseStudyCard(
    {index, progress, range, targetScale, caseStudy}
        : CaseStudyCardProps) {

    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div className="flex items-center justify-center h-screen sticky top-0">
            <motion.div className="space-y-8 rounded-md relative lg:h-[550px]"
                 style={{backgroundColor: caseStudy.color, scale: scale, top: `calc(-5vh + ${index * 40}px)`}}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-4 md:py-6 lg:py-8 h-full">
                    <div className="space-y-6 p-6 md:p-8">
                        <div className="space-y-6">
                            <p className="text-sm font-medium tracking-wider text-neutral-950">ITEM {caseStudy.number}</p>
                            <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-neutral-950">{caseStudy.title}</h2>
                            <h2 className="text-2xl md:text-3xl font-normal tracking-normal text-neutral-800">{caseStudy.role}</h2>
                            <p className="text-lg md:text-xl text-neutral-800 leading-relaxed">{caseStudy.description}</p>
                        </div>
                        <div className={'flex flex-row space-x-4 text-neutral-800'}>
                            <div className={'rounded-3xl w-fit h-fit border-neutral-800 border py-1 px-3'}>
                                {caseStudy.year}
                            </div>
                            <div className={'rounded-3xl w-fit h-fit border-neutral-800 border py-1 px-3'}>
                                {caseStudy.tech.join(', ')}
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden group transition-all duration-500 ease-in-out rounded-md m-4 h-full w-full">
                        <Link
                            href={caseStudy.siteUrl || "/"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={!caseStudy.siteUrl ? "pointer-events-none" : ""}
                            aria-disabled={!caseStudy.siteUrl}
                            tabIndex={!caseStudy.siteUrl ? -1 : undefined}
                        >
                            <Image
                                src={caseStudy.imageUrl}
                                alt={caseStudy.imageAlt}
                                fill
                                className="object-contain transition-all duration-500 ease-in-out group-hover:blur-sm"
                                priority
                            />
                            {/* Overlay text */}
                            <div className="text-white absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100  transition-opacity duration-500">
                                <div className={'flex items-center justify-center bg-black p-2 px-4 rounded-full'}>
                                    <p className=" text-lg font-normal">Visit Project</p>
                                    <ArrowRight className={'w-4- h-4'}/>
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>
            </motion.div>
        </div>
    )
}

