'use client'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useIntersect, Image, ScrollControls, Scroll } from '@react-three/drei'
import Link from 'next/link'
import {Mesh} from "three";

function Item({ url, scale, ...props }: { url: string; scale: [number, number]; [key: string]: any }) {
    const visible = useRef(false)
    const [hovered, hover] = useState(false)
    const ref = useIntersect<Mesh>((isVisible) => (visible.current = isVisible))
    const { height } = useThree((state) => state.viewport)

    useFrame((state, delta) => {
        if (!ref.current) return
        const material = ref.current.material as any// Cast to any for custom properties
        ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, visible.current ? 0 : -height / 2 + 1, 4, delta)
        material.zoom = THREE.MathUtils.damp(material.zoom, visible.current ? 1 : 1.5, 4, delta)
        material.grayscale = THREE.MathUtils.damp(material.grayscale, hovered ? 0 : 1, 4, delta)
    })

    return (
        <group {...props}>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image ref={ref} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)} scale={scale} url={url}/>
        </group>
    )
}

function Items() {
    const { width: w, height: h } = useThree((state) => state.viewport)
    return (
        <Scroll>
            <Item url="/fiber/about/Main-1.webp" scale={[w / 3, w / 3]} position={[-w / 6, 0, 0]} alt={'profile'}/>
            <Item url="/fiber/about/Berlin-3.webp" scale={[2, w / 3]} position={[w / 30, -h, 0]} alt={'TU-Berlin lobby'}/>
            <Item url="/fiber/about/Berlin-2.webp" scale={[w / 3, w / 5]} position={[-w / 4, -h * 1, 0]} alt={'Berlin River'}/>
            <Item url="/fiber/about/Berlin-1.webp" scale={[w / 5, w / 5]} position={[w / 4, -h * 1.2, 0]} alt={'Berlin city'}/>
            <Item url="/fiber/about/Music-1.webp" scale={[w / 5, w / 5]} position={[w / 10, -h * 1.75, 0]} alt={'Sleeping'}/>
            <Item url="/fiber/about/Music-2.webp" scale={[w / 3, w / 3]} position={[-w / 4, -h * 2, 0]} alt={'EUSO'}/>
            <Item url="/fiber/about/placeholder.png" scale={[w / 3, w / 5]} position={[-w / 4, -h * 2.7, 0]} alt={'placeholder'}/>
            <Item url="/fiber/about/Current-2.webp" scale={[w / 2, w / 2]} position={[w / 4, -h * 3.1, 0]} alt={'Bladerunner calculations'}/>
            <Item url="/fiber/about/placeholder.png" scale={[w / 2.5, w / 2]} position={[-w / 6, -h * 4.1, 0]} alt={'placeholder'}/>
        </Scroll>
    )
}

export default function AboutPage() {
    return (
        <section className="w-full h-screen">
            <Canvas
                orthographic
                camera={{ zoom: 80 }}
                gl={{ alpha: false, antialias: false, stencil: false, depth: false }}
                dpr={[1, 1.5]}
                key={'about-canvas'}
            >
                <color attach="background" args={['#000000']} />
                <ScrollControls damping={0.2} pages={5}>
                    <Items />
                    <Scroll html style={{ width: '100%'}}>
                        {/* Hero intro - centered */}
                        <div className="absolute top-[80vh] right-8 w-full max-w-5xl px-8">
                            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-light text-center">
                                I&apos;m Sean, a computer science student and cellist navigating the intersection
                                of technical precision and creative expression.
                            </p>
                        </div>

                        {/* Background - RIGHT SIDE */}
                        <div className="absolute top-[180vh] left-8 w-full max-w-3xl px-8">
                            <div className="flex flex-col gap-6">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light">
                                    Background
                                </h2>
                                <div className="space-y-4 text-base md:text-lg lg:text-xl font-light">
                                    <p>
                                        Currently pursuing my Master&apos;s in Computer Science at Georgia Tech with a
                                        specialization in Artificial Intelligence, building on my undergraduate degree
                                        in Intelligence & Theory. My academic path has taken me from fundamental
                                        algorithms and theory to cutting-edge ML research.
                                    </p>
                                    <p>
                                        In summer 2023, I co-founded Point Drift in Berlin, working with a small
                                        team to bring novel AI research into production. It ended up failing, but getting to
                                        talk to developers and demo a product to a company was something you don&apos;t
                                        learn in a classroom. I try to apply my experiences throughout any given
                                        product development process.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Music - LEFT SIDE */}
                        <div className="absolute top-[260vh] right-8 w-full max-w-3xl px-8">
                            <div className="flex flex-col gap-6">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light">
                                    Music
                                </h2>
                                <div className="space-y-4 text-base md:text-lg lg:text-xl font-light">
                                    <p>
                                        I regularly serve as principal cellist for the Georgia Tech Symphony Orchestra and simultaneously
                                        perform with the Emory University Symphony Orchestra. In 2023, I won the GTSO Concerto Competition and
                                        performed Dvořák&apos;s Cello Concerto with the orchestra. I&apos;m inactive in the competition scene now,
                                        but would love to perform in the near future.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Current Focus - RIGHT SIDE */}
                        <div className="absolute top-[350vh] left-8 w-full max-w-3xl px-8">
                            <div className="flex flex-col gap-6">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light">
                                    Current Focus
                                </h2>
                                <div className="space-y-4 text-base md:text-lg lg:text-xl font-light">
                                    <p>
                                        Professionally, I&apos;m working on Illutix through Georgia Tech&apos;s
                                        Create-X program, building infrastructure for real-time visualization and analysis
                                        of massive datasets. It&apos;s been particularly challenging both in terms of technical scope
                                        and execution, and I&apos;ve grown significantly through the journey.
                                    </p>
                                    <p>
                                        For my fun projects, I actually considered a complete revamp of this portfolio site starting with the hero
                                        section. The Wallace Room scene from the film Bladerunner 2049 was going to be the source of inspiration
                                        but I ended up scrapping it in the end. The process ended up being quite interesting especially
                                        due to the lack of relevant tutorials/information online so I will make a short writeup on that
                                        in the near future. In the meantime you can access the Three.JS scene through this link
                                        here: <Link href={'/room'} className="hover:underline">
                                        /room
                                    </Link>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Scroll>
                </ScrollControls>
            </Canvas>
        </section>
    )
}