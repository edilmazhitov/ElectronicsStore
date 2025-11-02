import './styles/styles.scss'
import { RouterProvider } from 'react-router-dom'
import { router } from './routing/routing'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="bottom-center" autoClose={5000} />
    </>
  )
}

export default App
