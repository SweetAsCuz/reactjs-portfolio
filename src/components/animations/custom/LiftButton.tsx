import { ReactNode } from 'react'
import { motion } from 'motion/react'

interface LiftButtonProps {
  children: ReactNode
  className?: string
}

export default function LiftButton({ children, className = '', ...props }: LiftButtonProps) {
  return (
    <motion.button
      whileHover={{
        x: -4,
        y: -4,
        boxShadow: '4px 4px 0px #fcb3bf',
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
      whileTap={{
        x: -2,
        y: -2,
        boxShadow: '2px 2px 0px #fcb3bf',
      }}
      className={`px-4 py-2 rounded bg-[#f2f2f2] text-primary border-primary border font-medium ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
