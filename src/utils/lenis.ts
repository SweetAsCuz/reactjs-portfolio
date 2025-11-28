// ensure single instance only

import Lenis from 'lenis'

let lenis: Lenis | null = null

export function initLenis() {
  if (!lenis) {
    lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    const raf = (time: any) => {
      lenis!.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    lenis.on('scroll', (e) => {
      // optional: log scroll events
      // console.log(e)
    })
  }
  return lenis
}

export function getLenis() {
  if (!lenis) throw new Error('Lenis not initialized yet')
  return lenis
}
