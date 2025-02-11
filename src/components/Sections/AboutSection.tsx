import Image from "next/image";

const AboutSection = () => {
    return (
        <section className={'relative h-screen flex flex-col md:flex-row items-center w-full bg-[#FBF7ED] p-8'}
                 id={'aboutSection'}>
            <div className="md:w-1/2 relative border border-gray-200 shadow-xl overflow-hidden rounded-xl m-4">
                <Image
                    src={'/SeanView.jpg'}
                    alt={'Watching the sea at Sassnitz, GER'}
                    layout="responsive"
                    width={5472}
                    height={3080}
                    objectFit="cover"
                />
            </div>
            <div className="md:w-1/2 m-4">
                <h1 className={'text-2xl space-y-8'}>
                    Developer, Designer, Cellist.
                    <br/>
                    Coding and designing for 7+ years
                </h1>
            </div>
        </section>

    )
}
export default AboutSection