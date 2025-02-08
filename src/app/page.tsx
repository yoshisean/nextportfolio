import Scene from "@/components/3D Elements/Scene";
import {Bacasime_Antique} from "next/font/google";
import ScrollDown from "@/components/ui/scrollDown";
import ScrollingWorks from "@/components/ui/ScrollingWorks";
import LazyScene from "@/components/3D Elements/DynamicScene";

// const libre = Libre_Caslon_Display({
//     subsets: ['latin'],
//     variable: '--font-libre',
//     weight: '400'
// })
const bantique = Bacasime_Antique({
    variable: '--font-bantique',
    weight: '400'
})
export default function Home() {
    return (
        <div className="min-h-screen flex flex-col overflow-y-auto custom-scrollbar-hidden space-y-8">
            <section className="relative h-[95vh] flex flex-col justify-center items-center w-full px-8">
                <div className="text-center lg:hidden">
                    <h2 className="font-light text-2xl tracking-[0.2em]">Designer × Developer</h2>
                    <h1 className={`text-7xl sm:text-8xl md:text-9xl tracking-tight ${bantique.className}`}>
                        Sean Yoshihara
                    </h1>
                </div>
                <LazyScene/>
                <ScrollDown/>
            </section>

            <section className={'h-screen flex flex-col items-center w-full'}>
                <div className="md:w-1/3 md:ml-auto flex justify-center w-full px-8">
                    <h1 className={`text-sm sm:text-md md:text-lg font-light`}>
                        I&apos;m a software engineer with an interest in interactive design.
                        My Computer Science degree concentrations are in AI/ML model development processes and
                        mathematical theory.
                    </h1>
                </div>
                <ScrollingWorks/>
            </section>
        </div>
    );
}
