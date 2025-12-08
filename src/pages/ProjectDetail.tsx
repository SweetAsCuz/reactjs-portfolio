import { useParams, Link } from 'react-router-dom'
import { projectData } from '../data/projectData'

export default function ProjectDetail() {
  const { id } = useParams()

  return <div>{id}</div>
}
