'use client';
import {useState} from 'react';
// import Modal from '../components/modal';
import Project from "@/components/works/project";
import Modal from "@/components/works/modal";
const projects = [
    {
        title: "Wallace Room",
        src: "PortfolioThumbnail.png",
        color: "#000000"
    },
    {
        title: "Illutix",
        src: "Illutix.png",
        color: "#8C8C8C"
    },
    {
        title: "Sparse Autoencoders",
        src: "locomotive.png",
        color: "#EFE8D3"
    },
    {
        title: "Point Drift",
        src: "PointDrift.png",
        color: "#706D63"
    }
]

export default function WorksSection() {

    const [modal, setModal] = useState({active: false, index: 0})

    return (
        <div className={'w-full flex flex-col justify-center items-center z-10'}>
            {
                projects.map((project, index) => {
                    return <Project index={index} title={project.title} setModal={setModal} key={index}/>
                })
            }
            <Modal modal={modal} projects={projects}/>

        </div>
    )
}
