import { Drawer } from 'vaul'
import { Project } from '../../../data/projectData'
import LiftButton from './LiftButton'

interface ProjectDrawerProps {
  isOpen: boolean
  onOpenChange: (value: boolean) => void
  projectData: Project
}

export default function ProjectDrawer({ isOpen, onOpenChange, projectData }: ProjectDrawerProps) {
  return (
    <Drawer.Root open={isOpen} onOpenChange={onOpenChange}>
      <Drawer.Portal>
        {/* Overlay */}
        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-[999]" />

        {/* Drawer */}
        <Drawer.Content className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl min-h-[64vh] z-[999] flex flex-col">
          <div className="w-full max-w-xl mx-auto p-4 overflow-y-auto">
            <Drawer.Handle />

            {/* Image */}
            {projectData.image && projectData.image !== 'private' && (
              <img
                src={projectData.image}
                alt={projectData.title}
                className="w-full h-48 object-cover rounded-md mt-6 shadow-md"
              />
            )}

            {/* Title */}
            <h1 className="text-2xl font-bold text-gray-900 mt-4">{projectData.title}</h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-3">
              {projectData.tags.map((tag) => (
                <LiftButton key={tag} containerClassName="text-sm">
                  {tag}
                </LiftButton>
              ))}
            </div>

            {/* Description */}
            <div className="text-gray-700 leading-6 mt-4">{projectData.description}</div>

            {/* Project Type */}
            <div className="mt-4 text-end">
              <span className="text-xs uppercase tracking-wide text-gray-400">Project Type</span>
              <p className="text-sm font-semibold text-gray-600">{projectData.projectType}</p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => onOpenChange(false)}
              className="w-full mt-6 py-3 bg-black text-white rounded-lg font-medium shadow-sm"
            >
              Close
            </button>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}
