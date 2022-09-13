import React, { useState } from "react";
import SkillsTree from "../SkillsTree/SkillsTree";
import "./SkillsTreePage.scss";
import PopUp from "../../components/PopUp/PopUp";
import BackButton from "../../components/BackButton/BackButton";
import { useParams } from "react-router-dom";

// /pathways/:pathwayId/skills-tree

const SkillsTreePage = ({ pathways }) => {
  const { pathwayId } = useParams();
  const [displayPopUp, setDisplayPopUp] = useState(false);
  const [node, setNode] = useState(undefined);

  const pathway = pathways.find(pathway => pathway.id === pathwayId);

  const handleOverlayClick = () => {
    setDisplayPopUp(false);
  };

  const handleNodeClick = event => {
    const id = event.currentTarget.id;
    setNode(findNodeInArray(pathway.skillsTree, id));
    setDisplayPopUp(true);
  };

  const findNodeInArray = (skillsTree, id) => {
    if (skillsTree.id === id) return skillsTree;

    const childNodes = skillsTree.children;

    for (let i = 0; i < childNodes.length; i++) {
      if (childNodes[i].id === id) {
        return childNodes[i];
      } else {
        if (findNodeInArray(childNodes[i].children, id)) {
          return findNodeInArray(childNodes[i].children, id);
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
        {pathway.header}
      </h1>
      <SkillsTree handleNodeClick={handleNodeClick} title={pathway.header} skillsTree={pathway.skillsTree} />
      {displayPopUp && (
        <PopUp
          description={node.description}
          title={node.title}
          link={`${pathwayId}/courses/${node.id}`}
          onOverlayClick={handleOverlayClick}
        />
      )}
    </div>
  );
};

export default SkillsTreePage;
