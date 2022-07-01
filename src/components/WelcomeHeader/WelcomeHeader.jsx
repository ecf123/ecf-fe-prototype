import React from 'react'
import "./WelcomeHeader.scss"
import UserIcon from '../UserIcon/UserIcon';

const WelcomeHeader = ({ userProfile }) => {
    const { firstName, lastName, userIcon } = userProfile;

    const capitalisedNames = ( name ) => {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    }
    return (
        <div className='welcome-header'>
            <div className='welcome-header__welcome-message'>
                <h1 className='welcome-header__welcome-message__title' >Welcome Back</h1>
                <h2 className='welcome-header__welcome-message__username'>{capitalisedNames(firstName)} {capitalisedNames(lastName)}</h2>
            </div>
            <UserIcon userIcon={userIcon}/>
        </div>
  )
}

export default WelcomeHeader