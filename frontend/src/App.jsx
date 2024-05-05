import Home from './pages/home/Home'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Error from './pages/error/Error'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home/>}
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
