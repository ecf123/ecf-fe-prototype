import React from 'react'
import "./Navigation.scss"
import { NavLink } from "react-router-dom";

import home from "../../assets/images/home-icon.svg";
import library from "../../assets/images/library.svg";
import branches from "../../assets/images/forest-icon.svg";
import profile from  "../../assets/images/profile-settings.svg";

const Navigation = () => {
  
  return (
    <>
    <section>
    </section>
    <div className='nav-bar' data-testid="navigation">
        <NavLink to="/" data-testid="home-icon" className={({isActive})=> (isActive ? "nav-bar__link-active" : "nav-bar__link")}><img src={home} alt="Home icon"/></NavLink>
        <NavLink to="/Library" data-testid="resources-icon" className={({isActive})=> (isActive ? "nav-bar__link-active" : "nav-bar__link")}><img src={library} alt="Resources icon"/></NavLink>
        <NavLink to="/Branches" data-testid="branches-icon" className={({isActive})=> (isActive ? "nav-bar__link-active" : "nav-bar__link")}><img src={branches} alt="Learning Branch icon" /></NavLink>
        <NavLink to="/Profile" data-testid="profile-icon" className={({isActive})=> (isActive ? "nav-bar__link-active" : "nav-bar__link")}><img src={profile} alt="User Profile icon"/></NavLink>
    </div>
    </>
  )
}

export default Navigation