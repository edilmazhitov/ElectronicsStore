import { RouterProvider } from 'react-router-dom'
import router from './routing/routing.tsx'
import './styles/styles.scss'

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
