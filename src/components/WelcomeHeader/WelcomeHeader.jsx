import React, { useEffect } from 'react';
import './WelcomeHeader.scss';
import UserIcon from '../UserIcon/UserIcon';

const WelcomeHeader = ({ userProfile, displayName }) => {
  const { firstName, lastName, userIcon } = userProfile;
  console.log(displayName);
  useEffect(() => {
    console.log(displayName);
  }, [displayName]);

  const capitalisedNames = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };
  return (
    <div className="welcome-header">
      <div className="welcome-header__welcome-message">
        <h1 className="welcome-header__welcome-message__title">Welcome Back</h1>
        {displayName && (
          <h2 key={"welcome-header"} className="welcome-header__welcome-message__username">
            {displayName}
          </h2>
        )}
      </div>
      <UserIcon userIcon={userIcon} />
    </div>
  );
};

export default WelcomeHeader;
