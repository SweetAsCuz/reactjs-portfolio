import { ReactNode } from 'react'

export interface Project {
  title: string
  description: ReactNode
  projectType: string
  image: string
  tags: string[]
}

export const projectData: Project[] = [
  {
    image: '/images/portfolio-website.png',
    title: 'Portfolio Website',
    description: <>Personal portfolio to showcase my design and coding projects.</>,
    tags: ['React', 'TypeScript', 'TailwindCSS', 'ReactBits', 'Postgresql'],
    projectType: 'Personal',
  },
  {
    image: '/images/foundit.png',
    title: 'Found It',
    description: (
      <>
        A USM-centric lost and found platform.{` `}
        <a
          href="https://github.com/SweetAsCuz/found-it"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          View on GitHub
        </a>
        .
      </>
    ),
    tags: [
      'Nuxt',
      'Firebase',
      'Cloudinary',
      'TypeScript',
      'TailwindCSS',
      'Element-Plus',
      'DaisyUI',
    ],
    projectType: 'Academic',
  },
  {
    image: '/images/grid-ea.png',
    title: 'Autotrading Bot',
    description: (
      <>
        An automated trading bot implementing a hybrid grid strategy.{' '}
        <a
          href="https://github.com/SweetAsCuz/hybrid-grid-ea"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          View on GitHub
        </a>
        .
      </>
    ),
    tags: ['MQL5', 'Metatrader 5'],
    projectType: 'Personal',
  },
  {
    image: '/images/bookmyshow.png',
    title: 'Ticket Scalper',
    description: (
      <>
        A fully automated robot built to scalp event/concert tickets on online platform such as
        BookMyShow.
      </>
    ),
    tags: ['Express.js', 'Puppeteer', 'GoogleGenAI', 'Postman', 'TypeScript'],
    projectType: 'Personal',
  },
  {
    image: '/images/vilor-event.png',
    title: 'Vilor Event Page',
    description: (
      <>
        Vilor's event page to be displayed and used by the customers to browse and purchase events
        or classes provided by the company.{` `}
        <a
          href="https://program.vilor.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Visit Page
        </a>
        .
      </>
    ),
    tags: ['Nuxt', 'TailwindCSS', 'DaisyUI', 'Facebook Analytics', 'Laravel'],
    projectType: 'Work',
  },
  {
    image: 'private',
    title: 'Vilor CRM',
    description: (
      <>
        A centralized platform to manage client relationships, track business interactions mainly to
        assist the marketing and accounting teams.
      </>
    ),
    tags: ['Nuxt', 'TailwindCSS', 'DaisyUI', 'Laravel'],
    projectType: 'Work',
  },
  {
    image: 'private',
    title: 'Vilor Intranet',
    description: (
      <>An internal system to manage general company data, communication and collaboration.</>
    ),
    tags: ['PHP', 'HTML', 'CSS', 'SMTP'],
    projectType: 'Work',
  },
]
