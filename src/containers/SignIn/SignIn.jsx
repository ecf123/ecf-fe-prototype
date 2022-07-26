import React from "react";
import InputField from "../../components/InputField/InputField";
import "./SignIn.scss";
import Button from "../../components/Button/Button";
import BackButton from "../../components/BackButton/BackButton";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import facebookIcon from "../../assets/images/facebook-logo.svg";
import googleIcon from "../../assets/images/google-logo.svg";
import appleIcon from "../../assets/images/apple-logo.svg";

// path: /sign-in

const SignIn = (props) => {
  return (
    <div className="sign-in">
      <div className="sign-in__back-button">
        <BackButton linkTo="/" />
      </div>
      <h2 className="sign-in__title">Welcome Back</h2>
      <form className="sign-in__inputs">
        <InputField
          inputType="email"
          label="Email Address"
          placeholder="you@example.com"
        />
        <InputField
          inputType="password"
          label="Password"
          placeholder="Your password"
        />
      </form>
      <Button buttonText="LOGIN" />
      <p className="sign-in__divider">
        <span className="sign-in__divider--text">Sign in with</span>
      </p>
      <div className="sign-in__login-buttons">
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

export default SignIn;