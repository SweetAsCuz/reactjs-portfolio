import FadeInSection from '../../components/animations/custom/FadeInSection'
import ScrollFloat from '../../components/animations/ReactBits/ScrollFloat'

export default function AboutMe() {
  return (
    <div className="flex flex-col justify-center px-24">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
        containerClassName="flex justify-center "
        textClassName="!text-6xl font-bold"
      >
        About Me
      </ScrollFloat>

      <FadeInSection className="text-lg">
        Hi, I'm a Computer Science freshgraduate from{' '}
        <a
          className="text-primary hover:bg-primary hover:text-white cursor-pointer"
          href="https://www.usm.my/ms/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Universiti Sains Malaysia
        </a>
        . I'm a software engineer and designer <a className="text-sm text-gray-500">(sometimes)</a>{' '}
        passionate about user experience design & frontend development. I enjoy building tools using
        code for my own use.
      </FadeInSection>
      {/* A multidisciplinary developer and designer (sometimes) with a passion for creating engaging, entertaining user experiences. ✨ */}
    </div>
  )
}
