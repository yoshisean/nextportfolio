import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import Link from "next/link";

interface CaseStudyCardProps {
    number: string
    title: string
    role: string
    description: string
    year: number
    siteUrl?: string
    imageUrl?: string
    imageAlt: string
    isLast?: boolean
    tech: string[]
}

export default function CaseStudyCard(
    {number, title, role, description, year,tech, siteUrl, imageUrl, imageAlt, isLast = false,}
        : CaseStudyCardProps) {
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-[1fr,1px,1fr] gap-8 items-center p-4">
                <div className="space-y-6 p-6 md:p-8">
                    <div className="space-y-6">
                        <p className="text-sm font-medium tracking-wider text-neutral-900">ITEM {number}</p>
                        <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-neutral-900">{title}</h2>
                        <h2 className="text-2xl md:text-3xl font-normal tracking-normal text-neutral-700">{role}</h2>
                        <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">{description}</p>
                    </div>
                    <div className={'flex flex-row space-x-4'}>
                        <div className={'rounded-3xl w-fit border-neutral-400 text-neutral-400 border ' +
                            'py-1 px-3'}>
                            {year}
                        </div>
                        <div className={'rounded-3xl w-fit border-neutral-400 text-neutral-400 border ' +
                            'py-1 px-3'}>
                            {tech.join(', ')}
                        </div>
                    </div>
                </div>
                <Separator orientation="vertical" className="hidden md:block h-full"/>
                <div
                    className="relative aspect-[4/3] overflow-hidden group transition-all duration-500 ease-in-out hover:rounded-[3rem]">
                    <Link href={siteUrl || "/"} target={"_blank"} rel="noopener noreferrer"
                          className={!siteUrl ? 'pointer-events-none' : ''}
                          aria-disabled={!siteUrl}
                          tabIndex={!siteUrl ? -1 : undefined}
                    >
                        <Image
                            src={imageUrl || "/placeholder.svg?height=800&width=600"}
                            alt={imageAlt}
                            fill
                            className="object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
                            priority
                        />
                    </Link>
                </div>

            </div>
            {!isLast && <Separator className="my-16"/>}
        </div>
    )
}

