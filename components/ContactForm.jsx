'use client'
import { useState } from 'react'

export default function ContactForm(){
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)

  const API_URL = process.env.NEXT_PUBLIC_API_URL ? `${process.env.NEXT_PUBLIC_API_URL}/contacto` : null

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!API_URL) { alert('Form not configured — set NEXT_PUBLIC_API_URL in .env.local'); return }
    try {
      setLoading(true)
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (res.ok) { alert('Mensaje enviado con exito!'); setFormData({ name: '', email: '', message: '' }) }
      else {
        const json = await res.json().catch(()=>({ error: 'Error' }))
        alert(json.error || 'Error al enviar')
      }
    } catch (err) { console.error(err); alert('Error en el servidor') }
    finally { setLoading(false) }
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('martinrodriguezdev96@gmail.com')
      alert('Email copiado al portapapeles')
    } catch (err) {
      alert('No se pudo copiar (tal vez el navegador bloqueó el portapapeles)')
    }
  }

  return (
    <div className="max-w-xl mx-auto bg-slate-800 p-6 rounded-xl">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Nombre" className="p-3 rounded bg-slate-900 text-slate-100" required />
        <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" className="p-3 rounded bg-slate-900 text-slate-100" required />
        <textarea name="message" rows="6" value={formData.message} onChange={handleChange} placeholder="Mensaje" className="p-3 rounded bg-slate-900 text-slate-100" required />
        <div className="flex gap-3">
          <button type="submit" disabled={loading} className="flex-1 px-4 py-2 rounded bg-sky-600 hover:bg-sky-500 transition">{loading ? 'Enviando...' : 'Enviar'}</button>
          <button type="button" onClick={copyEmail} className="px-4 py-2 rounded border">Copiar email</button>
        </div>
      </form>
    </div>
  )
}
