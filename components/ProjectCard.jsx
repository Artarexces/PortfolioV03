import Image from "next/image"
import { FaGithub } from "react-icons/fa"
import { VscVmConnect } from "react-icons/vsc"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function ProjectCard({ project }) {
  return (
    <CardContainer className="group" style ={{ perspective: "1000px"}}>
    <CardBody className="bg-slate-800 rounded-xl overflow-hidden shadow-md flex flex-col">
      
      {/* Imagen */}
      <CardItem translateZ={50} className="w-full">
      <div className="relative w-full h-48">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          />
      </div>
      </CardItem>

      {/* Contenido  */}
      <CardItem translateZ={20} className="p-4 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-cyan-300">
            {project.title}
          </h3>
          <div className="flex gap-2">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noreferrer"
              title="Ver proyecto"
              className="p-1 hover:text-cyan-400"
            >
              <VscVmConnect className="w-7 h-7" />
            </a>
            <a
              href={project.codeLink}
              target="_blank"
              rel="noreferrer"
              title="Ver codigo"
              className="p-1 hover:text-cyan-400"
            >
              <FaGithub className="w-7 h-7" />
            </a>
          </div>
        </div>

        {/* Descripción */}
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
      </CardItem>
    </CardBody>
    </CardContainer>
  )
}
