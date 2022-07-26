import React, { useState } from "react";
import "./CreateAccount.scss";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
import BackButton from "../../components/BackButton/BackButton";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import facebookIcon from "../../assets/images/facebook-logo.svg";
import googleIcon from "../../assets/images/google-logo.svg";
import appleIcon from "../../assets/images/apple-logo.svg";
import { auth } from "../../firebase";
import { updateProfile } from "firebase/auth";

const CreateAccount = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const [user, setUser] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" });

  const handleInputChange = event => {
    setUser(previousState => ({ ...previousState, [event.target.name]: event.target.value }));
  };

  const switchPage = () => {
    if (user.firstName === "" || user.lastName === "") {
      return;
    }

    if (page === 1) {
      setPage(2);
    } else {
      setPage(1);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();

    //Make sure all fields have content - error notification may be useful
    if (!Object.values(user).every(item => item.length > 0)) {
      return;
    }

    // Check passwords match - error notification may be useful
    if (user.password !== user.confirmPassword) {
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);

      if (userCredential) {
        updateProfile(auth.currentUser, {
          displayName: `${user.firstName} ${user.lastName}`,
        });
        sessionStorage.setItem("displayName", `${user.firstName} ${user.lastName}`);
        setUser({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" });
        navigate("/");
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + " " + errorMessage);
    }
  };

  return (
    <div className="register-user">
      {page === 1 ? (
        <>
          <div className="register-user__back-button">
            <BackButton linkTo="/splash" />
          </div>
          <h2 className="register-user__title">Create An Account</h2>
          <form className="register-user__inputs register-user__inputs--page-one">
            <InputField
              inputType="text"
              label="First Name"
              placeholder="First Name"
              onChange={handleInputChange}
              inputName="firstName"
              value={user.firstName}
            />
            <InputField
              inputType="text"
              label="Last Name"
              placeholder="Last Name"
              onChange={handleInputChange}
              inputName="lastName"
              value={user.lastName}
            />
          </form>
          <Button buttonText="NEXT" onClickButton={switchPage} />
        </>
      ) : (
        <>
          <div className="register-user__back-button">
            <BackButton onClick={switchPage} linkTo="" />
          </div>
          <h2 className="register-user__title">Create An Account</h2>
          <form className="register-user__inputs register-user__inputs--page-two" onSubmit={handleSubmit}>
            <InputField
              inputType="email"
              label="Email Address"
              placeholder="you@example.com"
              onChange={handleInputChange}
              inputName="email"
              value={user.email}
            />
            <InputField
              inputType="password"
              label="Password"
              placeholder="Your password"
              onChange={handleInputChange}
              inputName="password"
              value={user.password}
            />
            <InputField
              inputType="password"
              label="Confirm Password"
              placeholder="Confirm Password"
              onChange={handleInputChange}
              inputName="confirmPassword"
              value={user.confirmPassword}
            />
          </form>
          <Button linkTo="/" onClickButton={handleSubmit} buttonText="CREATE ACCOUNT" buttonType={"submit"} />
        </>
      )}
      <div className="register-user__social-login-container">
        <p className="register-user__divider">
          <span className="register-user__divider--text">Sign in with</span>
        </p>
        <div className="register-user__login-buttons">
          <SocialLogin icon={facebookIcon} />
          <SocialLogin icon={googleIcon} />
          <SocialLogin icon={appleIcon} />
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
