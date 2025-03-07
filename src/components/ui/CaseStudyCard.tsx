import Image from "next/image"
import Link from "next/link";
import {MotionValue, useTransform, motion} from "framer-motion";

interface CaseStudyCardProps {
    color: string
    index: number
    progress: MotionValue<number>
    range: number[]
    targetScale: number

    number: string
    title: string
    description: string
    year: string
    role: string
    tech: string[]
    siteUrl?: string
    imageUrl: string
    imageAlt: string
}

export default function CaseStudyCard(
    {number, title, description, year, role, tech, siteUrl, imageUrl, imageAlt,color, index, progress, range, targetScale}
        : CaseStudyCardProps) {

    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div className="flex items-center justify-center h-screen sticky top-0">
            <motion.div className="space-y-8 rounded-md relative lg:h-[550px]"
                 style={{backgroundColor: color, scale: scale, top: `calc(-5vh + ${index * 40}px)`}}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-4 h-full">
                    <div className="space-y-6 p-6 md:p-8">
                        <div className="space-y-6">
                            <p className="text-sm font-medium tracking-wider text-neutral-950">ITEM {number}</p>
                            <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-neutral-950">{title}</h2>
                            <h2 className="text-2xl md:text-3xl font-normal tracking-normal text-neutral-700">{role}</h2>
                            <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">{description}</p>
                        </div>
                        <div className={'flex flex-row space-x-4 text-neutral-700'}>
                            <div className={'rounded-3xl w-fit h-fit border-neutral-600 border py-1 px-3'}>
                                {year}
                            </div>
                            <div className={'rounded-3xl w-fit h-fit border-neutral-600 border py-1 px-3'}>
                                {tech.join(', ')}
                            </div>
                        </div>
                    </div>
                    <div
                        className="relative aspect-[4/3] overflow-hidden group transition-all duration-500 ease-in-out rounded-md m-4">
                        <Link href={siteUrl || "/"} target={"_blank"} rel="noopener noreferrer"
                              className={!siteUrl ? 'pointer-events-none' : ''}
                              aria-disabled={!siteUrl}
                              tabIndex={!siteUrl ? -1 : undefined}
                        >
                            <Image
                                src={imageUrl}
                                alt={imageAlt}
                                fill
                                className="object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
                                priority
                            />
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

