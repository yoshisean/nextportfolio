'use client';
import {useState} from 'react';
// import Modal from '../components/modal';
import Project from "@/components/works/project";
import Modal from "@/components/works/modal";
const projects = [
    {
        title: "Wallace Room",
        src: "WallaceRoom.png",
        color: "#623505",
        category: "Experimental 3D, 2025",
        link: "/room"
    },
    {
        title: "Illutix (Not deployed)",
        src: "Illutix.png",
        color: "#101d42",
        category: "Fullstack Development, 2025",
        link: null
    },
    {
        title: "Sparse Autoencoders",
        src: "SaeThumbnail.png",
        color: "#326273",
        category: "Machine Learning Research, 2025",
        link: "https://drive.google.com/file/d/1-Ws1mmkeDkN7dbek-dMK-nPlMKOR9GqK/view?usp=sharing"
    },
    {
        title: "Point Drift",
        src: "PointDrift.png",
        color: "#5D576B",
        category: "Frontend Development, 2023",
        link: "https://pointdrift.com/"
    }
]

export default function WorksSection() {

    const [modal, setModal] = useState({active: false, index: 0})

    return (
        <div className={'w-full flex flex-col justify-center items-center z-10 pt-24 pb-24'}>
            {
                projects.map((project, index) => {
                    return <Project index={index} title={project.title} category={project.category} link={project.link} setModal={setModal} key={index}/>
                })
            }
            <Modal modal={modal} projects={projects}/>

        </div>
    )
}
