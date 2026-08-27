import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import User from './components/User'
import Login from './components/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'

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
    }
  ])

  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
