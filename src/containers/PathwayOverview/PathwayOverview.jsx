import React, { useState } from 'react';
import BackButton from '../../components/BackButton/BackButton';
import TrophyStats from '../../components/TrophyStats/TrophyStats';
import Button from '../../components/Button/Button';
import './PathwayOverview.scss';
import MenuBar from '../../components/MenuBar/MenuBar';
import { useParams, Link } from "react-router-dom";


// path: /pathways/:pathwayId

const PathwayOverview = ({ userProfile, pathwaysData }) => {
  const [category, setCategory] = useState('overview');

  // PROPS TO USE WHEN PATHWAY CARD LIST IS LINKED AND CAN GIVE AN ID
  // const { header, topics, image, id, overview, structure, careers } = card;

  const { pathwayId } = useParams();
  const pickedPathway = pathwaysData.find(
    ({ id }) => id === parseInt(pathwayId)
  );


  // --------------- (id.overview)
  const overviewJSX = pickedPathway.overview.split('.').map((sentence, index) => {
    return <p key={index}>{sentence}</p>;
  });

  const structureJSX = pickedPathway.structure.split('.').map((sentence, index) => {
    return <p key={index}>{sentence}</p>;
  });

  const careersJSX = pickedPathway.careers.split('.').map((sentence, index) => {
    return <p key={index}>{sentence}</p>;
  });

  const handleCategoryChange = (event) => {
    setCategory(event.target.innerText.toLowerCase());
  };

  const changeCategory = () => {
    switch (category) {
      case 'overview':
        return overviewJSX;
      case 'structure':
        return structureJSX;
      case 'careers':
        return careersJSX;
      default:
        return;
    }
  };
  
  return (
    <div className="pathway-overview">
      <header className="pathway-overview__header">
        <div className="pathway-overview__backButton">
          <BackButton linkTo="/pathways" />
        </div>
        <div className="pathway-overview__trophy">
          <TrophyStats userProfile={userProfile} />
        </div>
      </header>
      <div className="card-container">
        <h1 className="card-container__header">{pickedPathway.header}</h1>
        <img
          className="card-container__image"
          data-testid="main-image"
          src={pickedPathway.image}
          alt={pickedPathway.topics}
        />
      </div>
      <div className="pathway-overview__filters">
        <MenuBar
          link1="Overview"
          link2="Structure"
          link3="Careers"
          onClickLink={handleCategoryChange}
        />
      </div>
      <div className="pathway-overview__content" data-testid="main-content">
        {changeCategory()}
      </div>
      <Link to={"/pathways/" + pathwayId + "/skills-tree"} className="pathway-overview__button">
        <Button buttonText={'START PATHWAYS'} />
      </Link>
    </div>
  );
};

export default PathwayOverview;
