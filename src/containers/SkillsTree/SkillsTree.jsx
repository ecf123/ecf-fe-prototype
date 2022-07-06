import React, { useState } from "react";
import SkillsTreeNode from "../../components/SkillsTreeNode/SkillsTreeNode";
import { data } from "./../../assets/data/dummySkillsMap";
import "./SkillsTree.scss"

const SkillsTree = (props) => {

  let levels = [];
  const getNodes = (node, level) => {
    console.log(node.title + " " + level)
    if (!levels[level]) {
      levels[level] = [];
    }
    levels[level].push(node);
    node.children.forEach((childNode) => getNodes(childNode, level + 1))
  }

  getNodes(data[0], 0)

  const getNodeJsx = (node) => {
    const {icon, title, locked, description, link, id} = node;
    return <SkillsTreeNode key={id} image={icon} title={title} link={link} locked={locked} description={description}/>
  }

  const getLevelJsx = (level) => {
    let levelJsx = <div className="skills-tree__level">
      {level.map((node) => {
        return <div className="skills-tree__level">{getNodeJsx(node)}</div>})}
    </div>
    return levelJsx
  }

  const levelsJsx = levels.map((level) => {
    return getLevelJsx(level);
  })

  return (
    <div className="skills-tree">
      {levelsJsx}
    </div>
  );
};

export default SkillsTree;
