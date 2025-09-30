'use client'
import { useState } from "react"
import Link from "next/link"

export default function NavBar(){
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(prev => !prev)

    return (
        <nav className="fixed flex justify-center w-full top-6 z-50">
            <div className="w-[90vw] max-w-2xl sm:w-[80vw] flex justify-center">
                <ul className="hidden sm:flex flex-wrap justify-center items-center w-full bg-black/30 backdrop-blur-sm rounded-full px-10 py-2 gap-6 list-none text-sm sm:text-base shadow-lg border border-white/10">
                    <li><Link href="/" className="font-bold hover:text-cyan-200 transition">Inicio</Link></li>
                    <li><Link href="/" className="font-bold hover:text-cyan-200 transition">Skills</Link></li>
                    <li><Link href="/" className="font-bold hover:text-cyan-200 transition">Projects</Link></li>
                    <li><Link href="/" className="font-bold hover:text-cyan-200 transition">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}