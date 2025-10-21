import '@/styles/global.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageTransition from '@/components/PageTransition'

export const metadata = {
  title: 'Martin Rodríguez — Portfolio',
  description: 'Portfolio - Martin (Front / Back / Fullstack)'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="grid grid-cols-1 grid-rows-1 min-h-screen bg-slate-900 text-slate-100 antialiased">
        <Navbar />
        <main className="max-w-6xl mx-auto place-content-center">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  )
}
