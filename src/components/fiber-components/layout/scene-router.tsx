'use client'
import { usePathname } from 'next/navigation'
import { OrthographicCamera } from '@react-three/drei'
import WallaceRoomScene from "@/components/fiber-components/bladerunner/wallace-room-scene";
import AboutPage from "@/components/fiber-components/layout/about/about-page";

export default function SceneRouter() {
    const pathname = usePathname()

    return (
        <>
            {pathname === '/' && null}
            {pathname === '/about' && <AboutPage/>}
            {pathname === '/room' && <WallaceRoomScene/>}
            {/*{pathname === '/contact' && <color attach="background" args={['#000000']} />}*/}
        </>
    )
}