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
  const { welcomeMessage } = props;

  return (
    <div className="login-page">
      <div className="login-page__back-button">
        <BackButton linkTo="/" />
      </div>
      <h2 className="login-page__welcome">{welcomeMessage}</h2>
      <form className="login-page__inputs">
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
      <p className="login-page__divider">
        <span className="login-page__divider--text">Sign in with</span>
      </p>
      <div className="login-page__login-buttons">
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