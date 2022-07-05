import React from 'react'
import {
  SkillTreeGroup,
  SkillTree,
  SkillProvider,
  SkillType,
  SkillGroupDataType,
} from 'beautiful-skill-tree';

const SkillsTree = () => {
  const data = [];
  return (
    <SkillProvider>
      <SkillTreeGroup>
      <SkillTree
        treeId="first-tree"
        title="Skill Tree"
        data={data}
        collapsible
        description="My first skill tree"
      />
      </SkillTreeGroup>
    </SkillProvider>
  )
}

export default SkillsTree