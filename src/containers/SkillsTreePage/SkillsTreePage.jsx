import React, { useState } from "react";
import SkillsTree from "../SkillsTree/SkillsTree";
import "./SkillsTreePage.scss";
import PopUp from "../../components/PopUp/PopUp";
import { data } from "./../../assets/data/dummySkillsMap";
import BackButton from "../../components/BackButton/BackButton";
import { useParams } from "react-router-dom";

// /pathways/:pathwayId/skills-tree

const SkillsTreePage = () => {
  const { pathwayId } = useParams();
  const [displayPopUp, setDisplayPopUp] = useState(false);
  const [node, setNode] = useState(undefined);

  const title = "Financial Forest";

  const handleOverlayClick = () => {
    setDisplayPopUp(false);
  };

  const handleNodeClick = (event) => {
    const id = event.currentTarget.id;
    setNode(findNodeInArray(data, id));
    setDisplayPopUp(true);
  };

  const findNodeInArray = (arr, id) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === id) {
        return arr[i];
      } else {
        if (findNodeInArray(arr[i].children, id)) {
          return findNodeInArray(arr[i].children, id);
        }
      }
    }
  };
  return (
    <div className="skills-tree-page">
      <div className="skills-tree-page__back-button">
        <BackButton linkTo={"/pathways/" + pathwayId} isSecondary={true} />
      </div>
      <h1 className="skills-tree-page__heading" data-testid="popup-title">
        {title}
      </h1>
      <SkillsTree handleNodeClick={handleNodeClick} title={title} />
      {displayPopUp && (
        <PopUp
          description={node.description}
          title={node.title}
          link={node.link}
          onOverlayClick={handleOverlayClick}
        />
      )}
    </div>
  );
};

export default SkillsTreePage;
