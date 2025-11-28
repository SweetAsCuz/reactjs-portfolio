import { useState, useEffect } from 'react'
import { getLenis } from '../utils/lenis'
import { motion } from 'motion/react'
import { Icon } from '@iconify/react'

export default function SideNavigationBar() {
  const [activeSection, setActiveSection] = useState('home')

  const lenis = getLenis()

  useEffect(() => {
    if (!lenis) return

    const handler = () => {
      const sections = document.querySelectorAll('section[id]')
      const viewportCenter = window.innerHeight / 2
      let foundId = null

      sections.forEach((s) => {
        const rect = s.getBoundingClientRect()
        const top = rect.top
        const bottom = rect.bottom

        if (top <= viewportCenter && bottom >= viewportCenter) {
          foundId = s.id
        }
      })

      if (foundId) setActiveSection(foundId)
    }

    lenis.on('scroll', handler)
    handler()

    return () => lenis.off('scroll', handler)
  }, [lenis])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
  ]

  const socialMedia = [
    // { name: 'Discord', icon: 'ic:outline-discord', link: '' },
    {
      name: 'LinkedIn',
      icon: 'mdi:linkedin',
      link: 'https://www.linkedin.com/in/dewkhaiyek/',
    },
    {
      name: 'GitHub',
      icon: 'mdi:github',
      link: 'https://github.com/SweetAsCuz',
    },
    {
      name: 'WhatsApp',
      icon: 'mdi:whatsapp',
      link: 'https://wa.me/601110520802',
    },
    {
      name: 'Instagram',
      icon: 'mdi:instagram',
      link: 'https://www.instagram.com/khaiyek_02/',
    },
  ]

  function handleClick(sectionId: string): void {
    const el = document.getElementById(sectionId)
    if (el) lenis.scrollTo(el)
  }

  return (
    <>
      {/* Left Section */}
      <nav className="w-16 md:w-32 bg-gray-0 flex flex-col fixed left-0 top-0 h-full z-50">
        <div className="flex flex-col items-center h-full justify-between mt-10">
          <a href="/" className="flex text-4xl md:text-5xl font-bold hover:text-primary">
            d.
          </a>

          {/* Social Media */}
          <div className="flex flex-col items-center gap-5 z-50 !text-black">
            {socialMedia.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <motion.div
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.1 },
                  }}
                >
                  <Icon className="w-7 h-7" icon={item.icon} />
                </motion.div>
              </a>
            ))}

            <div className="h-24 w-px bg-black" />
          </div>
        </div>
      </nav>

      {/* Right Section */}
      <div className="fixed right-4 md:right-10 top-1/2 -translate-y-1/2 flex flex-col z-50">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => handleClick(item.id)}
            className="flex justify-end items-center gap-x-3 py-2"
            whileHover="hovered"
          >
            {/* Tooltip */}
            <motion.span
              variants={{
                hovered: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.2 },
                },
              }}
              initial={{ opacity: 0, scale: 0.2 }} // very small at start
              style={{ transformOrigin: '100% center' }} // expand from right side
              className="text-sm"
            >
              {item.label}
            </motion.span>

            {/* Dots */}
            <motion.div
              variants={{
                hovered: { scale: 1.2, transition: { duration: 0.2 } },
              }}
              initial={{ scale: 1 }}
              className={`w-3.5 h-3.5 rounded-full border ${
                activeSection === item.id
                  ? 'bg-primary border-primary transition-colors'
                  : 'bg-white border-gray-400'
              }`}
            />
          </motion.button>
        ))}
      </div>
    </>
  )
}
