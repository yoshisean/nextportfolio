'use client'

import Link from "next/link";
import AboutSection from "@/components/Sections/AboutSection";
import AboutScrollSection from "@/components/fiber-components/AboutPage";

export default function Page() {
    return (
        <AboutScrollSection/>
    //     <section className="flex flex-col justify-center items-center w-full
    // space-y-8 md:space-y-16 lg:space-y-24 mx-auto md:p-8 container"
    //     >
    //         {/* Main intro */}
    //         <div className="flex flex-col gap-8 w-full mt-16">
    //             <p className="text-sm sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-light mx-8">
    //                 I&apos;m Sean, a computer science student and cellist navigating the intersection
    //                 of technical precision and creative expression.
    //             </p>
    //         </div>
    //
    //         {/* Story sections */}
    //         <div className="w-full space-y-16 md:space-y-20">
    //
    //             {/* Background */}
    //             <div className="flex flex-col md:flex-row gap-6 md:gap-12 mx-8">
    //                 <div className="md:w-1/3">
    //                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4">
    //                         Background
    //                     </h2>
    //                 </div>
    //                 <div className="md:w-2/3 space-y-4 text-base md:text-lg font-light">
    //                     <p>
    //                         Currently pursuing my Master&apos;s in Computer Science at Georgia Tech with a
    //                         specialization in Artificial Intelligence, building on my undergraduate degree
    //                         in Intelligence & Theory. My academic path has taken me from fundamental
    //                         algorithms and theory to cutting-edge ML research.
    //                     </p>
    //                     <p>
    //                         In summer 2023, I co-founded Point Drift in Berlin, working with a small
    //                         team to bring novel AI research into production. It ended up failing, but getting to
    //                         talk to developers and demo a product to a company was something you don&apos;t
    //                         learn in a classroom. I try to apply my experiences throughout any given
    //                         product development process.
    //                     </p>
    //                 </div>
    //             </div>
    //
    //             {/* Music */}
    //             <div className="flex flex-col md:flex-row gap-6 md:gap-12 mx-8">
    //                 <div className="md:w-1/3">
    //                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4">
    //                         Music
    //                     </h2>
    //                 </div>
    //                 <div className="md:w-2/3 space-y-4 text-base md:text-lg font-light">
    //                     <p>
    //                         I regularly serve as principal cellist for the Georgia Tech Symphony Orchestra and simultaneously
    //                         perform with the Emory University Symphony Orchestra. In 2023, I won the GTSO Concerto Competition and
    //                         performed Dvořák&apos;s Cello Concerto with the orchestra. I&apos;m inactive in the competition scene now,
    //                         but would love to perform in the near future.
    //                     </p>
    //                 </div>
    //             </div>
    //
    //             {/* Current Focus */}
    //             <div className="flex flex-col md:flex-row gap-6 md:gap-12 mx-8">
    //                 <div className="md:w-1/3">
    //                     <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4">
    //                         Current Focus
    //                     </h2>
    //                 </div>
    //                 <div className="md:w-2/3 space-y-4 text-base md:text-lg font-light">
    //                     <p>
    //                         Professionally, I&apos;m working on Illutix through Georgia Tech&apos;s
    //                         Create-X program, building infrastructure for real-time visualization and analysis
    //                         of massive datasets. It&apos;s been particularly challenging both in terms of technical scope
    //                         and execution, and I&apos;ve grown significantly through the journey.
    //                     </p>
    //                     <p>
    //                         For my fun projects, I actually considered a complete revamp of this portfolio site starting with the hero
    //                         section. The Wallace Room scene from the film Bladerunner 2049 was going to be the source of inspiration
    //                         but I ended up scrapping it in the end. The process ended up being quite interesting especially
    //                         due to the lack of relevant tutorials/information online so I will make a short writeup on that
    //                         in the near future. In the meantime you can access the Three.JS scene through this link
    //                         here: <Link href={'/room'} className={'hover:underline'}>/room</Link>.
    //                     </p>
    //                 </div>
    //             </div>
    //         </div>
    //     </section>
    )
}