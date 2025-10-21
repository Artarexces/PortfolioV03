'use client'
import { useEffect, useState } from 'react'
import '@/styles/ContactForm.css'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)
  const [navHeight, setNavHeight] = useState(80) 


  useEffect(() => {
      const nav = document.getElementById('site-navbar') || document.querySelector('nav')
      if (nav) setNavHeight(nav.getBoundingClientRect().height)
    });


  const API_URL = process.env.NEXT_PUBLIC_API_URL ? `${process.env.NEXT_PUBLIC_API_URL}/api/contacto` : null

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
      className="contact-container"
      style={{ top: `${navHeight}px` }}
      aria-labelledby="contact-heading"
    >
      <div className="contact-card">
        <h2 id="contact-heading" className="contact-heading">Contacto</h2>

        {status && (
          <div className={`contact-status ${status.type}`}>
            {status.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            <span>Nombre</span>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
            />
          </label>

          <label>
            <span>Email</span>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tu@correo.com"
              required
            />
          </label>

          <label>
            <span>Mensaje</span>
            <textarea
              name="message"
              rows="7"
              value={formData.message}
              onChange={handleChange}
              placeholder="Escribí tu mensaje..."
              required
            />
          </label>

          <div className="contact-buttons">
            <button type="submit" disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar'}
            </button>
            <button type="button" onClick={copyEmail}>
              Copiar email
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
