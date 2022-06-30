import React from 'react'
import "./NavBar.scss"
import { NavLink } from "react-router-dom";

import home from "../../assets/images/home-icon.svg";
import library from "../../assets/images/library.svg";
import branches from "../../assets/images/forest-icon.svg";
import profile from  "../../assets/images/profile-settings.svg";

const NavBar = () => {
  
  return (
    <div className='nav-bar'>
        <NavLink to="/" className={({isActive})=> (isActive ? "nav-bar__link-active" : "nav-bar__link")}><img src={home} alt="Home icon"/></NavLink>
        <NavLink to="/Library" className={({isActive})=> (isActive ? "nav-bar__link-active" : "nav-bar__link")}><img src={library} alt="Resources icon" /></NavLink>
        <NavLink to="/Branches" className={({isActive})=> (isActive ? "nav-bar__link-active" : "nav-bar__link")}><img src={branches} alt="Learning Branch icon" /></NavLink>
        <NavLink to="/Profile" className={({isActive})=> (isActive ? "nav-bar__link-active" : "nav-bar__link")}><img src={profile} alt="User Profile icon" /></NavLink>
    </div>
    
  )
}

export default NavBar