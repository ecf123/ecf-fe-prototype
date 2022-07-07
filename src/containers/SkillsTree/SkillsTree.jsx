import Xarrow from "react-xarrows";
import SkillsTreeNode from "../../components/SkillsTreeNode/SkillsTreeNode";
import { data } from "./../../assets/data/dummySkillsMap";
import React, { useRef } from "react";
import "./SkillsTree.scss";

const SkillsTree = () => {
  let levels = [];
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
        />
        {parentId &&
          (locked ? (
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
              SVGcanvasProps={{ strokeOpacity: "50%", }}
            />
          ) : (
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
    <div className="skills-tree">
      {levelsJsx}
    </div>
  );
};

export default SkillsTree;
