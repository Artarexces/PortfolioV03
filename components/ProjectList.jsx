import portfoliov1 from '@/public/images/portfoliov1.png'
import portfoliov2 from '@/public/images/portfoliov2.png'
import foodRecipe from '@/public/images/foodRecipe.png'
import todo from '@/public/images/todo.png'
import cloudy from '@/public/images/cloudy.jpg'
import pomi from '@/public/images/pomi.png'
import ProjectCard from '@/components/ProjectCard'

const projectData = [
  {
    title: 'Mi portfolio',
    image: portfoliov2,
    description: 'Este es el portfolio mostrado actualmente. Un projecto en desarrollo con NextJs, express.js y Tailwind.',
    techs: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg'
    ],
    demoLink: '#',
    codeLink: 'https://github.com/Artarexces/PortfolioV03'
  },
  {
    title: 'Tu receta!',
    image: foodRecipe,
    description: 'Mi primer app, simple, en la cual puedes elegir alimentos, combinarlos tambien da un puntaje nutricional.',
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
    description: 'Un task-list hecha 100% con python django, utilizando templates HTML y staticos CSS.',
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
    description: 'Una app de clima hecha con React.js y express en donde aprendi a utilizar Tailwind CSS y GSAP.',
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
    description: 'Una app de estudio en la cual utiliza el metodo pomodoro mediante una interfaz sencilla, tambien version app-mobile.',
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
    image: portfoliov2,
    description: 'Version anterior a este portfolio, utilizando react, express y tailwind con GSAP pero es una SPA.',
    techs: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg'
    ],
    demoLink: '#',
    codeLink: 'https://github.com/Artarexces/Portfolio-v01'
  }
]

export default function ProjectList(){
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {projectData.map((project, index) => <ProjectCard key={index} project={project}/>)}
        </div>
    )
} 