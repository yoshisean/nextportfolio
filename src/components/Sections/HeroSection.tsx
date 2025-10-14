import BladeRunnerScene from "@/components/fiber-components/bladerunner/scene";
import MinimalScene from "@/components/fiber-components/bladerunner/minimalScene";

export default function HeroSection() {
    return (
        <section className={'w-full h-[40vh] md:h-[60vh] lg:h-[80vh] 2xl:h-[100vh]'}>
            {/*<BladeRunnerScene/>*/}
            <MinimalScene/>
        </section>

    )
}
