import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Icon } from '@iconify/react'
import LiftButton from './LiftButton'

interface TechStackProps {
  y?: number
  duration?: number
  once?: boolean
  icon: string
  title: string
  description: string
  items: { name: string; icon: string }[]
}

export default function TechStackBox({
  y = 20,
  duration = 0.8,
  once = false,
  icon,
  title,
  description,
  items,
}: TechStackProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { amount: 0.2, once })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : y }}
      transition={{ duration, ease: 'easeOut' }}
      className="flex flex-col rounded-lg shadow-xl p-4 md:p-6 bg-white md:w-3/4 w-full"
    >
      <div className="flex items-center mb-4">
        <span className="mr-3 text-primary border-2 border-primary/30 flex size-10 min-w-10 items-center justify-center rounded-lg">
          <Icon icon={icon} className="w-6 h-6 " />
        </span>
        <span className="flex flex-col">
          <p className="text-sm md:text-base">{title}</p>
          <p className="text-xs md:text-sm text-gray-400">{description}</p>
        </span>
      </div>
      <div className="flex flex-wrap gap-2 md:gap-3">
        {items.map((item) => (
          <LiftButton containerClassName="flex items-center !rounded-lg !px-3 !py-1">
            <Icon icon={item.icon} className="w-3 h-3 md:w-5 md:h-5 mr-1" />
            <p className="text-xs md:text-sm">{item.name}</p>
          </LiftButton>
        ))}
      </div>
    </motion.div>
  )
}
