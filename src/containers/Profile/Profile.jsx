import React from "react";
import "./Profile.scss";
import Button from "../../components/Button/Button";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
// path: /profile

const Profile = ({ handleLogoutUser }) => {
  const navigate = useNavigate();

  const logOut = () => {
    signOut(auth);
    handleLogoutUser();
    navigate("/");
  };

  return (
    <div className="profile-page">
      <div className="profile-page__button">
        <Button buttonText="SIGN OUT" onClickButton={logOut} />
      </div>
      <Navigation />
    </div>
  );
};

export default Profile;
