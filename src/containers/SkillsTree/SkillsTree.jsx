import Xarrow from "react-xarrows";
import SkillsTreeNode from "../../components/SkillsTreeNode/SkillsTreeNode";
import { data } from "./../../assets/data/dummySkillsMap";
import React from "react";
import "./SkillsTree.scss";
import FinishTreeNode from "../../components/FinishTreeNode/FinishTreeNode";

const SkillsTree = (props) => {
  let levels = [];
  const { handleNodeClick, title } = props;
  const getNodes = (node, level) => {
    if (!levels[level]) {
      levels[level] = [];
    }
    levels[level].push(node);
    node.children.forEach((childNode) => getNodes(childNode, level + 1));
  };

  getNodes(data[0], 0);

  const getNodeJsx = (node) => {
    const { icon, title, locked, description, link, id, parentId } = node;
    return (
      <div key={id}>
        <SkillsTreeNode
          id={id}
          image={icon}
          title={title}
          link={link}
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
        {level.map((node) => {
          return getNodeJsx(node);
        })}
      </div>
    );
    return levelJsx;
  };

  const levelsJsx = levels.map((level, index) => {
    return getLevelJsx(level, index);
  });

  return (
    <div className="skills-tree" data-testid="skills-tree">
      {levelsJsx}
      <FinishTreeNode parentId="santander" title={title} finished={true} />
    </div>
  );
};

export default SkillsTree;
