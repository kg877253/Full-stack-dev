import { useState,useEffect } from "react"
import React from 'react'

const Navbar = ({color}) => {

    useEffect(() => {
      alert("this will run on every render")
    })

    useEffect(() => {
      alert("this will run only first render")
    },[])
    
    useEffect(() => {
      alert("color was changed")
    },[color])

  return (
    <div>
      Iam a Navbar
    </div>
  )
}

export default Navbar
