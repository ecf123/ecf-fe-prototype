import React, { useState } from 'react';
import "./CreateAccount.scss";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
import BackButton from "../../components/BackButton/BackButton";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link, Route } from 'react-router-dom';
import facebookIcon from "../../assets/images/facebook-logo.svg";
import googleIcon from "../../assets/images/google-logo.svg";
import appleIcon from "../../assets/images/apple-logo.svg";


const CreateAccount = ({ auth }) => {
  const [page, setPage] = useState(1);
  const [user, setUser] = useState({ firstName: "", lastName: "", email: "", password: "" });
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const navigate = useNavigate();

  const switchPage = () => {
    if (page === 1) {
      setPage(2)
    } else {
    setPage(1);
  }
  };

  const nextPage = () => {
    setPage(2);
  }

  const handleSubmit = (event) => {
    console.log("fire")
    event.preventDefault();
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        console.log('Success')
        const user = userCredential.user;
        setUser(previousState => ({ ...previousState, email: user.email }));
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });

  }

  const handleInputChange = (event) => {
    setUser(previousState => ({ ...previousState, [event.target.name]: event.target.value }));
  }

  const handlePasswordConfirmChange = (event) => {
    setPasswordConfirm(event.target.value);
  }


  return (
    <div className="register-user">
      {page === 1 ? (
        <>
          <BackButton linkTo="/splash" />
          <h2 className="register-user__title">Create An Account</h2>
          <form className="register-user__inputs--pageOne">
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
            <Button buttonText="NEXT" onClickButton={nextPage} />
        </>
      ) : (
        <>
          <BackButton onClick={previousPage} linkTo="" />
          <h2 className="register-user__title">Create An Account</h2>
          <form className="register-user__inputs--pageTwo" onSubmit={handleSubmit}>
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
              onChange={handlePasswordConfirmChange}
              inputName="passwordConfirm"
              value={passwordConfirm}
            />
          </form>
          <Button onClickButton={handleSubmit} buttonText="CREATE ACCOUNT" buttonType={"submit"} />
        </>
      )}
          <p className="register-user__divider">
            <span className="register-user__divider--text">Sign in with</span>
          </p>
          <div className="register-user__login-buttons">
            <SocialLogin
              icon={facebookIcon}
            />
            <SocialLogin
              icon={googleIcon}
            />
            <SocialLogin
              icon={appleIcon}
            />
          </div>
        </div>
      );
};


      export default CreateAccount