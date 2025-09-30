'use client'
import { useState, useEffect } from "react"

export default function Header(){
    const roles = ['Front-end', 'Back-end', 'Full-stack']
    const [index, setIndex] = useState(0)
    const [text, setText] = useState('')
    const [subIndex, setSubIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (subIndex < roles[index].length) {
          setText(prev => prev + roles[index][subIndex])
          setSubIndex(prev => prev + 1)
        } else {
          setTimeout(() => setIsDeleting(true), 900)
        }
      } else {
        if (subIndex > 0) {
          setText(prev => prev.slice(0, -1))
          setSubIndex(prev => prev - 1)
        } else {
          setIsDeleting(false)
          setIndex(prev => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 80 : 140)

    return () => clearTimeout(timeout)
  }, [subIndex, isDeleting])

  return (
    <header className="mt-2 md:mt-6 mb-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Hola, Soy Martin <span className="inline-block">👋</span></h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Desarrollador<span className="text-sky-400">{text}</span></h2>
    </header>
  )
}