import "./UserIcon.scss";
import React from "react";
import userIconDefault from "../../assets/images/profile-picture.svg";

const UserIcon = ({ userIcon }) => {
  return <img className="user-icon" src={userIcon || userIconDefault} alt="user" />;
};

export default UserIcon;
