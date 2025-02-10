import CaseStudyCard from "@/components/ui/CaseStudyCard";

export default function WorksOverview() {
    interface caseStudyProps {
        number: string
        title: string
        description: string
        imageUrl?: string
        imageAlt: string
    }
    const caseStudies: caseStudyProps[] = [
        {
            number: "01",
            title: "Untitled Startup",
            description:
                "Fullstack solo developer of a SaaS service that converts data into presentation ready visuals out of the box, " +
                "dramatically reducing reporting time for clients.",
            imageAlt: "Aerial view of waves crashing",
        },
        {
            number: "02",
            title: "Chunio",
            description:
                "I was the primary Frontend Engineer for a personalized laptop recommendation service boasting a " +
                "collection of over 5000 laptops.",
            imageUrl: '/Chunio.png',
            imageAlt: "Beach sunset with waves",
        },
    ]

    return (
        <div className="mx-auto container space-y-8 pt-16">
            {caseStudies.map((study, index) => (
                <CaseStudyCard key={study.number} {...study} isLast={index === caseStudies.length - 1} />
            ))}
        </div>
    )
}

