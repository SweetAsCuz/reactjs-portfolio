import SplitText from '../../components/animated/ReactBits/SplitText'
import RotatingText from '../../components/animated/ReactBits/RotatingText'
import { Icon } from '@iconify/react'
import { getLenis } from '../../utils/lenis'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

export default function Home() {
  function handleClick(): void {
    const lenis = getLenis()
    lenis.scrollTo('#about')
  }

  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0 })

  return (
    <section id="home" className="flex flex-col min-h-screen items-center">
      <div className="flex justify-center min-w-full my-auto">
        <div className="flex flex-col justify-center text-black text-left min-w-60">
          <SplitText
            text="Dew Khai Yek"
            className="mb-4 text-lg md:text-xl text-gray-500 font-semibold tracking-[.25em]"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            textAlign="left"
          />
          <div className="text-xl md:text-3xl lg:text-6xl font-bold">
            <p>Software Engineer @ USM</p>

            <RotatingText
              texts={['Web Developer', 'Gamer', 'Sportsperson', 'Investor']}
              mainClassName="w-fit text-primary text-3xl md:text-5xl overflow-hidden py-0.5 sm:py-1 md:py-2 rounded-lg"
              staggerFrom={'last'}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-120%' }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
          <div />
        </div>
      </div>
      <motion.a
        ref={ref}
        className="my-10 hover:text-primary"
        onClick={handleClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        whileHover={{
          y: [0, 6, -3, 6, 0],
          transition: {
            duration: 0.5,
            repeat: 0,
          },
        }}
      >
        <Icon icon="tabler:chevron-down" className="w-12 h-12 cursor-pointer" />
      </motion.a>
    </section>
  )
}
