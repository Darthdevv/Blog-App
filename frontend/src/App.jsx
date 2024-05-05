import Home from './pages/home/Home'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Error from './pages/error/Error'
import Register from './pages/register/Register'
import Login from './pages/log/Login'
import CreatePost from './pages/post/CreatePost'
import Authors from './pages/authors/Authors'
import PostDetails from './pages/post/PostDetails'
import UserProfile from './pages/profiles/UserProfile'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        { path: 'posts/:id', element: <PostDetails /> },
        { path: 'register', element: <Register /> },
        { path: 'login', element: <Login /> },
        { path: 'authors', element: <Authors /> },
        { path: 'create', element: <CreatePost /> },
        { path: 'profile/:id', element: <UserProfile /> },
      ],
    },
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
