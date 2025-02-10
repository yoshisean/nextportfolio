import FooterContent from "@/components/ui/FooterContent";

export default function Footer() {
    return (
        <div
            className='relative h-[500px]'
            style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
            <div className='relative h-[calc(100vh+500px)] -top-[100vh]'>
                <div className='h-[500px] sticky top-[calc(100vh-500px)]'>
                    <FooterContent/>
                </div>
            </div>
        </div>
    )
}