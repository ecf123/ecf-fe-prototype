import React from 'react'
import "./Splash.scss"
import GraduationImage from "../../assets/images/graduation.png"
import Button from '../../components/Button/Button';

const Splash = () => {
  return (
    <div className='splash-container'>
        <img classname='splash-container' src={GraduationImage} alt="Graduation" />
        <h1 ></h1>
    </div>
  )
}

export default Splash