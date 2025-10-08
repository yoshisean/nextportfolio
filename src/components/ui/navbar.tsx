'use client'
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 pt-2 md:pt-4 lg:pt-6 xl:pt-8">
            <div className="container mx-4 md:mx-auto p-2">
                <div className="flex items-center justify-between h-16">
                    <Link href={"/"}>
                        <Image src={'/logo.svg'} width={32} height={32} alt={'site logo'} className={'backdrop-blur'}/>
                    </Link>
                    <div className={`flex space-x-4 md:space-x-8 mx-auto border rounded-full 
                      pr-4 pl-4 pt-2 pb-2 backdrop-blur`}>
                        {/*<Link href="/works">*/}
                        <Link href={"/works"}>
                            <h1 className="font-light tracking-wide hover:underline underline-offset-4">
                                Works
                            </h1>
                        </Link>

                        <Link href={"/about"}>
                            <h1 className="font-light tracking-wide hover:underline underline-offset-4">
                                About
                            </h1>
                        </Link>

                        <Link href={"/contact"}>
                            <h1 className="font-light tracking-wide hover:underline underline-offset-4">
                                Contact
                            </h1>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;