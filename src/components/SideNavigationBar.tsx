import { useState, useEffect } from 'react'
import { getLenis } from '../utils/lenis'
import { motion } from 'motion/react'
import { Icon } from '@iconify/react'

interface SideNavigationBarProps {
  showDots?: boolean
}

export default function SideNavigationBar({ showDots }: SideNavigationBarProps) {
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
    // {
    //   name: 'Steam',
    //   icon: 'mdi:steam',
    //   link: 'https://steamcommunity.com/profiles/76561198913675511/',
    // },
  ]

  function handleClick(sectionId: string): void {
    const el = document.getElementById(sectionId)
    if (el) lenis.scrollTo(el)
  }

  // const [responsiveMode, setMode] = useState<string>()

  // useEffect(() => {
  //   function updateMode() {
  //     const width = window.innerWidth

  //     if (width < 768) setMode('sm') // < 768
  //     else if (width < 1024) setMode('md') // 768–1023
  //     else if (width < 1280) setMode('lg') // 1024–1279
  //     else setMode('xl') // ≥ 1280
  //   }

  //   updateMode()
  //   window.addEventListener('resize', updateMode)
  //   return () => window.removeEventListener('resize', updateMode)
  // }, [])

  return (
    <>
      {/* Left Section */}
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="w-16 md:w-32 bg-gray-0 flex flex-col fixed left-0 top-0 h-full z-50"
      >
        <div className="flex flex-col items-center h-full justify-between mt-10">
          <a href="/" className="flex text-4xl md:text-7xl font-bold hover:text-primary font-nanum">
            d.
            {/* <span className="px-2 py-1 text-red-500">{responsiveMode}</span> */}
          </a>

          {/* Social Media */}
          <div className="hidden md:flex flex-col items-center gap-5 z-50 !text-black">
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
      </motion.nav>

      {/* Right Section */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        className="fixed right-4 md:right-10 top-0 bottom-0 z-50 flex flex-col justify-center"
      >
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
                hovered: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
              }}
              initial={{ opacity: 0, scale: 0.2 }}
              style={{ transformOrigin: '100% center' }}
              className="text-lg font-nanum"
            >
              {item.label}
            </motion.span>

            {/* Dots */}
            <motion.div
              variants={{
                hovered: { scale: 1.2, transition: { duration: 0.2 } },
              }}
              initial={{ scale: 1 }}
              className={`w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full border ${
                activeSection === item.id
                  ? 'bg-primary border-primary transition-colors'
                  : 'bg-white border-gray-400'
              }`}
            />
          </motion.button>
        ))}
      </motion.div>
    </>
  )
}
