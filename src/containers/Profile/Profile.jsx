import React from "react";
import "./Profile.scss";
import Button from "../../components/Button/Button";
import {auth} from "../../firebase";
import {signOut} from "firebase/auth";

// path: /profile

const Profile = () => {
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("You are signed out");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <div className="profile-page">
      <Button className="profile-page__sign-out" buttonText="SIGN OUT" onClickButton={logOut} />
    </div>
  );
};

export default Profile;
