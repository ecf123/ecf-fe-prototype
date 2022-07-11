import React from 'react'
import "./FinishTreeNode.scss"
import podium from "../../assets/images/podium.svg"
import lock from "../../assets/images/lock.svg"
import Xarrow from "react-xarrows";

const FinishTreeNode = (props) => {
    const {title, finished, parentId} = props;

    return (<>
            {finished 
                ? <div className='finish-tree-node' id="finish">
                    <img className='finish-tree-node__img' src={podium} alt="People celebrating"/>
                    <h1 className='finish-tree-node__heading'>CONGRATULATIONS!! YOU'VE COMPLETED THE {title.toUpperCase()} PATHWAY</h1>
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
                : (
                    <div className='finish-tree-node' id="finish">
                        <img className='finish-tree-node__img finish-tree-node--locked' src={podium} alt="People celebrating"/>
                        <h1 className='finish-tree-node__heading finish-tree-node--locked'>CONGRATULATIONS!! YOU'VE COMPLETED THE {title.toUpperCase()} PATHWAY</h1>
                        <img src={lock} alt="lock"/>
                        <Xarrow
                        start="finish"
                        end={parentId}
                        startAnchor="top"
                        endAnchor="middle"
                        color="white"
                        strokeWidth={6}
                        showHead={false}
                        path="grid"
                        gridBreak="100%"
                        animateDrawing={false}
                        SVGcanvasProps={{ strokeOpacity: "50%" }}
                        />
                    </div>
                )
            }
        </>
    )
}

export default FinishTreeNode