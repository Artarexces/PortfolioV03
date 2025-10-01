import Image from "next/image"
import { FaGithub } from "react-icons/fa"
import { VscVmConnect } from "react-icons/vsc"

export default function ProjectCard({ project }) {
  return (
    <article className="bg-slate-800 rounded-xl overflow-hidden shadow-md hover:scale-105 transform transition-transform duration-200 flex flex-col">
      
      {/* Imagen fija */}
      <div className="relative w-full h-48 blur-xs hover:blur-none transition">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Contenido uniforme */}
      <div className="flex flex-col flex-grow p-4">
        
        {/* Título + botones */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-cyan-300">
            {project.title}
          </h3>
          <div className="flex gap-2">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noreferrer"
              title="Demo"
              className="p-1 hover:text-cyan-400"
            >
              <VscVmConnect />
            </a>
            <a
              href={project.codeLink}
              target="_blank"
              rel="noreferrer"
              title="Código"
              className="p-1 hover:text-cyan-400"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Descripción (altura mínima para uniformidad) */}
        <p className="text-sm text-slate-300 mb-4 min-h-[48px]">
          {project.description}
        </p>

        {/* Tecnologías */}
        <div className="mt-auto flex flex-wrap gap-2">
          {project.techs.map((t, i) => (
            <img
              key={i}
              src={t}
              alt="tech"
              className="w-8 h-8 rounded-md bg-slate-900 p-1"
            />
          ))}
        </div>
      </div>
    </article>
  )
}
