'use client'

import Link from "next/link";

export default function AboutSection() {
    return (
        <section className="flex flex-col justify-center items-center w-full
    space-y-8 md:space-y-16 lg:space-y-24 mx-auto md:p-8 container"
        >
            {/* Main intro */}
            <div className="flex flex-col gap-8 w-full mt-16">
                <p className="text-sm sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-light mx-8">
                    I&apos;m Sean, a computer science student and cellist navigating the intersection
                    of technical precision and creative expression.
                </p>
            </div>

            {/* Story sections */}
            <div className="w-full space-y-16 md:space-y-20">

                {/* Background */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 mx-8">
                    <div className="md:w-1/3">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4">
                            Background
                        </h2>
                    </div>
                    <div className="md:w-2/3 space-y-4 text-base md:text-lg font-light">
                        <p>
                            Currently pursuing my Master&apos;s in Computer Science at Georgia Tech with a
                            specialization in Artificial Intelligence, building on my undergraduate degree
                            in Intelligence & Theory. My academic path has taken me from fundamental
                            algorithms and theory to cutting-edge ML research.
                        </p>
                        <p>
                            In summer 2023, I co-founded Point Drift in Berlin, working with a small
                            team to bring novel AI research into production. It ended up failing, but getting to
                            talk to developers and demo a product to a company was something you don&apos;t exactly
                            learn in a classroom.
                        </p>
                    </div>
                </div>

                {/* Music */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 mx-8">
                    <div className="md:w-1/3">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4">
                            Music
                        </h2>
                    </div>
                    <div className="md:w-2/3 space-y-4 text-base md:text-lg font-light">
                        <p>
                            I regularly serve as principal cellist for the Georgia Tech Symphony Orchestra while also
                            playing with the Emory University Symphony Orchestra. In 2023, I won the GTSO Concerto Competition and
                            performed Dvořák&apos;s Cello Concerto with the orchestra. I&apos;m inactive in the competition scene now,
                            but would love to perform in the near future.
                        </p>
                    </div>
                </div>

                {/* Current Focus */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 mx-8">
                    <div className="md:w-1/3">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4">
                            Current Focus
                        </h2>
                    </div>
                    <div className="md:w-2/3 space-y-4 text-base md:text-lg font-light">
                        <p>
                            On the professional side, I&apos;m working on Illutix through Georgia Tech&apos;s
                            Create-X program, building infrastructure for real-time visualization of massive
                            datasets. It&apos;s been particularly challenging both in terms of technical scope
                            and execution, and I&apos;ve gotten a strong sense of what it means to build a good
                            product through the process.
                        </p>
                        <p>
                            On a different note, I actually considered a complete revamp of this portfolio site, starting with the hero
                            section. The Wallace Room scene from the film Bladerunner 2049 was going to be the centerpiece
                            but it ended up not matching my vision. The process ended up being quite interesting especially
                            due to the lack of relevant tutorials/information online so I will make a short writeup on that
                            when I get the chance. In the meantime you can access through the Three.JS scene through the
                            route <Link href={'/room'} className={'hover:underline'}>&quot;/room&quot;</Link>.
                        </p>
                    </div>
                </div>

                {/* Philosophy */}
                {/*<div className="flex flex-col md:flex-row gap-6 md:gap-12 mx-8">*/}
                {/*    <div className="md:w-1/3">*/}
                {/*        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4">*/}
                {/*            How I Think*/}
                {/*        </h2>*/}
                {/*    </div>*/}
                {/*    <div className="md:w-2/3 space-y-4 text-base md:text-lg font-light">*/}
                {/*        <p>*/}
                {/*            I believe the best technical work happens when you deeply understand both the*/}
                {/*            theory and the constraints. Papers give you the ideas, but production teaches*/}
                {/*            you what actually matters. Security isn&apos;t a feature you add later. Performance*/}
                {/*            isn&apos;t something you optimize eventually. They&apos;re fundamental to good design.*/}
                {/*        </p>*/}
                {/*        <p>*/}
                {/*            I&apos;m drawn to problems that sit at the boundary of research and engineering—where*/}
                {/*            you need to understand the math well enough to implement it correctly, but also*/}
                {/*            care enough about users to make it actually usable.*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </section>
    )
}