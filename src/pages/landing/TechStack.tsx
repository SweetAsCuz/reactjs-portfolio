import FadeInSection from '../../components/animations/custom/FadeInSection'
import ScrollFloat from '../../components/animations/ReactBits/ScrollFloat'
import TechStackBox from '../../components/animations/custom/TechStackBox'

export default function TechStacks() {
  const techStacks = [
    {
      icon: 'material-symbols:web-traffic',
      title: 'Frontend',
      description: 'Building responsive and dynamic user interfaces.',
      items: [
        { name: 'VueJs', icon: 'logos:vue' },
        { name: 'ReactJs', icon: 'vscode-icons:file-type-reactjs' },
        { name: 'Nuxt', icon: 'vscode-icons:file-type-nuxt' },
        { name: 'HTML', icon: 'devicon:html5' },
        { name: 'CSS', icon: 'devicon:css3' },
        { name: 'TailwindCSS', icon: 'devicon:tailwindcss' },
        { name: 'JavaScript', icon: 'skill-icons:javascript' },
        { name: 'TypeScript', icon: 'skill-icons:typescript' },
        { name: 'Flutter', icon: 'vscode-icons:file-type-flutter' },
        { name: 'Motion', icon: 'devicon:framermotion' },
        { name: 'ElementPlus', icon: 'ep:element-plus' },
        { name: 'ShadCN', icon: 'simple-icons:shadcnui' },
        { name: 'DaisyUI', icon: 'logos:daisyui-icon' },
      ],
    },
    {
      icon: 'lucide:code-xml',
      title: 'Backend',
      description: 'Creating robust APIs and server-side applications.',
      items: [
        { name: 'Express.js', icon: 'skill-icons:expressjs-light' },
        { name: 'REST API', icon: 'eos-icons:api-outlined' },
        { name: 'Laravel', icon: 'devicon:laravel' },
      ],
    },
    {
      icon: 'solar:database-line-duotone',
      title: 'Database',
      description: 'Managing and designing efficient data storage solutions.',
      items: [
        { name: 'Firebase', icon: 'devicon:firebase' },
        { name: 'PostgreSQL', icon: 'devicon:postgresql' },
      ],
    },
    {
      icon: 'mdi:infinity',
      title: 'DevOps',
      description: 'Deployment and server management.',
      items: [{ name: 'Netlify', icon: 'material-icon-theme:netlify-light' }],
    },
    {
      icon: 'carbon:flow-connection',
      title: 'Tools',
      description: 'Design, coding, and productivity tools.',
      items: [
        { name: 'Git', icon: 'vscode-icons:file-type-git' },
        { name: 'GitHub', icon: 'mdi:github' },
        { name: 'GitLab', icon: 'vscode-icons:file-type-gitlab' },
        { name: 'Puppeteer', icon: 'material-icon-theme:puppeteer' },
        { name: 'Postman', icon: 'vscode-icons:file-type-postman' },
        { name: 'Cloudinary', icon: 'logos:cloudinary-icon' },
      ],
    },
  ]

  return (
    <div className="flex flex-col justify-center mb-48">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
        containerClassName="flex justify-center my-0 py-5"
        textClassName="!text-6xl font-bold"
      >
        Skills
      </ScrollFloat>
      <div className="flex flex-col items-center gap-y-10">
        {techStacks.map((item) => (
          <TechStackBox {...item}></TechStackBox>
        ))}
      </div>
    </div>
  )
}
