import { RouteObject } from 'react-router-dom'

export const routes: RouteObject = {
  path: 'auth',
  async lazy() {
    const { AuthLayout } = await import('pages/Auth/AuthLayout')
    return { Component: AuthLayout }
  },
  children: [
    {
      path: 'login',
      async lazy() {
        const { LoginPage } = await import('pages/Auth/LoginPage')
        return { Component: LoginPage }
      },
    },
  ],
}
