'use client'
import { useEffect, useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)
  const [navHeight, setNavHeight] = useState(80) // fallback si no encuentra nav

  // Medimos navbar (intenta primero por id, si no, por querySelector)
  useEffect(() => {
    const measure = () => {
      const nav = document.getElementById('site-navbar') || document.querySelector('nav')
      if (nav) {
        const h = Math.round(nav.getBoundingClientRect().height)
        if (h > 0) setNavHeight(h)
      }
    }
    measure()
    window.addEventListener('resize', measure)
    // En caso de SPA donde nav se renderice después:
    const obs = new MutationObserver(measure)
    obs.observe(document.body, { childList: true, subtree: true })
    return () => { window.removeEventListener('resize', measure); obs.disconnect() }
  }, [])

  const API_URL = process.env.NEXT_PUBLIC_API_URL ? `${process.env.NEXT_PUBLIC_API_URL}/contacto` : null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setStatus(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!API_URL) { setStatus({ type: 'error', text: 'Form no configurado' }); return }
    if (formData.message.trim().length < 5) { setStatus({ type: 'error', text: 'Mensaje demasiado corto' }); return }
    try {
      setLoading(true)
      setStatus(null)
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (res.ok) {
        setStatus({ type: 'success', text: 'Mensaje enviado con éxito' })
        setFormData({ name: '', email: '', message: '' })
      } else {
        const json = await res.json().catch(()=>({ error: 'Error' }))
        setStatus({ type: 'error', text: json.error || 'Error al enviar' })
      }
    } catch (err) {
      console.error(err)
      setStatus({ type: 'error', text: 'Error en el servidor' })
    } finally {
      setLoading(false)
    }
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('martinrodriguezdev96@gmail.com')
      setStatus({ type: 'success', text: 'Email copiado al portapapeles' })
    } catch {
      setStatus({ type: 'error', text: 'No se pudo copiar (bloqueo del navegador?)' })
    }
  }

  return (
    <div
      aria-labelledby="contact-heading"
      className="fixed left-0 right-0 bottom-0 flex items-center justify-center px-4"
      style={{ top: `${navHeight}px`, zIndex: 40 }}
    >
      <div className="w-full max-w-xl sm:max-w-2xl">
        <div className="bg-slate-800 p-8 rounded-xl shadow-lg">
          <h2 id="contact-heading" className="text-2xl font-semibold text-slate-100 mb-4">Contacto</h2>

          {status && (
            <div
              className={`mb-4 text-sm px-3 py-2 rounded ${status.type === 'success' ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'}`}
              role="status"
            >
              {status.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="flex flex-col gap-1">
              <span className="text-sm text-slate-300">Nombre</span>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                className="w-full p-3 rounded bg-slate-900 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-sm text-slate-300">Email</span>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@correo.com"
                className="w-full p-3 rounded bg-slate-900 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                required
              />
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-sm text-slate-300">Mensaje</span>
              <textarea
                name="message"
                rows="7"
                value={formData.message}
                onChange={handleChange}
                placeholder="Escribí tu mensaje..."
                className="w-full p-3 rounded bg-slate-900 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
                required
              />
            </label>

            <div className="flex gap-3 mt-2">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 px-4 py-3 rounded bg-sky-600 hover:bg-sky-500 transition duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Enviando...' : 'Enviar'}
              </button>

              <button
                type="button"
                onClick={copyEmail}
                className="px-4 py-3 rounded border border-slate-700 hover:bg-slate-700 transition"
              >
                Copiar email
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
