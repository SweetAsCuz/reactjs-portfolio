import Home from './landingPageContent/Home'
import AboutMe from './landingPageContent/AboutMe'
import TechStacks from './landingPageContent/TechStack'
import Projects from './landingPageContent/Projects'
import Resume from './landingPageContent/Resume'

export default function LandingPage() {
  const sections = [Home, AboutMe, TechStacks, Resume, Projects]
  const ids = ['home', 'about', 'skills', 'resume', 'projects']

  return (
    <>
      {sections.map((Section, i) => (
        <section
          id={ids[i]}
          key={i}
          className={`${
            Section === Resume
              ? ''
              : 'min-h-screen grid grid-cols-[1fr_8fr_1fr] md:grid-cols-[1fr_6fr_1fr] lg:grid-cols-[1fr_3fr_1fr]'
          }`}
        >
          <div></div>
          <Section />
          <div></div>
        </section>
      ))}
    </>
  )
}
