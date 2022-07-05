import React from "react";
import TrophyHeader from "../../components/TrophyHeader/TrophyHeader";

const Article = ({ userProfile }) => {
  return (
    <div>
      <TrophyHeader userProfile={userProfile} />
    </div>
  );
};

export default Article;
