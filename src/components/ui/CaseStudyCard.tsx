import Image from "next/image"
import {Button} from "@/components/ui/button"
import {Separator} from "@/components/ui/separator"

interface CaseStudyCardProps {
    number: string
    title: string
    description: string
    imageUrl?: string
    imageAlt: string
    isLast?: boolean
}

export default function CaseStudyCard({
                                          number,
                                          title,
                                          description,
                                          imageUrl,
                                          imageAlt,
                                          isLast = false
                                      }: CaseStudyCardProps) {
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-[1fr,1px,1fr] gap-8 items-center">
                <div className="space-y-6 p-6 md:p-8">
                    <div className="space-y-6">
                        <p className="text-sm font-medium tracking-wider text-neutral-900">CASE STUDY {number}</p>
                        <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-neutral-900">{title}</h2>
                        <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">{description}</p>
                    </div>
                    <Button
                        variant="outline"
                        className="rounded-full border-neutral-400 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300"
                    >
                        VIEW CASE STUDY
                    </Button>
                </div>
                <Separator orientation="vertical" className="hidden md:block h-full"/>
                <div className="relative aspect-[4/3] overflow-hidden group">
                    <Image
                        src={imageUrl || "/placeholder.svg?height=800&width=600"}
                        alt={imageAlt}
                        fill
                        className="object-cover transition-all duration-500 ease-in-out group-hover:rounded-[3rem]"
                        priority
                    />
                </div>
            </div>
            {!isLast && <Separator className="my-16"/>}
        </div>
    )
}

