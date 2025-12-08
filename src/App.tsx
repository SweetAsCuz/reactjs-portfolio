import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Layout from './layout/Layout'
import { initLenis } from './utils/lenis'
// import ProjectDetail from './pages/ProjectDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ path: '/', element: <LandingPage /> }],
  },
  // {
  //   path: '/project/:id',
  //   element: <ProjectDetail />,
  // },
])

export default function App() {
  initLenis()
  return <RouterProvider router={router} />
}
