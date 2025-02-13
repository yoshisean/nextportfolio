import type {Metadata} from "next";
import "./globals.css";

import {Questrial} from 'next/font/google'
import NavBar from "@/components/ui/navBar";
const questrial = Questrial({
    subsets: ['latin'],
    variable: '--font-questrial',
    weight: "400"
})

import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
    title: "Sean Yoshihara - Software Engineer & Designer",
    description: "The portfolio of Sean Yoshihara, a full-stack software engineer and undergraduate at Georgia Tech specializing in machine learning and artificial intelligence. Explore projects showcasing my skills in web development and AI-driven applications.",
    keywords: [
        "Sean Yoshihara", "full-stack developer", "software engineer", "computer science", "Georgia Tech",
        "ML/AI", "machine learning", "artificial intelligence", "web development", "3D graphics",
        "Next.js", "React", "Node.js", "Express", "Tailwind CSS", "Framer Motion", "React Three Fiber",
        "interactive design", "AI applications", "backend development"
    ],

    openGraph: {
        title: "Sean Yoshihara - Software Engineer & Designer",
        description: "Interactive portfolio of Sean Yoshihara, showcasing innovative projects and dynamic experiences built with cutting-edge technologies.",
        url: "https://www.yoshisean.com/", // Replace with actual URL if needed
        images: [
            {
                url: "/PortfolioThumbnail.png", // Replace with the path to your image
                width: 2560,
                height: 1440,
                alt: "Portfolio website landing page"
            }
        ],
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={`${questrial.className} antialiased bg-black overflow-x-hidden`}>
                <NavBar/>
                {children}
                <Analytics/>
            </body>
        </html>

    );
}
