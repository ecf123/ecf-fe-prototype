import React from "react";
import "./Profile.scss";
import Button from "../../components/Button/Button";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

// path: /profile

const Profile = () => {
  const navigate = useNavigate();

  const logOut = () => {
    signOut(auth);
    navigate("/");
  };

  return (
    <div className="profile-page">
      <Button className="profile-page__sign-out" buttonText="SIGN OUT" onClickButton={logOut} />
    </div>
  );
};

export default Profile;
