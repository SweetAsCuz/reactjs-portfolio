import FadeInSection from '../../components/animated/custom/FadeInSection'
import ScrollFloat from '../../components/animated/ReactBits/ScrollFloat'
import TechStackBox from '../../components/animated/custom/TechStackBox'

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
      items: [
        { name: 'Netlify', icon: 'material-icon-theme:netlify-light' },
        { name: 'Vercel', icon: 'skill-icons:vercel-light' },
      ],
    },
    {
      icon: 'carbon:flow-connection',
      title: 'Tools',
      description: 'Various tools for design, versioning, productivity and etc.',
      items: [
        { name: 'Git', icon: 'vscode-icons:file-type-git' },
        { name: 'GitHub', icon: 'mdi:github' },
        { name: 'GitLab', icon: 'vscode-icons:file-type-gitlab' },
        { name: 'Puppeteer', icon: 'material-icon-theme:puppeteer' },
        { name: 'Postman', icon: 'vscode-icons:file-type-postman' },
        { name: 'Cloudinary', icon: 'logos:cloudinary-icon' },
        { name: 'Notion', icon: 'devicon:notion' },
        { name: 'Figma', icon: 'material-icon-theme:figma' },
        { name: 'GenerativeAI', icon: 'ri:ai-generate-2' },
        { name: 'Wondershare Filmora', icon: 'simple-icons:wondersharefilmora' },
      ],
    },
    {
      icon: 'carbon:flow-connection',
      title: 'Fundamental',
      description: 'Development concepts and best practices.',
      items: [
        { name: 'Scrum/Agile Development', icon: 'iconoir:agile' },
        { name: 'Responsive Design', icon: 'material-symbols:fit-screen' },
        { name: 'Software Testing', icon: 'mdi:ab-testing' },
        {
          name: 'Software Development Lifecycle',
          icon: 'carbon:ibm-software-watsonx-data-unstructured-enrichment',
        },
      ],
    },
  ]

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
        Skills
      </ScrollFloat>

      <FadeInSection className="subtitleText">
        My go-to tech stack <span className="narrateText">(fueled by chaos and curiosity)</span>.
      </FadeInSection>

      <div className="flex flex-col items-center gap-y-10">
        {techStacks.map((item) => (
          <TechStackBox key={item.title} {...item}></TechStackBox>
        ))}
      </div>
    </div>
  )
}
