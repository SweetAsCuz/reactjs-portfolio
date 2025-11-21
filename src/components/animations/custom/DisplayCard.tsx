import SpotlightCard from '../ReactBits/SpotlightCard'
import { motion, useInView } from 'motion/react'
import { useRef, ReactNode, useState } from 'react'

interface DisplayCardProps {
  image: string
  title?: string
  description: ReactNode
  tags?: string[]
  projectType?: string
  className?: string
  once?: boolean
  y?: number
  duration?: number
}

export default function DisplayCard({
  image,
  title,
  description,
  tags = [],
  projectType,
  className = '',
  once = false,
  y = 20,
  duration = 0.8,
}: DisplayCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.2, once })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : y }}
      transition={{ duration, ease: 'easeOut' }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <SpotlightCard
        className={`text-black bg-white border-none shadow-md !p-0 max-h-[24rem] flex flex-col justify-between overflow-hidden rounded-lg ${className}`}
        // spotlightColor="rgba(0, 229, 255, 0.2)"
      >
        {/* Image */}
        {image && image !== 'private' ? (
          <motion.img
            animate={{ scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="w-full h-72 object-cover z-0"
            src={image}
            alt={title ?? 'Project preview'}
          />
        ) : (
          <div className="w-full h-72 flex items-center justify-center bg-gray-200 text-gray-600 text-base select-none">
            {image === 'private' ? 'Confidential' : 'No Image Available'}
          </div>
        )}

        {/* Text container */}
        <div className="flex flex-col justify-center px-8 z-10 bg-white h-24">
          <p className="text-lg font-bold mb-[0.125rem]">{title}</p>
          <div className="text-sm font-semibold text-gray-400 h-5">
            <motion.p
              className="absolute"
              initial={{ y: 0, opacity: 1 }}
              animate={{
                y: hovered ? -25 : 0,
                opacity: hovered ? 0 : 1,
              }}
              transition={{ duration: 0.2, ease: 'linear' }}
            >
              {projectType}
            </motion.p>
            <motion.p
              className="absolute"
              initial={{ y: 25, opacity: 0 }}
              animate={{
                y: hovered ? 0 : 25,
                opacity: hovered ? 1 : 0,
              }}
              transition={{ duration: 0.2, ease: 'linear' }}
            >
              Show Project
            </motion.p>
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  )
}
