import React from 'react'
import "./Splash.scss"
import GraduationImage from "../../assets/images/graduation.png"
import Button from '../../components/Button/Button';


import {Link} from 'react-router-dom';

// path: /splash

const Splash = () => {

  return (
    <div className='splash-container'>
        <img className='splash-container__img' src={GraduationImage} alt="Graduation" />
        <div className='splash-container__titles'>
          <h1 className='splash-container__titles__main-title'>Welcome to the Future Hub</h1>
          <p className='splash-container__titles__sub-title'>Lorem, ipsum dolor sit amet consec</p>
        </div>
        <div className='splash-container__buttons'>
          <Button buttonText="CREATE AN ACCOUNT"
          buttonType="submit"
          isSecondary={false}/>
          <Link to="/sign-in">
            <Button buttonText="SIGN IN"
            buttonType="submit"
            isSecondary={true}/>
          </Link>
        </div>
    </div>
  )
}

export default Splash