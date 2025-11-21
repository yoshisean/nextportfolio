'use client'
import Link from "next/link";
import Image from "next/image";
import SheetNav from "@/components/ui/sheet-nav";

const Navbar = () => {
    return (
        <nav className="relative md:absolute top-0 left-0 right-0 z-10 px-4 md:px-8 lg:px-12 xl:px-16">
            <div className="mx-4 md:mx-auto p-2">
                <div className="flex items-center justify-between h-16">
                    <Link href={"/"}>
                        <Image src={'/logov2.svg'} width={72} height={72} alt={'site logo'}/>
                    </Link>
                    <div className={`hidden sm:block`}>
                        <div className="flex space-x-4 md:space-x-8 lg:space-x-12 text-sm md:text-md lg:text-lg">

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
                    <div className={`block sm:hidden`}>
                        <SheetNav/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;