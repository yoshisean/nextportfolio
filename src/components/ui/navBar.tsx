'use client'
import Link from "next/link";

const NavBar = () => {
    const scrollToSection = (id:string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 pt-10">
            <div className="container mx-auto">
                <div className="flex items-center justify-between h-16">
                    <Link href={"/"}>
                        <span className={`text-xl font-bold tracking-tight`}>SY</span>
                    </Link>
                    <div className={`flex space-x-4 md:space-x-8 mx-auto border rounded-full 
                      pr-4 pl-4 pt-2 pb-2 backdrop-blur`}>
                        {/*<Link href="/works">*/}
                        <h1 className="font-light tracking-wide hover:underline-animation underline-offset-4"
                            onClick={()=>scrollToSection('worksSection')}
                        >
                            /WORKS
                        </h1>
                        {/*</Link>*/}
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
    )
}

export default NavBar;