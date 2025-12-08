import FadeInSection from '../../components/animated/custom/FadeInSection'
import ScrollFloat from '../../components/animated/ReactBits/ScrollFloat'

export default function AboutMe() {
  return (
    <div className="sectionContainer">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
        textClassName="titleText"
      >
        About Me
      </ScrollFloat>

      <FadeInSection className="subtitleText">
        Hi, I'm a Computer Science freshgraduate from{' '}
        <a
          className="text-primary hover:bg-primary hover:text-white cursor-pointer"
          href="https://www.usm.my/ms/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Universiti Sains Malaysia
        </a>
        . I'm a software engineer and designer <span className="narrateText">(sometimes)</span>{' '}
        passionate about user experience design & frontend development. I enjoy building tools using
        code for my own use.
      </FadeInSection>
      {/* A multidisciplinary developer and designer (sometimes) with a passion for creating engaging, entertaining user experiences. ✨ */}
    </div>
  )
}
