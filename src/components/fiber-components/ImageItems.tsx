import {useRef, useState} from "react";
import {Image, Scroll, useIntersect} from "@react-three/drei";
import {Mesh} from "three";
import {useFrame, useThree} from "@react-three/fiber";
import * as THREE from "three";

function Item({url, scale, ...props}: { url: string; scale: [number, number]; [key: string]: any }) {
    const visible = useRef(false)
    const [hovered, hover] = useState(false)
    const ref = useIntersect<Mesh>((isVisible) => (visible.current = isVisible))
    const {height} = useThree((state) => state.viewport)

    useFrame((state, delta) => {
        if (!ref.current) return
        const material = ref.current.material as any// Cast to any for custom properties
        ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, visible.current ? 0 : -height / 2 + 1, 4, delta)
        material.zoom = THREE.MathUtils.damp(material.zoom, visible.current ? 1 : 1.5, 4, delta)
        material.grayscale = THREE.MathUtils.damp(material.grayscale, hovered ? 1 : 0, 4, delta)
    })

    return (
        <group {...props}>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image ref={ref} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)} scale={scale} url={url}/>
        </group>
    )
}

export default function ImageItems() {
    const {width: w, height: h} = useThree((state) => state.viewport)
    return (
        <Scroll>
            <Item url="/fiber/about/Main-1.webp" scale={[w / 3, w / 3]} position={[-w / 6, 0, 0]} alt={'profile'}/>
            <Item url="/fiber/about/Berlin-3.webp" scale={[2, w / 3]} position={[w / 30, -h, 0]} alt={'TU-Berlin lobby'}/>
            <Item url="/fiber/about/Berlin-2.webp" scale={[w / 3, w / 5]} position={[-w / 4, -h * 1, 0]} alt={'Berlin River'}/>
            <Item url="/fiber/about/Berlin-1.webp" scale={[w / 5, w / 5]} position={[w / 4, -h * 1.2, 0]} alt={'Berlin city'}/>
            <Item url="/fiber/about/Music-1.webp" scale={[w / 5, w / 5]} position={[w / 10, -h * 1.75, 0]} alt={'Sleeping'}/>
            <Item url="/fiber/about/Music-2.webp" scale={[w / 3, w / 3]} position={[-w / 4, -h * 2, 0]} alt={'EUSO'}/>
            <Item url="/fiber/about/Current-1.png" scale={[w / 3, w / 5]} position={[-w / 4, -h * 2.7, 0]} alt={'placeholder'}/>
            <Item url="/fiber/about/Current-2.webp" scale={[w / 2, w / 2]} position={[w / 4, -h * 3.1, 0]} alt={'Bladerunner calculations'}/>
            <Item url="/fiber/about/Final.webp" scale={[w / 2.5, w / 2]} position={[-w / 6, -h * 4.1, 0]} alt={'End image'}/>
        </Scroll>
    )
}