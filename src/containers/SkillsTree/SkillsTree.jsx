import React from "react";
import SkillsTreeNode from "../../components/SkillsTreeNode/SkillsTreeNode";
import { data } from "./../../assets/data/dummySkillsMap";

const SkillsTree = (props) => {
  return (
    <div>
      <SkillsTreeNode image={data[0].icon} title="More interesting text" />
    </div>
  );
};

export default SkillsTree;
