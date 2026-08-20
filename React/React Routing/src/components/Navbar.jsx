import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
      <nav>
        <ul>
          <NavLink className={(e)=>{return e.isActive?"red":"blue"}} to="/"> <li>Home</li> </NavLink>
          <NavLink className={(e)=>{return e.isActive?"red":"blue"}} to="/about"> <li>About</li> </NavLink>
          <NavLink className={(e)=>{return e.isActive?"red":"blue"}} to="/login"> <li>Login</li> </NavLink>
        </ul>
      </nav>
  )
}

export default Navbar
