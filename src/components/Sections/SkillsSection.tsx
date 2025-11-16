'use client'

export default function SkillsSection() {
    return (
        <section className="flex flex-col justify-center items-center w-full
                space-y-8 md:space-y-16 lg:space-y-32 mx-auto md:p-8 container"
        >
            <h1 className="font-light text-6xl md:text-7xl lg:text-8xl mx-8 text-center">
                Professional Skillset
            </h1>

            {/* Main intro */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 w-full">
                <p className="text-sm sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-light mx-8 text-left leading-relaxed">
                    Hey, I&apos;m Sean, a CS graduate student at Georgia Tech specializing in AI. I work at the intersection
                    of machine learning research and production systems—training models to understand
                    language and vision, then building the infrastructure to deploy them at scale. My passion
                    lies in web development, and I pursue projects that combine my studies with clean and intentional
                    user interfaces.
                </p>
            </div>

            {/* Detailed capabilities */}
            <div className="w-full space-y-16 md:space-y-24">

                {/* AI/ML */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 mx-8">
                    <div className="md:w-1/3">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4">
                            AI/ML Research & Development
                        </h2>
                        <div className="text-sm md:text-base font-light opacity-70">
                            Deep Learning • Interpretability • Computer Vision
                        </div>
                    </div>
                    <div className="md:w-2/3 space-y-4 text-base md:text-lg font-light">
                        <p>
                            I focus on making AI systems more transparent and reliable through mechanistic
                            interpretability—designing sparse architectures that balance reconstruction
                            quality with meaningful feature isolation.
                        </p>
                        <p>
                            In computer vision, I optimize for real-world constraints: training efficient
                            models for autonomous perception where inference speed matters as much as accuracy.
                            I evaluate architectural choices empirically, testing augmentation strategies and
                            backbone networks to find what actually moves metrics.
                        </p>
                        <p className="opacity-70 text-sm md:text-base italic">
                            PyTorch • TensorFlow • HuggingFace • Jupyter • NumPy
                        </p>
                    </div>
                </div>

                {/* Fullstack */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 mx-8">
                    <div className="md:w-1/3">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4">
                            Production Fullstack Engineering
                        </h2>
                        <div className="text-sm md:text-base font-light opacity-70">
                            Scalable Systems • Real-time Data • Cloud Architecture
                        </div>
                    </div>
                    <div className="md:w-2/3 space-y-4 text-base md:text-lg font-light">
                        <p>
                            I build systems that perform under real user load, thinking beyond &quot;does it work?&quot;
                            to &quot;how does it scale, how does it fail, and how do we recover?&quot; I architect for
                            observability from day one—websocket latency, database query patterns, and edge
                            function performance all become measurable, improvable metrics.
                        </p>
                        <p>
                            My approach is security-first: OAuth flows, row-level security policies, and proper
                            data isolation aren&apos;t afterthoughts. Webhook reliability and payment processing
                            require defensive programming—every edge case matters when real money is involved.
                        </p>
                        <p className="opacity-70 text-sm md:text-base italic">
                            Next.js • React • TypeScript • Postgres • Supabase • Redis • Docker • AWS • GCP
                        </p>
                    </div>
                </div>

                {/* Design/3D */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 mx-8">
                    <div className="md:w-1/3">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4">
                            Interactive 3D Experiences
                        </h2>
                        <div className="text-sm md:text-base font-light opacity-70">
                            Three.js • React Three Fiber • WebGL
                        </div>
                    </div>
                    <div className="md:w-2/3 space-y-4 text-base md:text-lg font-light">
                        <p>
                            Creating immersive web experiences means obsessing over details: the falloff curve
                            of a spotlight, the metalness of a material, the subtle caustic patterns that make
                            water feel real. I chase cinematic quality while respecting browser limitations.
                        </p>
                        <p>
                            Performance is non-negotiable. Smooth framerates require optimized render loops,
                            instancing for repeated geometry, and Three.js layers for selective rendering.
                            The goal is presence—users should forget they&apos;re looking at a screen.
                        </p>
                        <p className="opacity-70 text-sm md:text-base italic">
                            Three.js • React Three Fiber • GLSL • Blender • WebGL
                        </p>
                    </div>
                </div>
            </div>

            {/* Approach/Philosophy */}
            <div className="w-full space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mx-8">
                    How I Work
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-base md:text-lg font-light mx-8">
                    <div>
                        <h3 className="font-normal mb-3 text-xl">Research-Driven</h3>
                        <p className="opacity-70">
                            I don&apos;t just implement papers—I understand them. Whether it&apos;s FLARE augmented
                            generation or sparse autoencoder architectures, I dig into the theory before
                            writing code.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-normal mb-3 text-xl">User-Focused</h3>
                        <p className="opacity-70">
                            Technical decisions serve user needs. I&apos;ve conducted research with 100+ developers
                            to understand real workflow pain points, then built solutions that address them.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-normal mb-3 text-xl">Metrics-Oriented</h3>
                        <p className="opacity-70">
                            What gets measured gets improved. Whether it&apos;s model mIoU, websocket latency,
                            or user engagement KPIs, I instrument systems to understand what&apos;s actually happening.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}