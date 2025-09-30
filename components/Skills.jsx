import Image from "next/image";

const categories = [
  {
    title: 'Front-end',
    icons: [
      { alt: 'HTML5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
      { alt: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
      { alt: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { alt: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { alt: 'Tailwind', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' }
    ]
  },
  {
    title: 'Back-end',
    icons: [
      { alt: 'Node', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { alt: 'Express', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
      { alt: 'NestJs', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { alt: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
      { alt: 'SQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg' }
    ]
  },
  {
    title: 'Tools',
    icons: [
      { alt: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { alt: 'GitHub', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
      { alt: 'VSCode', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
      { alt: 'Bun', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg' },
      { alt: 'Postman', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' }
    ]
  }
]

export default function Skills(){
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {categories.map(cat => (
                <div key={cat.title} className="bg-slate-800 rounded-2xl flex flex-col items-center">
                    <h3 className="text-xl mb-4">{cat.title}</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {cat.icons.map((icon, i)=> (
                            <div key={i} className="w-12 h-12 p-1 rounded-lg bg-slate-900 flex items-center justify-center hover:scale-110 transition">
                                <Image src={icon.src} alt={icon.alt} className="w-10 h-10"/>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}