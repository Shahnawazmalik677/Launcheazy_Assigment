import React from 'react'
import Logo from "../../assets/images/Logo.svg?react"
import Icon from "../../assets/images/Icons.svg?react"
import "./styles.css"
import { NavLink } from "react-router-dom";
function Header() {



  return (
    <div>
       <div className="parent">
        <div className="logo"><Logo/>
        </div>
        <div className="buttons">
        <div className="yellowFree">Free</div>
         <button className='btn'><NavLink className='navLink'>AI Tools</NavLink> <Icon/></button>
         <button className='btn'><NavLink className='navLink'>Product</NavLink> <Icon/></button>
         <button className='btn'><NavLink className='navLink'>Resources</NavLink> <Icon/></button>
         <button className='btn'><NavLink className='navLink'>Pricing</NavLink></button>
         <button className='btn'><NavLink className='navLink'>Contact Us</NavLink></button>
         <div className="waitListButton">Join the waitlist</div>
        </div>
       </div>
       <div className="line"></div>
    </div>
  )
}

export default Header
