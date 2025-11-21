import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Home from './pages/landing/Home'
import AboutMe from './pages/landing/AboutMe'
import TechStacks from './pages/landing/TechStack'
import Projects from './pages/landing/Projects'
import SideNavigationBar from './components/SideNavigationBar'
import Particles from './components/animations/ReactBits/Particles'
import Contact from './pages/landing/Contact'
import { motion, useScroll } from 'motion/react'

function App() {
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time: any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    lenis.on('scroll', (e: any) => {
      console.log(e)
    })

    requestAnimationFrame(raf)
  }, [])

  const sections = [AboutMe, TechStacks, Projects]
  const ids = ['about', 'skills', 'projects']

  return (
    <main>
      <div className="w-full bg-[#f2f2f2] relative z-10 pb-20">
        <motion.div
          id="scroll-indicator"
          style={{
            scaleX: scrollYProgress,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            originX: 0,
            backgroundColor: '#ff0088',
            zIndex: '50',
          }}
        />
        <SideNavigationBar />
        <div className="w-full h-screen fixed z-0 pointer-events-none">
          <Particles
            particleColors={['#c989ff']}
            particleCount={200}
            particleSpread={10}
            speed={0.2}
            particleBaseSize={150}
            moveParticlesOnHover={false}
            alphaParticles={true}
            disableRotation={true}
            // sizeRandomness={12}
          />
        </div>

        {/* Page Content */}
        <div className="relative z-40 overflow-hidden">
          <Home />
          {sections.map((Section, i) => (
            <section
              id={ids[i]}
              key={i}
              className="w-full min-h-screen grid grid-cols-[1fr_3fr_1fr]"
            >
              <div></div>
              <Section />
              <div></div>
            </section>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Contact />
    </main>
  )
}

export default App
