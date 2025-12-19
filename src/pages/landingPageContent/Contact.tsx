import { Icon } from '@iconify/react'
import { motion } from 'motion/react'

export default function Contact() {
  function copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text)
  }

  const socialMedia = [
    {
      name: 'LinkedIn',
      icon: 'mdi:linkedin',
      link: 'https://www.linkedin.com/in/dewkhaiyek/',
    },
    {
      name: 'GitHub',
      icon: 'mdi:github',
      link: 'https://github.com/SweetAsCuz',
    },
    {
      name: 'WhatsApp',
      icon: 'mdi:whatsapp',
      link: 'https://wa.me/601110520802',
    },
    {
      name: 'Instagram',
      icon: 'mdi:instagram',
      link: 'https://www.instagram.com/khaiyek_02/',
    },
  ]

  return (
    <section className="sticky bottom-0 left-0 min-h-screen flex flex-col bg-[#ffdee4]">
      <div className="flex-grow grid grid-cols-[1fr_3fr_1fr]">
        <div></div>

        <div className="flex flex-col justify-center items-center text-center sm:px-12 lg:px-24 py-16">
          <Icon icon="ion:md-paper-plane" className="w-24 h-24 mb-8" />
          <p className="text-4xl font-bold mb-8">Get In Touch</p>
          <p className="max-w-md mb-8">
            Have a sweet project in mind or just want to say hi?
            <br />
            Feel free to send me a message!
          </p>

          <div className="md:hidden flex items-center gap-5 text-black">
            {socialMedia.map((item) => (
              <motion.a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
                whileHover={{
                  y: -5,
                  transition: { duration: 0.1 },
                }}
              >
                <Icon className="w-7 h-7" icon={item.icon} />
              </motion.a>
            ))}
          </div>

          <span className="flex items-center mt-8">
            <p className="font-nanum text-2xl mr-2">dewkhaiyek@gmail.com</p>
            <motion.span
              whileHover={{
                y: -5,
                transition: { duration: 0.1 },
              }}
            >
              <Icon
                icon="material-symbols:content-copy-outline"
                className="w-5 h-5 cursor-pointer hover:text-white"
                onClick={() => copyToClipboard('dewkhaiyek@gmail.com')}
              />
            </motion.span>
          </span>
        </div>
      </div>

      <footer className="py-6 flex justify-center text-center text-xl font-nanum">
        Designed & Developed by Dew :D 2025
      </footer>
    </section>
  )
}
