'use client'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {HamburgerMenuIcon} from "@radix-ui/react-icons";
import Link from "next/link";

export default function SheetNav() {
    return (
        <Sheet>
            <SheetTrigger>
                <HamburgerMenuIcon/>
            </SheetTrigger>
            <SheetContent className={'bg-black text-white justify-center'}>
                <SheetHeader>
                    <SheetTitle className={'text-white items-center text-center text-3xl'}>
                        Navigation
                    </SheetTitle>
                    <SheetDescription/>
                </SheetHeader>
                <div className={'flex flex-col space-y-8 items-center text-2xl'}>
                    <Link href={"/"}>
                        <h1 className="font-normal tracking-wide hover:underline underline-offset-4">
                            Home
                        </h1>
                    </Link>
                    <Link href={"/about"}>
                        <h1 className="font-normal tracking-wide hover:underline underline-offset-4">
                            About
                        </h1>
                    </Link>

                    <Link href={"/contact"}>
                        <h1 className="font-normal tracking-wide hover:underline underline-offset-4">
                            Contact
                        </h1>
                    </Link>
                </div>
            </SheetContent>
        </Sheet>
    )
}