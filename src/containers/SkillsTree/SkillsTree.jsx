import React from "react";
import {
  SkillTreeGroup,
  SkillTree,
  SkillProvider,
  SkillType,
  SkillGroupDataType,
} from "beautiful-skill-tree";

// /pathways/:pathwayId/skills-tree

const SkillsTree = () => {
  return (
    <div>
      <p>Hello</p>
      <SkillProvider>
        <SkillTreeGroup>
          {({ skillCount }) => (
            <SkillTree
              treeId="first-tree"
              title="Skill Tree"
              data={data}
              collapsible
              description="My first skill tree"
            />
          )}
        </SkillTreeGroup>
      </SkillProvider>
    </div>
  );
};

export default SkillsTree;
