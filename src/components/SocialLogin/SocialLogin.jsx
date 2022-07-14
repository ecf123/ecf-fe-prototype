import React from "react";
import "./SocialLogin.scss";

const SocialLogin = (props) => {
  const { icon, onClick } = props;

  return (
    <div className="social-login">
      <button className="social-login__button" onClick={onClick}>
        <img src={icon} alt="social login" />
      </button>
    </div>
  );
};

export default SocialLogin;