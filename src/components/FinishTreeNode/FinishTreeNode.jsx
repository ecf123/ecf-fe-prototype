import React from "react";
import "./FinishTreeNode.scss";
import podium from "../../assets/images/podium.svg";
import lock from "../../assets/images/lock.svg";
import Xarrow from "react-xarrows";
import line from "../../assets/images/Vector.svg";
import circle from "../../assets/images/Ellipse 92.svg";

const FinishTreeNode = (props) => {
  const { title, finished, parentId } = props;

  return (
    <>
      {finished ? (
        <div className="finish-tree-node" id="finish">
          <div className="finish-tree-node__container">
            <img
              className="finish-tree-node__circle"
              src={circle}
              alt="Circle"
            />
            <img
              className="finish-tree-node__img"
              src={podium}
              alt="People celebrating"
            />
          </div>
          <img className="finish-tree-node__line" src={line} alt="Underline" />
          <h1 className="finish-tree-node__heading">
            CONGRATULATIONS!! YOU'VE COMPLETED THE {title.toUpperCase()} PATHWAY
          </h1>
          <Xarrow
            start="finish"
            end={parentId}
            startAnchor="top"
            endAnchor="middle"
            color="white"
            strokeWidth={5}
            showHead={false}
            path="grid"
            gridBreak="100%"
            animateDrawing={false}
          />
        </div>
      ) : (
        <div className="finish-tree-node finish-tree-node--locked" id="finish">
            <div className="finish-tree-node__container">
          <img className="finish-tree-node__circle" src={circle} alt="Circle" />
          <img
            className="finish-tree-node__img finish-tree-node--locked"
            src={podium}
            alt="People celebrating"
          />
          <img src={lock} alt="lock" className="finish-tree-node__lock" />
          </div>
          <img className="finish-tree-node__line" src={line} alt="Underline" />
          <h1 className="finish-tree-node__heading finish-tree-node--locked">
            CONGRATULATIONS!! YOU'VE COMPLETED THE {title.toUpperCase()} PATHWAY
          </h1>
          <Xarrow
            start="finish"
            end={parentId}
            startAnchor="top"
            endAnchor="top"
            color="white"
            strokeWidth={6}
            showHead={false}
            path="grid"
            gridBreak="100%"
            animateDrawing={false}
            // SVGcanvasProps={{ strokeOpacity: "50%" }}
          />
        </div>
      )}
    </>
  );
};

export default FinishTreeNode;
