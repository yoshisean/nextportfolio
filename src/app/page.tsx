import Scene from "@/components/3D Elements/Scene";
import {Bacasime_Antique, Inter, Libre_Caslon_Display, Questrial} from "next/font/google";
import Link from "next/link";
import ScrollDown from "@/components/ui/scrollDown";
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})
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
      <div className="min-h-screen overflow-hidden relative">
          <nav className="fixed top-0 left-0 right-0 z-50 pt-10">
              <div className="container mx-auto px-4">
                  <div className="flex items-center justify-between h-16">
                      <span className={`text-xl font-bold tracking-tight`}>SY</span>
                      <div className={`flex space-x-4 md:space-x-8 mx-auto border rounded-full 
                      pr-4 pl-4 pt-2 pb-2 backdrop-blur`}>
                          <Link href="/works">
                              <h1 className="font-light tracking-wide hover:underline-animation underline-offset-4">
                                  /WORKS
                              </h1>
                          </Link>
                          <Link href="/about">
                              <h1 className="font-light tracking-wide hover:underline-animation underline-offset-4">
                                  /ABOUT
                              </h1>
                          </Link>
                          <Link href="/contact">
                              <h1 className="font-light tracking-wide hover:underline-animation underline-offset-4">
                                  /CONTACT
                              </h1>
                          </Link>
                      </div>
                  </div>
              </div>
          </nav>

          <ScrollDown/>

          <section className="relative h-screen flex flex-col justify-center items-center px-4">
              <div className="text-center space-y-8">
                  <h2 className="font-light text-2xl tracking-[0.2em] uppercase">Designer&nbsp;×&nbsp;Developer</h2>
                  <h1 className={` text-7xl sm:text-8xl md:text-9xl tracking-tight ${bantique.className}`}>
                      Sean Yoshihara
                  </h1>
              </div>

              <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full border border-white"></div>
              <Scene/>
          </section>
          {/*<div className="relative flex flex-col items-start justify-center animate-bounce">*/}
          {/*    <ArrowDown className={'h-10 w-10 rounded-full border border-white'}/>*/}
          {/*</div>*/}
          <section className={'h-screen'}>
          </section>
      </div>
  );
}
