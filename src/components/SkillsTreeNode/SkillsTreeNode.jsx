import React from "react";
import { useState } from "react";
import "./SkillsTreeNode.scss";
import lock from "./../../assets/images/lock.svg"


const SkillsTreeNode = (props) => {
  const { image, title, locked, id, handleNodeClick} = props;
  const [displayPopUp, setDisplayPopUp] = useState(false);

  return (
    <>
        {locked 
          ? <div className="node node--locked" id={id}>
              <img  className="node__image" src={lock} alt="locked" />
            </div>
          : <div className="node" id={id} onClick={handleNodeClick}>
              <img  className="node__image" src={image} alt={title} />
            </div>
        }
      {displayPopUp && <div>Interesting text</div>}
    </>
  );
};

export default SkillsTreeNode;
