
import"./UserIcon.scss";
import React from 'react'

const UserIcon = ({userIcon}) => {

  return (
    <img className="user-icon" src={userIcon} alt="user"/>
  )
}

export default UserIcon
