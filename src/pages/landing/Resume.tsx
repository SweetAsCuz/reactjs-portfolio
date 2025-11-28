import LiftButton from '../../components/animations/custom/LiftButton'

export default function Resume() {
  return (
    <section
      className="bg-cover bg-center py-24"
      style={{
        backgroundImage: "url('/images/1.png'",
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="flex flex-col items-center">
        <p className="uppercase text-3xl mb-6 font-bold">Check out my résumé!</p>
        <a href="/Dew_Khai_Yek_Resume.pdf" target="_blank" rel="noopener noreferrer">
          <LiftButton>Grab a Copy</LiftButton>
        </a>
      </div>
    </section>
  )
}
