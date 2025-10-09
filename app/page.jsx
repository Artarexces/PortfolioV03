import Link from 'next/link'

import Header from '../components/Header'

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1">
        <Header />
        <p className="text-lg text-slate-300 max-w-xl leading-relaxed mb-6">
          Desarrollador web full-stack. Trabajo con tecnologias como React/NextJs/TailwindCSS y API's con Express/NestJs.
        </p>

        <div className="flex gap-3">
          <Link href="/projects" className="inline-block px-6 py-3 rounded-md bg-sky-600 hover:bg-sky-500 transition shadow">Ver Proyectos</Link>
          <Link href="/contact" className="inline-block px-6 py-3 rounded-md border border-slate-700 hover:bg-slate-800 transition">Contacto</Link>
        </div>
      </div>
    </section>
  )
}
