import type {Metadata} from "next";
import "./globals.css";

import {Questrial} from 'next/font/google'
import NavBar from "@/components/ui/navBar";
const questrial = Questrial({
    subsets: ['latin'],
    variable: '--font-questrial',
    weight: "400"
})
export const metadata: Metadata = {
    title: "Sean Yoshihara",
    description: "A Dynamic and interactive portfolio website for software engineer Sean Yoshihara. ",
};
//secondary color #987654
export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={`${questrial.className} antialiased bg-[#FBF7ED] overflow-x-hidden`}>
                <NavBar/>
                {children}
            </body>
        </html>

    );
}
