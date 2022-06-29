import React, {useState} from 'react'
import "./NavBar.scss"
import { Link } from "react-router-dom";

import home from "../../assets/images/home-icon.svg";
import library from "../../assets/images/library.svg";
import branches from "../../assets/images/forest-icon.svg";
import profile from  "../../assets/images/profile-settings.svg";



const NavBar = () => {
  
  const [changeColor, setChangecolor] = useState();
  
  
  const handleSelected = (event) => {
    // console.log(event.target.classList);
    console.log(event);
    
  }

  return (

    
    <div className='nav-bar'>
        <Link to="/"><button onClick={handleSelected} className="nav-bar__buttons"><img className='nav-bar__test' src={home} alt="Home icon" /></button></Link>
        <Link to="/Library"><button onClick={handleSelected} className="nav-bar__buttons"><img src={library} alt="Resources icon icon" /></button></Link>
        <Link to="/Branches"><button onClick={handleSelected} className="nav-bar__buttons"><img src={branches} alt="Learning Branch" /></button></Link>
        <Link to="/Profile"><button onClick={handleSelected} className="nav-bar__buttons"><img src={profile} alt="User Profile icon" /></button></Link>
    </div>
    
  )
}

export default NavBar