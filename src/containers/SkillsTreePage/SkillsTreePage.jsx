import React, {useState} from 'react'
import SkillsTree from '../SkillsTree/SkillsTree'
import "./SkillsTreePage.scss";
import PopUp from "../../components/PopUp/PopUp";
import { data } from "./../../assets/data/dummySkillsMap";
import BackButton from "../../components/BackButton/BackButton";
import { useParams } from "react-router-dom";

// /pathways/:pathwayId/skills-tree


const SkillsTreePage = () => {

  const { pathwayId } = useParams();
  const [displayPopUp, setDisplayPopUp] = useState(false);
  const [node, setNode] = useState(undefined);

  const handleOverlayClick = () => {
    setDisplayPopUp(false);
  }

  const handleNodeClick = (event) => {
    //event.currentTarget.value
    console.log(event.currentTarget.id)
    const id = event.currentTarget.id
    //console.log()
    setNode(findNodeInArray(data, id))//findNodeInArray(data, id)
    //console.log(node.description)
    setDisplayPopUp(true);
  }

  const findNodeInArray = (arr, id) => {
    console.log(arr.length)
    for (let i = 0; i < arr.length; i++)  {
      
      console.log(arr[i].children)
      if (arr[i].id === id) {
        console.log(arr[i].id)
        return arr[i];
      } else {
        
        if (findNodeInArray(arr[i].children, id)) {
          return findNodeInArray(arr[i].children, id);
        }
      }
    }
    console.log("here")
  }

  return (
    <div className="skills-tree-page">
        <div className="skills-tree-page__back-button">
          <BackButton linkTo={"/pathways/" + pathwayId} isSecondary={true} />
        </div>
        <h1 className="skills-tree-page__heading">Financial Forest</h1>
        <SkillsTree handleNodeClick={handleNodeClick}/>
        {displayPopUp && <PopUp link="/pathways" description={node.description} title={node.title} onOverlayClick={handleOverlayClick}/>}
    </div>
  );
};

export default SkillsTreePage;
