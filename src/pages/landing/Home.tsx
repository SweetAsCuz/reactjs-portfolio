import SplitText from '../../components/animations/ReactBits/SplitText'
import RotatingText from '../../components/animations/ReactBits/RotatingText'
import TextType from '../../components/animations/ReactBits/TextType'

export default function Home() {
  return (
    <section
      id="home"
      className="grid grid-cols-[1fr_3fr_1fr] min-h-screen bg-url('https://images3.alphacoders.com/102/thumb-350-1029633.webp'"
    >
      <div />
      <div className="flex justify-center">
        <div className="flex flex-col justify-center text-black">
          <SplitText
            text="Dew Khai Yek"
            className="mb-4 text-left text-xl text-gray-500 font-semibold tracking-[.25em]"
            delay={100}
            duration={0.7}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            textAlign="left"
          />
          <div className="md:text-6xl lg:text-5xl font-bold">
            <TextType text={'Software Engineer @ USM'} showCursor={false} />

            <RotatingText
              texts={['Web Developer', 'Gamer', 'Sportsperson', 'Investor']}
              mainClassName="w-fit text-primary text-5xl overflow-hidden py-0.5 sm:py-1 md:py-2 rounded-lg"
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
          <div className="mb-4 text-xl text-transparent select-none">cease!</div>
        </div>
      </div>
      <div />
    </section>
  )
}
