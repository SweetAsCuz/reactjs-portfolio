import { Icon } from '@iconify/react'

export default function Contact() {
  function copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text)
  }

  return (
    <section
      className="sticky bottom-0 left-0 min-h-screen flex flex-col bg-cover bg-center bg-[#ffdee4]"
      style={{ backgroundImage: "url('/images/b.jpg')" }}
    >
      <div className="flex-grow grid grid-cols-[1fr_3fr_1fr]">
        <div></div>

        <div className="flex flex-col justify-center items-center text-center px-24 py-16">
          <Icon icon="ion:md-paper-plane" className="w-24 h-24 mb-8" />
          <p className="text-4xl font-bold mb-8">Get In Touch</p>
          <p className="max-w-md mb-8">
            Have a sweet project in mind or just want to say hi?
            <br />
            Feel free to send me a message!
          </p>

          <span className="flex items-center mt-8">
            <p className="font-nanum text-2xl mr-2">dewkhaiyek@gmail.com</p>
            <Icon
              icon="material-symbols:content-copy-outline"
              className="w-5 h-5 cursor-pointer hover:text-white"
              onClick={() => copyToClipboard('dewkhaiyek@gmail.com')}
            />
          </span>
        </div>
      </div>

      <footer className="py-6 flex justify-center text-center text-xl font-nanum">
        Designed & Developed by Dew :D 2025
      </footer>
    </section>
  )
}
