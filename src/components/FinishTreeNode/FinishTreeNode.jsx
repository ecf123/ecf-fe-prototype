import React from "react";
import "./FinishTreeNode.scss";
import podium from "../../assets/images/podium.svg";
import lock from "../../assets/images/lock.svg";
import Xarrow from "react-xarrows";
import line from "../../assets/images/Vector.svg";
import circle from "../../assets/images/Ellipse 92.svg";

const FinishTreeNode = (props) => {
  const { title, finished, parentId } = props;
  let strokeOpacity = "100%"

  if (!finished) {
    strokeOpacity = "50%"
  }

  return (
      <div className="finish-tree-node" id="finish">
        <div className="finish-tree-node__container">
          <img
            className="finish-tree-node__container__circle"
            src={circle}
            alt="Circle"
            data-testid="circle"
          />
          <img
            className="finish-tree-node__container__img"
            src={podium}
            alt="People celebrating"
            data-testid="podium"
          />
          {!finished &&
            <img
            src={lock}
            alt="lock"
            className="finish-tree-node__container__lock"
            data-testid="lock"
          />}
        </div>
        <img className="finish-tree-node__line" data-testid="line" src={line} alt="Underline" />
        <h1 className="finish-tree-node__heading" data-testid="heading">
          CONGRATULATIONS!! YOU'VE COMPLETED THE {title} PATHWAY
        </h1>
        {process.env.NODE_ENV !== 'test' && 
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
            SVGcanvasProps={{ strokeOpacity: strokeOpacity}}
          />
        }

        {!finished && 
        <div className="finish-tree-node__overlay" data-testid="overlay"></div>}
      </div>
  );
};

export default FinishTreeNode;
