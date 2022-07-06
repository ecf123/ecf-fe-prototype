import React from "react";
import { useState } from "react";

const SkillsTreeNode = (props) => {
  const { image, title, description, link } = props;
  const [displayPopUp, setDisplayPopUp] = useState(false);

  const toggleDisplayPopUp = () => {
    setDisplayPopUp(!displayPopUp);
  };
  return (
    <div>
      Lots of really important text
      <img src={image} alt={title} />
      {displayPopUp && <div>Interesting text</div>}
    </div>
  );
};

export default SkillsTreeNode;
