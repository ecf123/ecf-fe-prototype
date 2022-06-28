import React from 'react'
import "./NavBar.scss"
import "../../assets/icons/"

const NavBar = () => {
  return (
    <div className='nav-bar'>
        <button className="nav-bar__buttons"><img src="" alt="Home icon" className="nav-bar__img" /></button>
        <button className="nav-bar__buttons"><img src="" alt="Resources icon" className="nav-bar__img" /></button>
        <button className="nav-bar__buttons"><img src="" alt="Learning Branch icon" className="nav-bar__img" /></button>
        <button className="nav-bar__buttons"><img src="" alt="User Profile icon" className="nav-bar__img" /></button>
    </div>
  )
}

export default NavBar