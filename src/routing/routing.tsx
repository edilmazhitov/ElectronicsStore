import { createBrowserRouter } from 'react-router-dom'
import type { RouteObject } from 'react-router'

import Root from '../Layout/Root'
import { AnimationLayout } from '../Layout/AnimationLayout'

import Home from '@pages/Home/Home'
import Register from '@pages/Register/Register'
import Login from '@pages/Login/Login'
import Favorites from '@pages/Favorites/Favorites'
import Carts from '@pages/Carts/Carts'
import Reviews from '@pages/Reviews/Reviews'
import CheckOut from '@pages/CheckOut/CheckOut'
import LogOut from '@pages/Logout/LogOut'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        element: <AnimationLayout />,
        children: [
          { path: '', element: <Home /> },
          { path: 'favorites', element: <Favorites /> },
          { path: 'carts', element: <Carts /> },
          { path: 'reviews', element: <Reviews /> },
          { path: 'checkout', element: <CheckOut /> },
          { path: 'logout', element: <LogOut /> },
        ],
      },
    ],
  },
  {
    element: <AnimationLayout />,
    children: [
      { path: '/register', element: <Register /> },
      { path: '/login', element: <Login /> },
    ],
  },
]

export const router = createBrowserRouter(routes)
