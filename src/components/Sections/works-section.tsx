'use client';
import {useState} from 'react';
// import Modal from '../components/modal';
import Project from "@/components/works/project";
import Modal from "@/components/works/modal";

const projects = [
    {
        title: "C2 Montreal",
        src: "c2montreal.png",
        color: "#000000"
    },
    {
        title: "Office Studio",
        src: "officestudio.png",
        color: "#8C8C8C"
    },
    {
        title: "Locomotive",
        src: "locomotive.png",
        color: "#EFE8D3"
    },
    {
        title: "Silencio",
        src: "silencio.png",
        color: "#706D63"
    }
]

export default function WorksSection() {

    const [modal, setModal] = useState({active: false, index: 0})

    return (
        <div className={'w-full flex flex-col justify-center items-center'}>
            {
                projects.map((project, index) => {
                    return <Project index={index} title={project.title} setModal={setModal} key={index}/>
                })
            }
            <Modal modal={modal} projects={projects}/>

        </div>
    )
}
