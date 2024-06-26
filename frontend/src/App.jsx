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
import EditPost from './pages/post/EditPost'
import DashBoard from './pages/dashboard/DashBoard'
import CategoryPosts from './pages/post/CategoryPosts'
import AuthorPosts from './pages/post/AuthorPosts'
import Logout from './pages/logout/Logout'
import SecondaryLayout from './layouts/SecondaryLayout'
import DeletePost from './pages/post/DeletePost'
import UserProvider from './context/userContext'
import GuardRoute from './guard/GuardRoute'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "logout",
          element: <Logout />,
        },
        {
          path: "authors",
          element: <Authors />,
        },
        {
          path: "create",
          element: (
            <GuardRoute>
              <CreatePost />
            </GuardRoute>
          ),
        },
        {
          path: "profile/:id",
          element: (
            <GuardRoute>
              <UserProfile />
            </GuardRoute>
          ),
        },
        {
          path: "posts/:id/edit",
          element: (
            <GuardRoute>
              <EditPost />
            </GuardRoute>
          ),
        },
        {
          path: "myposts/:id",
          element: (
            <GuardRoute>
              <DashBoard />
            </GuardRoute>
          ),
        },
        {
          path: "posts/categories/:category",
          element: <CategoryPosts />,
        },
        {
          path: "posts/users/:id",
          element: <AuthorPosts />,
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
    {
      path: "details",
      element: <SecondaryLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "posts/:id",
          element: <PostDetails />,
        },
      ],
    },
    {
      path: "posts",
      element: <SecondaryLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "users/:id/details/posts/:id",
          element: <PostDetails />,
        },
        {
          path: "categories/:category/details/posts/:id",
          element: <PostDetails />,
        },
      ],
    },
  ]);

  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App
