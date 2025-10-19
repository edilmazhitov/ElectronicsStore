import { createBrowserRouter } from 'react-router-dom'
import type { RouteObject } from 'react-router'

import Root from '../Root/Root'
import Home from '@pages/Home/Home'
import Register from '@pages/Register/Register'
import Login from '@pages/Login/Login'
import Favorites from '@pages/Favorites/Favorites'
import Carts from '@pages/Carts/Carts'
import Reviews from '@pages/Reviews/Reviews'
import CheckOut from '@pages/CheckOut/CheckOut'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'favorites',
        element: <Favorites />,
      },
      {
        path: 'carts',
        element: <Carts />,
      },
      {
        path: 'reviews',
        element: <Reviews />,
      },
      {
        path: 'CheckOut',
        element: <CheckOut />,
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
