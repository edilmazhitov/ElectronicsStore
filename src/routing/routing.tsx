import { createBrowserRouter } from 'react-router-dom'
import type { RouteObject } from 'react-router'

import Root from '../Root/Root'
import Home from '@pages/Home/Home'
import Register from '@pages/Register/Register'
import Login from '@pages/Login/Login'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]

export const router = createBrowserRouter(routes)
