import CaseStudyCard from "@/components/ui/CaseStudyCard";

export default function WorksOverview() {
    interface caseStudyProps {
        number: string
        title: string
        description: string
        siteUrl?: string
        imageUrl?: string
        imageAlt: string
        year: number
        tech: string[]
    }
    const caseStudies: caseStudyProps[] = [
        {
            number: "01",
            title: "DATAFRONT",
            year: 2025,
            description:
                "Fullstack solo developer of a SaaS service that converts data into presentation ready visuals out of the box, " +
                "dramatically reducing reporting time for clients.",
            imageUrl: '/Datafront.png',
            imageAlt: "Image of data visualization website",
            tech: ['NextJS','Supabase','PostgreSQL','Stripe','HTML','TailwindCSS']
        },
        {
            number: "02",
            title: "CHUNIO",
            year: 2024,
            description:
                "I was the primary Frontend Engineer for a personalized laptop recommendation service boasting a " +
                "collection of over 5000 laptops.",
            siteUrl: "https://chunio.net/",
            imageUrl: '/Chunio.png',
            imageAlt: "Laptop recommendation site",
            tech: ['NextJS','HTML','TailwindCSS','Javascript']
        },
        {
            number: "03",
            title: "POINT DRIFT",
            year: 2023,
            description:
                "As part of a small startup team exploring AI assistants in Enterprise codebases, I built a " +
                "dynamic landing page with Basic interactions.",
            siteUrl: "https://pointdrift.com/",
            imageUrl: '/PointDrift.png',
            imageAlt: "AI codebase startup",
            tech: ['React','HTML','CSS','Javascript']
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

