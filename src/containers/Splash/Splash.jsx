import React from 'react'
import "./Splash.scss"
import GraduationImage from "../../assets/images/graduation.png"
import Button from '../../components/Button/Button';


import {Link} from 'react-router-dom';

const Splash = () => {


  return (
    <div className='splash-container'>
        <img className='splash-container__img' src={GraduationImage} alt="Graduation" />
        <h1 className='splash-container__title'>Welcome to the Future Hub</h1>
        <p className='splash-container__sub-title'>Lorem, ipsum dolor sit amet consec</p>
        <Button buttonText="CREATE AN ACCOUNT"
        buttonType="submit"
        isSecondary={false}/>
        <Link to="/sign-in">
        <Button buttonText="SIGN IN"
        buttonType="submit"
        isSecondary={true}/>
        </Link>
    </div>
  )
}

export default Splash