'use client'
import {OrthographicCamera, Preload, Scroll, ScrollControls} from "@react-three/drei";
import ImageItems from "@/components/fiber-components/ImageItems";
import AboutContent from "@/components/fiber-components/AboutContent";

export default function AboutPage() {
    return (
        <>
            <OrthographicCamera makeDefault zoom={80}/>
            <color attach="background" args={['#000000']}/>
            <ScrollControls damping={0.2} pages={5}>
                <ImageItems/>
                <Scroll html style={{width: '100%'}}>
                    <AboutContent/>
                </Scroll>
            </ScrollControls>
            <Preload all/>
        </>
    )
}