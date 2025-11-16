'use client';
import {useState} from 'react';
// import Modal from '../components/modal';
import Project from "@/components/works/project";
import Modal from "@/components/works/modal";
const projects = [
    {
        title: "Wallace Room",
        src: "WallaceRoom.png",
        color: "#623505"
    },
    {
        title: "Illutix",
        src: "Illutix.png",
        color: "#101d42"
    },
    {
        title: "Sparse Autoencoders",
        src: "SaeThumbnail.png",
        color: "#326273"
    },
    {
        title: "Point Drift",
        src: "PointDrift.png",
        color: "#5D576B"
    }
]

export default function WorksSection() {

    const [modal, setModal] = useState({active: false, index: 0})

    return (
        <div className={'w-full flex flex-col justify-center items-center z-10 pt-24 pb-24'}>
            {
                projects.map((project, index) => {
                    return <Project index={index} title={project.title} setModal={setModal} key={index}/>
                })
            }
            <Modal modal={modal} projects={projects}/>

        </div>
    )
}
