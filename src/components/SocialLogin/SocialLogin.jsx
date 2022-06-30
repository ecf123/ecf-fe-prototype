import React from "react";
import "./SocialLogin.scss";

const SocialLogin = (props) => {
  const { icon, onClick } = props;

  return (
    <div>
      <button className="social-btn" onClick={onClick}>
        {icon}
      </button>
    </div>
  );
};

export default SocialLogin;
