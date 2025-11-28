import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Icon } from '@iconify/react'

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
      className="flex flex-col rounded-lg shadow-xl p-6 bg-white w-3/4"
    >
      <div className="flex items-center mb-4">
        <span className="mr-3 text-primary border-primary/30 flex size-10 min-w-10 items-center justify-center rounded-lg border">
          <Icon icon={icon} className="w-6 h-6 " />
        </span>
        <span className="flex flex-col">
          <p className="text-base">{title}</p>
          <p className="text-sm text-gray-400">{description}</p>
        </span>
      </div>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            transition={{ duration: 0.3 }}
            className="flex items-center border border-gray-300 rounded-lg px-3 py-1"
          >
            <Icon icon={item.icon} className="w-5 h-5 mr-1" />
            <p className="text-sm">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
