import CaseStudyCard from "@/components/ui/CaseStudyCard";

export default function WorksOverview() {
    const caseStudies = [
        {
            number: "01",
            title: "Surfline",
            description:
                "I led the redesign of a popular surf forecast product, enhancing user experience and engagement through innovative design solutions",
            imageAlt: "Aerial view of waves crashing",
        },
        {
            number: "02",
            title: "Wavelength",
            description:
                "Developing an AI-powered analytics platform for ocean conditions, helping surfers make better decisions about when and where to surf",
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

