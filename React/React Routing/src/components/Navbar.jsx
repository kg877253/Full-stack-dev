import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav>
            <ul>
                <NavLink className={(e) => { return e.isActive ? "red" : "blue" }} to="/"> <li>Home</li> </NavLink>
                <NavLink className={(e) => { return e.isActive ? "red" : "blue" }} to="/about"> <li>About</li> </NavLink>
                <NavLink className={(e) => { return e.isActive ? "red" : "blue" }} to="/login"> <li>Login</li> </NavLink>
                <NavLink className={(e) => { return e.isActive ? "red" : "blue" }} to="/dashboard"> <li>Dashboard</li> </NavLink>
                <NavLink className={(e) => { return e.isActive ? "red" : "blue" }} to="/user"> <li>User</li> </NavLink>
            </ul>
        </nav>
    )
}

export default Navbar
