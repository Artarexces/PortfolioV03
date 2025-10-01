import ProjectCard from './ProjectCard'
import portfolioV2 from '@/public/images/portfoliov2.png'
import foodRecipe from '@/public/images/foodRecipe.png'
import todo from '@/public/images/todo.png'
import cloudy from '@/public/images/cloudy.jpg'
import pomi from '@/public/images/pomi.png'
import portfolioV1 from '@/public/images/portfoliov1.png'

const projectData = [
  {
    title: 'Mi portfolio',
    image: portfolioV2,
    description: 'Portfolio actual (React, Express, Tailwind).',
    techs: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg'
    ],
    demoLink: '#',
    codeLink: 'https://github.com/Artarexces/Portfolio-v01'
  },
  {
    title: 'Tu receta!',
    image: foodRecipe,
    description: 'App para combinar alimentos y obtener puntaje.',
    techs: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
    ],
    demoLink: 'https://cocinando-tu-receta-omega.vercel.app/',
    codeLink: 'https://github.com/Artarexces/CocinandoTuReceta?tab=readme-ov-file'
  },
  {
    title: 'To-Do-Now',
    image: todo,
    description: 'Task-list hecha 100% con Django y templates',
    techs: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
    ],
    demoLink: 'https://artarexces.pythonanywhere.com',
    codeLink: 'https://github.com/Artarexces/ToDoNow'
  },
  {
    title: 'Cloudy',
    image: cloudy,
    description: 'App de clima (React + Express).',
    techs: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg'
    ],
    demoLink: 'https://cloudy-ebon.vercel.app/',
    codeLink: 'https://github.com/Artarexces/Cloudy'
  },
  {
    title: "Pom's",
    image: pomi,
    description: 'Timer Pomodoro, una app de estudio con intervalos de estudio y descanso',
    techs: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg'
    ],
    demoLink: 'https://pom-s.vercel.app/',
    codeLink: "https://github.com/Artarexces/Pom's"
  },
  {
    title: 'Mi portfolio (v1)',
    image: portfolioV2,
    description: 'Versión anterior con React, tailwind y express ',
    techs: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg'
    ],
    demoLink: '#',
    codeLink: 'https://github.com/Artarexces/Portfolio-v01'
  }
]

export default function ProjectsList(){
  return (
    <div id="projects" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectData.map((p, idx) => <ProjectCard key={idx} project={p} />)}
    </div>
  )
}
