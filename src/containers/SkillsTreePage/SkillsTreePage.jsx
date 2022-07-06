import React from 'react'
import SkillsTree from '../SkillsTree/SkillsTree'
import "./SkillsTreePage.scss";

// /pathways/:pathwayId/skills-tree

const SkillsTreePage = () => {
  return (
    <div className="skills-tree-page">
        <h1 className="skills-tree-page__heading">Financial Forest</h1>
        <SkillsTree/>
    </div>
  )
}

export default SkillsTreePage