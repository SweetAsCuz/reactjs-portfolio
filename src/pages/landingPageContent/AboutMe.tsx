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
        Hi, I'm a Computer Science graduate from{' '}
        <a
          className="text-primary hover:bg-primary hover:text-white cursor-pointer"
          href="https://www.usm.my/ms/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Universiti Sains Malaysia
        </a>
        . I've studied software engineering. I love exploring latest techs and integrating them into
        my life.
        {/* <span className="narrateText">(sometimes)</span>{' '} */}
      </FadeInSection>
    </div>
  )
}
