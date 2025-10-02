import Image from "next/image";

const categories = [
  {
    title: "Front-end",
    icons: [
      { alt: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { alt: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { alt: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { alt: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { alt: "Tailwind", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    title: "Back-end",
    icons: [
      { alt: "Node", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { alt: "Express", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
      { alt: "NestJS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" },
      { alt: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { alt: "SQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    title: "Tools",
    icons: [
      { alt: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { alt: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
      { alt: "VSCode", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
      { alt: "Bun", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg" },
      { alt: "Postman", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-4xl mx-auto">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className="bg-slate-800 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-6">{cat.title}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {cat.icons.map((icon, i) => (
                <div
                  key={i}
                  className="w-14 h-14 p-2 rounded-lg flex items-center justify-center hover:scale-110 transition"
                >
                  <Image src={icon.src} alt={icon.alt} width={50} height={50} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
