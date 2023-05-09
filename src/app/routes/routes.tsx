import { applicationRoutes } from 'pages/Application'
import { authRoutes } from 'pages/Auth'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([applicationRoutes, authRoutes])

export default router
