import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'

export default function SideNavigationBar() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        root: null,
        threshold: 0.5, // Adjust sensitivity (0.5 = halfway visible)
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const navItems = [
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'about', label: 'About' },
    { id: 'home', label: 'Home' },
  ]

  function handleScrollTo(id: string): void {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      // Update URL hash without reloading
      window.history.pushState(null, '', `#${id}`)
    }
  }

  return (
    <nav className="w-32 bg-gray-0 text-black flex flex-col fixed left-0 top-0 h-full z-50">
      <div className="flex flex-col items-center h-full justify-between my-10">
        {/* Logo */}
        <a href="/" className="flex text-5xl font-bold group relative">
          <span className="absolute text-black select-none">d.</span>
          <span className="relative text-transparent bg-clip-text bg-gradient-to-t from-[#00e6f2] to-[#00e6f2] bg-[length:100%_0%] group-hover:bg-[length:100%_100%] bg-no-repeat transition-all duration-500 ease-out">
            d.
          </span>
        </a>

        {/* Navigations */}
        <div className="flex flex-col items-center gap-y-10 rotate-180">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`sideNavText`}
              // ${
              //   activeSection === item.id
              //     ? 'font-semibold hover:line-through decoration-[#00e6f2]'
              //     : 'text-gray-600 hover:text-[#00e6f2]'
              // }
              onClick={() => handleScrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-6">
          <a
            href="https://github.com/SweetAsCuz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-transform hover:scale-110"
          >
            <Icon className="w-6 h-6" icon="mdi:github" />
          </a>

          <a
            href="/Dew_Khai_Yek_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-transform hover:scale-110"
          >
            <Icon className="w-6 h-6" icon="material-symbols:article-person-outline" />
          </a>
        </div>
      </div>
    </nav>
  )
}
