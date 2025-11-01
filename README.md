# ✨ PortfolioV03 (Frontend)

Remake de mi portfolio personal con **Next.js** y un enfoque renovado en diseño y rendimiento.  
Este repo contiene la parte **frontend** del proyecto — interfaz, componentes y estilos — listo para desplegar en Vercel.

---

## 🔎 Descripción rápida

Portfolio construido con el **App Router de Next.js** para aprovechar renderizado híbrido y buenas prácticas modernas de React. La estructura principal usa la carpeta `app/` y componentes reutilizables para mantener el proyecto escalable. 

---

## ⚙️ Tecnologías principales

- ▲ **Next.js** (App Router) — estructura y routing de la app.
- ⚛️ **React** (hooks y componentes)  
- 🎨 **TailwindCSS** / utilidades (estilos globales en `globals.css`)  
- 🅰️ Fuente optimizada vía `next/font` (Geist).

---

## 📁 Estructura del proyecto (resumen)

```bash
PortfolioV03/
 ├── app/              # Páginas y layout (App Router)
 ├── components/       # Componentes reutilizables
 ├── public/ images/    # Imágenes y assets públicos
 ├── styles/           # CSS global / módulos
 ├── package.json
 └── README.md
```
--- 

## 🚀 Instalación y ejecución local

1. Clonar el repo:
```bash
git clone https://github.com/Artarexces/PortfolioV03.git
cd PortfolioV03
```
2. Instalar dependencias:
```bash
npm install
```
3. Ejecutar en modo desarrollo:
```bash
npm run dev
```
4. Abrir en el navegador:
```arduino
http://localhost:3000
```

Los comandos de desarrollo se corresponden con los scripts estándar de Next.js presentes en package.json.

---

## 🧩 Componentes clave

- Navbar — navegación y toggle de modo oscuro (si aplica)

- Header — hero con animación y llamado a la acción

- Projects — tarjetas de proyectos (cada tarjeta con título, techs, links a GitHub/demo)

- Skills — lista / grid de tecnologías con iconos

- Contact — formulario y/o botones de contacto (copiar email, enlaces a redes)

- Footer — créditos y enlaces

---

## ✅ SEO, accesibilidad y rendimiento

- Meta tags y Open Graph: agregar metadata por página para mejorar apariencia en compartidos y SEO.

- Etiquetas ARIA y semántica (usar main, header, nav, footer) para accesibilidad.

- Imágenes optimizadas: usar <Image /> de Next.js si corresponde para lazy-load y tamaño adaptativo.

---

## 🚀 Futuras mejoras (resumen)

- 🌙 **Modo oscuro** — toggle simple con persistencia (localStorage).  
- 🖼️ **Optimizar imágenes** — usar `<Image />` de Next.js para lazy-load.  
- 🧭 **Meta / Open Graph** — mejorar título/descr/preview para redes.  
- ♿ **Pequeñas mejoras de accesibilidad** — roles semánticos y navegación por teclado.

--- 

## 👨‍💻 Autor

**Martin Rodriguez (Artarexces)**

💼 [GitHub](https://github.com/Artarexces/PortfolioV03)

🌐 [Portfolio](https://portfolio-v03-eight.vercel.app/)
