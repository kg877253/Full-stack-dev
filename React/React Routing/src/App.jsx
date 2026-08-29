import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import User from './components/User'
import Login from './components/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Settings from './components/Settings'

function App() {

  const router = createBrowserRouter([
    
    {path: "/",
      element: <><Navbar /> <Home /></>
    },
    {path: "/about",
      element: <><Navbar /> <About /></>
    },
    {
      path: "/login",
      element: <><Navbar /> <Login /></>
    },
    {
      path: "/user/:namme",
      element: <><Navbar /> <User /></>
    },
    {
      path: "/user",
      element: <><Navbar /> <User /></>
    },
    {
      path:"/dashboard",
      element: <><Navbar /> <Dashboard /></>,
      children:[
        {
          path: "/dashboard/profile",
          element: <> <Profile /></>
        },
        {
          path: "/dashboard/settings",
          element: <> <Settings /></>
        }
      ]
    },
    // it selects all routes jo define nhi hai 
    {
      path: "*",
      element: <><Navbar /> <h1>404 - Page Not Found</h1></>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
