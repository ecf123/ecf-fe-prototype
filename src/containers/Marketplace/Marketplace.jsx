import React from "react";
import TrophyHeader from "../../components/TrophyHeader/TrophyHeader";

// path: /marketplace

const Marketplace = ({ userProfile }) => {
  return (
    <div>
      <TrophyHeader userProfile={userProfile} />
    </div>
  );
};

export default Marketplace;
