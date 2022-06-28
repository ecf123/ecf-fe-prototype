import React from 'react'
import "./NavBar.scss"
import { Link } from "react-router-dom";

import resources from "../../assets/icons/resources.svg";
import home from "../../assets/icons/home.svg";
import learning from "../../assets/icons/learning.svg";
import profile from  "../../assets/icons/profile.svg";


const NavBar = () => {


  return (

    
    <div className='nav-bar'>
        <Link to="/"><button className="nav-bar__buttons"><img src={home} alt="Home icon" /></button></Link>
        <Link to="/Resources"><button className="nav-bar__buttons"><img src={resources} alt="Resources icon icon" /></button></Link>
        <Link to="/Learning"><button className="nav-bar__buttons"><img src={learning} alt="Learning Branch" /></button></Link>
        <Link to="/Profile"><button className="nav-bar__buttons"><img src={profile} alt="User Profile icon" /></button></Link>
        
    </div>
    
  )
}

export default NavBar