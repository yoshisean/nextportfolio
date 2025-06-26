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
        number: "000",
        title: "Sparse Autoencoders",
        role: 'Applied ML Researcher',
        year: '2025',
        description:
            "Explored the use of sparse autoencoders to interpret hidden state representations in the LLaMA 3.2 language model, revealing semantically meaningful features tied to real-world tasks.",
            // "I implemented the JumpSAE architecture, tuned training hyperparameters, and developed custom evaluation metrics to analyze the tradeoff between sparsity and reconstruction fidelity.",
        siteUrl: 'https://drive.google.com/file/d/15dpW1GtyVDpgrm3L3mjUX1LLptUz-TzY/view?usp=sharing',
        imageUrl: '/SaeThumbnail.png',
        imageAlt: "Image of data visualization website",
        tech: ['Jupyter','PyTorch','HuggingFace','LLama 3.2B'],
        color: "#B9B7A7"
    },
    {
        number: "001",
        title: "ILLUTIX",
        role: 'Fullstack Development, Web Design',
        year: '2024-2025+',
        description:
            "Fullstack solo developer of a SaaS product that converts data into presentation ready visuals out of the box, " +
            "dramatically reducing reporting time for clients.",
        siteUrl: 'https://www.illutix.com/',
        imageUrl: '/Illutix.png',
        imageAlt: "Image of data visualization website",
        tech: ['NextJS','Supabase','TypeScript','SQL','TailwindCSS'],
        color: "#B5AA9D"
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
        color: "#7C90A0"
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
        color: "#9C92A3"
    },
]