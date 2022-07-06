import React from "react";
import { data } from "./../../assets/data/dummySkillsMap";
import {
  SkillTreeGroup,
  SkillTree,
  SkillProvider,
  SkillType,
  SkillGroupDataType,
} from "beautiful-skill-tree";

const SkillsTree = (props) => {
  const theme = {
    borderRadius: "50px",
    border: "none",
    treeBackgroundColor: "none",
    nodeBackgroundColor: "white",
    nodeActiveBackgroundColor: "white",
  };
  return (
    <div>
      <SkillProvider>
        <SkillTreeGroup theme={theme}>
          {({ skillCount }) => (
            <SkillTree treeId="first-tree" title="Skill Tree" data={data} />
          )}
        </SkillTreeGroup>
      </SkillProvider>
    </div>
  );
};

export default SkillsTree;
