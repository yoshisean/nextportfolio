export interface caseStudyProps {
    number: string
    title: string
    role: string
    description: string
    siteUrl?: string
    imageUrl: string
    imageAlt: string
    year: string
    tech: string[]
    color: string
}
export const caseStudies: caseStudyProps[] = [
    {
        number: "001",
        title: "DATAFRONT",
        role: 'Fullstack Development, Web Design',
        year: '2024-2025+',
        description:
            "Fullstack solo developer of a SaaS product that converts data into presentation ready visuals out of the box, " +
            "dramatically reducing reporting time for clients.",
        imageUrl: '/Datafront.png',
        imageAlt: "Image of data visualization website",
        tech: ['NextJS','Supabase','TypeScript','SQL','TailwindCSS'],
        color: "#d6ccc2"
    },
    {
        number: "002",
        title: 'CHUNIO',
        role: 'Frontend Development',
        year: '2024',
        description:
            "I was the primary Frontend Engineer for a personalized laptop recommendation service boasting a " +
            "collection of over 5000 laptops.",
        siteUrl: "https://chunio.net/",
        imageUrl: '/Chunio.png',
        imageAlt: "Laptop recommendation site",
        tech: ['NextJS','TypeScript','TailwindCSS'],
        color: "#e3d5ca"
    },
    {
        number: "003",
        title: "POINT DRIFT",
        role: 'Frontend Development',
        year: '2023',
        description:
            "As part of a small startup team exploring AI assistants in Enterprise codebases, I built a " +
            "dynamic landing page with basic interactions and page routing.",
        siteUrl: "https://pointdrift.com/",
        imageUrl: '/PointDrift.png',
        imageAlt: "AI codebase startup",
        tech: ['React','Javascript','CSS'],
        color: "#d5bdaf"
    },
]