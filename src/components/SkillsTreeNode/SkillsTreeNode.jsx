import React from "react";
import { useState } from "react";
import "./SkillsTreeNode.scss";
import lock from "./../../assets/images/lock.svg"


const SkillsTreeNode = (props) => {
  const { image, title, description, link, locked, id, parentId} = props;
  const [displayPopUp, setDisplayPopUp] = useState(false);

  const toggleDisplayPopUp = () => {
    setDisplayPopUp(!displayPopUp);
  };

  return (
    <div id={id}>
        {locked 
          ? <div className="node node--locked">
            <img  className="node__image" src={lock} alt="locked" />
              
            </div>
          : <div className="node">
              <img  className="node__image" src={image} alt={title} />
            </div>
        }
      {displayPopUp && <div>Interesting text</div>}
    </div>
  );
};

export default SkillsTreeNode;
