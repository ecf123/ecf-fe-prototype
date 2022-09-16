import Xarrow from "react-xarrows";
import SkillsTreeNode from "../../components/SkillsTreeNode/SkillsTreeNode";
import React from "react";
import "./SkillsTree.scss";
import FinishTreeNode from "../../components/FinishTreeNode/FinishTreeNode";

const SkillsTree = ({ handleNodeClick, title, skillsTree }) => {
  let levels = [];
  const getNodes = (node, level) => {
    if (!levels[level]) {
      levels[level] = [];
    }
    levels[level].push(node);
    node.children.forEach(childNode => getNodes(childNode, level + 1));
  };

  getNodes(skillsTree, 0);

  const getNodeJsx = node => {
    const { icon, title, locked, description, id, parentId } = node;
    return (
      <div>
        <SkillsTreeNode
          id={id}
          image={icon}
          title={title}
          locked={locked}
          description={description}
          handleNodeClick={handleNodeClick}
        />
        {parentId &&
          (locked
            ? process.env.NODE_ENV !== "test" && (
                <Xarrow
                  start={id}
                  end={parentId}
                  startAnchor="top"
                  endAnchor="middle"
                  color="white"
                  strokeWidth={5}
                  showHead={false}
                  path="grid"
                  gridBreak="100%"
                  animateDrawing={false}
                  SVGcanvasProps={{ strokeOpacity: "50%" }}
                />
              )
            : process.env.NODE_ENV !== "test" && (
                <Xarrow
                  start={id}
                  end={parentId}
                  startAnchor="top"
                  endAnchor="middle"
                  color="white"
                  strokeWidth={6}
                  showHead={false}
                  path="grid"
                  gridBreak="100%"
                  animateDrawing={false}
                />
              ))}
      </div>
    );
  };

  const getLevelJsx = (level, index) => {
    let levelJsx = (
      <div className="skills-tree__level" key={"level-" + index}>
        {level.map(node => {
          return getNodeJsx(node);
        })}
      </div>
    );
    return levelJsx;
  };

  const levelsJsx = levels.map((level, index) => {
    return getLevelJsx(level, index);
  });

  const getChildNodesDepthAndParentIds = (nodes, givenDepth = 0) => {
    let parentIds = [];
    for (let index = 0; index < nodes.length; index++) {
      if (nodes[index].children.length) {
        parentIds = [...getChildNodesDepthAndParentIds(nodes[index].children, givenDepth + 1)];
      } else {
        parentIds.push({ parentId: nodes[index].parentId, depth: givenDepth, locked: nodes[index].locked });
      }
    }
    return parentIds;
  };

  const getLastNode = () => {
    const nodes = getChildNodesDepthAndParentIds(skillsTree.children);
    return nodes.reduce((acc, cur) => (acc.depth > cur.depth ? acc : cur));
  };

  const lastNode = getLastNode();

  return (
    <div className="skills-tree" data-testid="skills-tree">
      {levelsJsx}
      <FinishTreeNode parentId={lastNode.parentId} title={title} locked={lastNode.locked} />
    </div>
  );
};

export default SkillsTree;
