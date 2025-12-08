import { Outlet } from 'react-router-dom'
import SideNavigationBar from '../components/SideNavigationBar'
import Particles from '../components/animated/ReactBits/Particles'
import { motion, useScroll } from 'motion/react'

export default function Layout() {
  const { scrollYProgress } = useScroll()

  return (
    <main className="w-full bg-[#f2f2f2] relative z-10">
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
          zIndex: 50,
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
        />
      </div>

      {/* Page content goes here */}
      <div className="relative z-40 overflow-hidden">
        <Outlet />
      </div>
    </main>
  )
}
