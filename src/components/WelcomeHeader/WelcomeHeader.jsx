import React from 'react'
import "./WelcomeHeader.scss"
import userIcon from "../../assets/images/redo.svg"

const WelcomeHeader = ({ userProfile }) => {
    const firstName = userProfile.firstName;
    const lastName = userProfile.lastName;
    return (
        <div className='welcome-header'>
            <div className='welcome-header__welcome-message'>
                <h1 className='welcome-header__welcome-message__title' >Welcome Back</h1>
                <h2 className='welcome-header__welcome-message__username'>{firstName} {lastName}</h2>
            </div>
            <img src={userIcon} alt="" />
        </div>
  )
}

export default WelcomeHeader