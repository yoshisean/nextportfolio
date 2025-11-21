'use client'

export default function SkillsSection() {
    return (
        <section className="flex flex-col justify-center items-center w-full
                space-y-8 md:space-y-16 lg:space-y-32 mx-auto md:p-8 container py-16 md:py-24 lg:py-32"
        >
            <h1 className="font-light text-6xl md:text-7xl lg:text-8xl mx-8 text-center">
                Professional Skills
            </h1>

            {/* Main intro */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 w-full px-8">
                <p className="text-sm sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-light text-left leading-relaxed">
                    Hey, I&apos;m Sean, a CS graduate student at Georgia Tech specializing in AI. I work at the intersection
                    of machine learning research and product development. My passion lies in web development, and in my free time
                    I build projects that combine my studies with clean and intentional user interfaces.
                </p>
            </div>

            {/* Detailed capabilities */}
            <div className="w-full space-y-16 md:space-y-24 px-8">

                {/* AI/ML */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                    <div className="md:w-1/3">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4">
                            AI/ML Research & Development
                        </h2>
                    </div>
                    <div className="md:w-2/3 space-y-4 text-base md:text-lg font-light">
                        <p>
                            Coursework includes Efficient Machine Learning, Natural Language Processing, Computer Vision, and Machine Learning.
                            My primary focus is improving AI system transparency and interpretability through analysis and feature isolation.
                            I also specialize in taking models from research projects to production-ready systems using both industry-standard and emerging techniques.
                        </p>
                        <p className="opacity-70 text-sm md:text-base italic">
                            PyTorch • TensorFlow • HuggingFace • Jupyter • NumPy
                        </p>
                    </div>
                </div>

                {/* Fullstack */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                    <div className="md:w-1/3">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4">
                            Fullstack Engineering
                        </h2>
                    </div>
                    <div className="md:w-2/3 space-y-4 text-base md:text-lg font-light">
                        <p>
                            I build full-stack applications focused on performance, scalability, and user experience.
                            My approach emphasizes type-safe architectures, efficient data handling, and seamless deployment pipelines.
                            I&apos;ve shifted from making websites that just look good to building products that solve real problems.
                        </p>
                        <p className="opacity-70 text-sm md:text-base italic">
                            Next.js • React • TypeScript • Postgres • Supabase • Redis • Docker • AWS • GCP
                        </p>
                    </div>
                </div>

                {/* Design/3D */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                    <div className="md:w-1/3">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-4">
                            Interactive 3D Experiences
                        </h2>
                    </div>
                    <div className="md:w-2/3 space-y-4 text-base md:text-lg font-light">
                        <p>
                            I create immersive 3D web experiences that enhance user engagement without sacrificing performance.
                            From concept mock ups in Blender to optimized WebGL deployment, I focus on achieving specific creative visions
                            without distracting users from key site information. I&apos;m deliberate about using 3D only when it makes sense.
                        </p>
                        <p className="opacity-70 text-sm md:text-base italic">
                            Three.js • React Three Fiber • Blender • WebGL
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}