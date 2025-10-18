import { RouterProvider } from 'react-router-dom'
import { router } from './routing/routing.tsx'
import './styles/styles.scss'
import { useAppDispatch } from '@/hooks/reduxHooks.ts'
import { useEffect } from 'react'
import { getAllProducts } from '@/store/reducers/products.ts'

const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
