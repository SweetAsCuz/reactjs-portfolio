import { motion, useInView } from 'motion/react'
import { useRef, ReactNode } from 'react'

interface FadeInSectionProps {
  children: ReactNode
  /** Vertical offset (px) to start the fade-in from */
  y?: number
  duration?: number
  className?: string
  /** Whether it should animate only once when it first enters view */
  once?: boolean
}

export default function FadeInSection({
  children,
  y = 20,
  duration = 0.8,
  once = false,
  className = '',
}: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { amount: 0.2, once })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : y }}
      transition={{ duration, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
