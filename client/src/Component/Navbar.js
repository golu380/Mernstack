import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navbar.css'


export const Navbar = () => {
    return (
        <>
   <div id="navbar">
  <NavLink to="/">Home</NavLink>
  <NavLink to="/contact">Contact</NavLink>
  <NavLink to="/about">About</NavLink>
  <NavLink to="/login">Login</NavLink>
  <NavLink to="/signup">Register</NavLink>
  
</div>
        </>
    )
}

