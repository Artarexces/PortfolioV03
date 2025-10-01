import '@/styles/global.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Martin Rodríguez — Portfolio',
  description: 'Portfolio - Martin (Front / Back / Fullstack)'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-slate-900 text-slate-100 antialiased">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 py-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
