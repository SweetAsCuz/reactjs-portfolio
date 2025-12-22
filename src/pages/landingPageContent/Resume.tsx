import LiftButton from '../../components/animated/custom/LiftButton'

export default function Resume() {
  return (
    <section
      className="bg-cover bg-center py-16 my-10 md:my-16 lg:my-24"
      style={{
        backgroundImage: "url('/images/resume-bg.png'",
        backgroundAttachment: 'fixed', // Buggy in Safari
      }}
    >
      <div className="flex flex-col items-center text-center">
        <p className="bg-primary uppercase text-white font-bold text-2xl md:text-3xl mb-6">
          Check out my résumé!
        </p>
        <a href="/Dew_Khai_Yek_Resume.pdf" target="_blank" rel="noopener noreferrer">
          <LiftButton>Grab a Copy</LiftButton>
        </a>
      </div>
    </section>
  )
}
