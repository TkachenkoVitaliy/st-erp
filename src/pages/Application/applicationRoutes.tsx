import { RouteObject } from 'react-router-dom'

export const routes: RouteObject = {
  path: '',
  async lazy() {
    const { ApplicationLayout } = await import(
      'pages/Application/ApplicationLayout'
    )
    return { Component: ApplicationLayout }
  },
  children: [
    {
      path: 'dashboard',
      async lazy() {
        const { Dashboard } = await import('pages/Application/Dashboard')
        return { Component: Dashboard }
      },
    },
  ],
}
