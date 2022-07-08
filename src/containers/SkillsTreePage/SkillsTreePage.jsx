import React from "react";
import SkillsTree from "../SkillsTree/SkillsTree";
import "./SkillsTreePage.scss";
import BackButton from "../../components/BackButton/BackButton";
import { useParams } from "react-router-dom";

// /pathways/:pathwayId/skills-tree

const SkillsTreePage = () => {
  const { pathwayId } = useParams();
  return (
    <div className="skills-tree-page">
      <div className="skills-tree-page__back-button">
        <BackButton linkTo={"/pathways/" + pathwayId} isSecondary={true} />
      </div>
      <h1 className="skills-tree-page__heading">Financial Forest</h1>
      <SkillsTree />
    </div>
  );
};

export default SkillsTreePage;
