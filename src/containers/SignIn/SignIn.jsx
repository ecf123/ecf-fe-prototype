import React, { useEffect, useState } from "react";
import InputField from "../../components/InputField/InputField";
import "./SignIn.scss";
import Button from "../../components/Button/Button";
import BackButton from "../../components/BackButton/BackButton";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import facebookIcon from "../../assets/images/facebook-logo.svg";
import googleIcon from "../../assets/images/google-logo.svg";
import appleIcon from "../../assets/images/apple-logo.svg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const defaultUser = { email: "", password: "" };

// path: /sign-in

const SignIn = props => {
  const navigate = useNavigate();
  const [user, setUser] = useState(defaultUser);
  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password);

      if (userCredential) {
        console.log(userCredential);
        sessionStorage.setItem("display", userCredential.user.displayName);
        setUser(defaultUser);
        navigate("/");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-page">
      <BackButton linkTo="/splash" />
      <h2 className="login-page__welcome">Welcome Back</h2>
      <form className="login-page__inputs">
        <InputField
          value={user.email}
          inputType="email"
          label="Email Address"
          placeholder="you@example.com"
          onChange={event => setUser({ ...user, email: event.target.value })}
        />
        <InputField
          value={user.password}
          inputType="password"
          label="Password"
          placeholder="Your password"
          onChange={event => setUser({ ...user, password: event.target.value })}
        />
      </form>
      <Button buttonText="LOGIN" onClickButton={handleSignIn} />
      <p className="login-page__divider">
        <span className="login-page__divider--text">Sign in with</span>
      </p>
      <div className="login-page__login-buttons">
        <SocialLogin icon={facebookIcon} />
        <SocialLogin icon={googleIcon} />
        <SocialLogin icon={appleIcon} />
      </div>
    </div>
  );
};

export default SignIn;
