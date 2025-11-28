import { ReactNode, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import DisplayCard from '../../components/animations/custom/DisplayCard'
import FadeInSection from '../../components/animations/custom/FadeInSection'
import ScrollFloat from '../../components/animations/ReactBits/ScrollFloat'

interface Project {
  image: string
  title: string
  description: ReactNode
  tags: string[]
  projectType: string
}

export default function Timeline() {
  const projects: Project[] = [
    {
      image: '',
      title: 'Portfolio Website',
      description: <>Personal portfolio to showcase my design and coding projects.</>,
      tags: ['React', 'TypeScript', 'TailwindCSS', 'ReactBits', 'Postgresql'],
      projectType: 'Personal',
    },
    {
      image: '/images/foundit.png',
      title: 'Found It',
      description: (
        <>
          A USM-centric lost and found platform.{` `}
          <a
            href="https://github.com/SweetAsCuz/found-it"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            View on GitHub
          </a>
          .
        </>
      ),
      tags: [
        'Nuxt',
        'Firebase',
        'Cloudinary',
        'TypeScript',
        'TailwindCSS',
        'Element-Plus',
        'DaisyUI',
      ],
      projectType: 'Academic',
    },
    {
      image: '/images/grid-ea.png',
      title: 'Autotrading Bot',
      description: (
        <>
          An automated trading bot implementing a hybrid grid strategy.{' '}
          <a
            href="https://github.com/SweetAsCuz/hybrid-grid-ea"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            View on GitHub
          </a>
          .
        </>
      ),
      tags: ['MQL5', 'Metatrader 5'],
      projectType: 'Personal',
    },
    {
      image: '/images/bookmyshow.png',
      title: 'Ticket Scalper',
      description: (
        <>
          A fully automated robot built to scalp event/concert tickets on online platform such as
          BookMyShow.
        </>
      ),
      tags: ['Express.js', 'Puppeteer', 'GoogleGenAI', 'Postman', 'TypeScript'],
      projectType: 'Personal',
    },
    {
      image: '/images/vilor-event.png',
      title: 'Vilor Event Page',
      description: (
        <>
          Vilor's event page to be displayed and used by the customers to browse and purchase events
          or classes provided by the company.{` `}
          <a
            href="https://program.vilor.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Visit Page
          </a>
          .
        </>
      ),
      tags: ['Nuxt', 'TailwindCSS', 'DaisyUI', 'Facebook Analytics', 'Laravel'],
      projectType: 'Work',
    },
    {
      image: 'private',
      title: 'Vilor CRM',
      description: (
        <>
          A centralized platform to manage client relationships, track business interactions mainly
          to assist the marketing and accounting teams.
        </>
      ),
      tags: ['Nuxt', 'TailwindCSS', 'DaisyUI', 'Laravel'],
      projectType: 'Work',
    },
    {
      image: 'private',
      title: 'Vilor Intranet',
      description: (
        <>An internal system to manage general company data, communication and collaboration.</>
      ),
      tags: ['PHP', 'HTML', 'CSS', 'SMTP'],
      projectType: 'Work',
    },
  ]

  const [selectedType, setSelectedType] = useState<'All' | string>('All')

  const projectTypes = ['All', 'Personal', 'Academic', 'Work']

  const filteredProjects =
    selectedType === 'All'
      ? projects
      : projects.filter((project) => project.projectType === selectedType)

  return (
    <div className="flex flex-col justify-center p-2">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
        containerClassName="flex justify-center my-0 py-5"
        textClassName="!text-6xl font-bold"
      >
        Featured Work
      </ScrollFloat>

      <FadeInSection className="text-lg text-center mb-16">
        Here's a list of project I've contributed/done on my personal time or for work/studies.
      </FadeInSection>

      {/* 🔹 Filter Section */}
      <FadeInSection className="flex items-center gap-2 text-sm mb-10 text-gray-600 font-bold">
        <span>Filter by</span>
        <div className="flex flex-wrap gap-3 select-none">
          {projectTypes.map((type, index) => {
            const count =
              type === 'All'
                ? projects.length
                : projects.filter((p) => p.projectType === type).length

            const isLast = index === projectTypes.length - 1

            return (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-1 ${
                  selectedType === type ? 'text-primary' : 'text-gray-600 hover:text-primary'
                }`}
              >
                {type}
                {count > 0 && <sup className="ml-1 text-xs">{count}</sup>}
                {!isLast && <span className="mx-1 text-gray-400">/</span>}
              </button>
            )
          })}
        </div>
      </FadeInSection>

      {/* 🔹 Project Grid */}
      <AnimatePresence mode="popLayout">
        <motion.div
          layout
          className="grid lg:grid-cols-2 sm:grid-cols-1 gap-12"
          transition={{ layout: { duration: 0.4, ease: 'easeInOut' } }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <DisplayCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
