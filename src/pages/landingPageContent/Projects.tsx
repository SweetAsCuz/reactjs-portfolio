import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { projectData } from '../../data/projectData'
import { Project } from '../../data/projectData'
import ProjectDrawer from '../../components/animated/custom/ProjectDrawer'
import DisplayCard from '../../components/animated/custom/DisplayCard'
import FadeInSection from '../../components/animated/custom/FadeInSection'
import ScrollFloat from '../../components/animated/ReactBits/ScrollFloat'

export default function Timeline() {
  const [selectedType, setSelectedType] = useState<'All' | string>('All')

  const projectTypes = ['All', 'Personal', 'Academic', 'Work']

  const filteredProjects =
    selectedType === 'All'
      ? projectData
      : projectData.filter((project) => project.projectType === selectedType)

  const [isOpen, setOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <div className="sectionContainer">
      {selectedProject && (
        <ProjectDrawer isOpen={isOpen} onOpenChange={setOpen} projectData={selectedProject} />
      )}
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
        textClassName="titleText"
      >
        Featured Work
      </ScrollFloat>

      <FadeInSection className="subtitleText">
        Here's a list of project I've contributed/done on my personal time or for work/studies.
      </FadeInSection>

      {/* 🔹 Filter Section */}
      <FadeInSection className="flex items-center gap-2 text-sm mb-10 text-gray-600 font-bold">
        <span className="pr-8 md:mr-0 whitespace-nowrap">Filter by</span>
        <div className="flex flex-wrap gap-1 md:gap-3 select-none">
          {projectTypes.map((type, index) => {
            const count =
              type === 'All'
                ? projectData.length
                : projectData.filter((p) => p.projectType === type).length

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
              onClick={() => {
                setSelectedProject(project)
                setOpen(true)
              }}
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
