'use client'
import {Button} from "@/components/ui/button";
import Image from 'next/image'
import {Separator} from "@/components/ui/separator";

const worksList = [
    {
        title: "test",
        description: "description",
        alt: "some image description",
    }
]

const WorksOverview = () => {
    return (
        <>
            {
                worksList.map((work,index)=>{
                    return(
                        worksComponent(index,work.title,work.description,work.alt,index==worksList.length-1)
                    )
                })
            }
        </>
    )
}

interface CaseStudyCardProps {
    number: string
    title: string
    description: string
    imageAlt: string
    isLast?: boolean
}
function worksComponent({ number, title, description, imageAlt, isLast = false }: CaseStudyCardProps) {
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
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
                <div className="relative aspect-[4/3] md:aspect-auto md:h-[600px] overflow-hidden group">
                    <Image
                        src="/placeholder.svg?height=800&width=600"
                        alt={imageAlt}
                        fill
                        className="object-cover transition-all duration-500 ease-in-out group-hover:rounded-3xl"
                        priority
                    />
                </div>
            </div>
            {!isLast && <Separator className="my-16" />}
        </div>
    )
}

export default WorksOverview