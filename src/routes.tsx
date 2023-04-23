import { createBrowserRouter } from 'react-router-dom'
import { App } from 'app'

const applicationRoutes = {
  path: '/',
  element: <App />,
  children: [],
}

const router = createBrowserRouter([applicationRoutes])

export default router
