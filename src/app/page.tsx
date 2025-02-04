import Scene from "@/components/3D Elements/Scene";
import {Bacasime_Antique, Libre_Caslon_Display} from "next/font/google";
import ScrollDown from "@/components/ui/scrollDown";

const libre = Libre_Caslon_Display({
    subsets: ['latin'],
    variable: '--font-libre',
    weight: '400'
})
const bantique = Bacasime_Antique({
    variable: '--font-bantique',
    weight: '400'
})
export default function Home() {
    return (
        <div className="min-h-screen relative overflow-y-auto custom-scrollbar-hidden">
            <section className="relative h-[95vh] flex flex-col justify-center items-center px-4 w-full">
                <div className="text-center space-y-8 lg:hidden">
                    <h2 className="font-light text-2xl tracking-[0.2em]">Designer × Developer</h2>
                    <h1 className={`text-7xl sm:text-8xl md:text-9xl tracking-tight ${bantique.className}`}>
                        Sean Yoshihara
                    </h1>
                </div>
                <div className="hidden lg:block">
                    <Scene/>
                </div>
                <ScrollDown/>
            </section>

            <section className={'h-screen flex flex-col items-center px-4 w-full'}>
                <h1 className={`text-4xl sm:text-5xl md:text-6xl font-light`}>
                    Designing and coding all sorts of things
                </h1>
            </section>
        </div>
    );
}
