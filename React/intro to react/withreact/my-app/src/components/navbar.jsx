import React from 'react'
import Footer from './footer'

const Navbar = (props) => {
  return (
    <div>
        <h1>{props.logotext}</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
        <Footer/>
    </div>
  )
}

export default Navbar
