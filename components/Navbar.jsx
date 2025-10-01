'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar(){
  const path = usePathname() || '/'
  return (
    <nav className="fixed top-6 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mx-auto w-full max-w-2xl bg-black/40 backdrop-blur rounded-full py-2 px-6 flex items-center justify-center gap-8 shadow-lg border border-white/5">
          <Link href="/" className={`text-sm font-semibold ${path === '/' ? 'text-sky-400' : ''}`}>Inicio</Link>
          <Link href="/skills" className={`text-sm font-semibold hover:text-sky-400 ${path === '/skills' ? 'text-sky-400' : ''}`}>Skills</Link>
          <Link href="/projects" className={`text-sm font-semibold hover:text-sky-400 ${path === '/projects' ? 'text-sky-400' : ''}`}>Projects</Link>
          <Link href="/contact" className={`text-sm font-semibold hover:text-sky-400 ${path === '/contact' ? 'text-sky-400' : ''}`}>Contact</Link>
        </div>
      </div>
    </nav>
  )
}
