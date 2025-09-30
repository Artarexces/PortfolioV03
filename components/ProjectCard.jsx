import Image from "next/image";
import { FaGithub } from 'react-icons/fa'
import { VscVmConnect } from 'react-icons/vsc'

export default function ProjectCard({ project }){
    return (
        <article className="bg-slate-800 rounded-b-lg flex flex-col justify-between max-w-sm mx-auto hover:scale-110 transition-transform shadow-lg overflow-hidden">
            <div className="relative h-44">
                <Image src={project.image} alt={project.title} fill className="object-cover"/>
            </div>
            <div className="p-4 flex flex-col gap-3">
                <div className="flex justify-center items-center gap-3">
                    <h3 className="text-xl font-semibold text-cyan-400 text-center">{project.title}</h3>
                    <a href={project.demoLink} target="_blank" rel="noreferrer" title="Ver proyecto"><VscVmConnect className="w-5 h-5" /></a>
                    <a href={project.codeLink} target="_blank" rel="noreferrer" title="Ver codigo"><FaGithub className="w-5 h-5" /></a>
                </div>
                <p className="text-sm text-center text-gray-300">{project.description}</p>
                <div className="flex justify-center flex-wrap gap-3 mt-2">
                    {project.techs.map((tech, i)=> (
                        <div key={i} className="w-8 h-8">
                            <Image/>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    )
}