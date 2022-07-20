import React, { useState } from 'react';
import BackButton from '../../components/BackButton/BackButton';
import TrophyStats from '../../components/TrophyStats/TrophyStats';
import Button from '../../components/Button/Button';
import './PathwayOverview.scss';
import MenuBar from '../../components/MenuBar/MenuBar';
import { useLocation } from 'react-router-dom';

// path: /pathways/:pathwayId

const PathwayOverview = ({ userProfile, cardData }) => {
  const [category, setCategory] = useState('overview');

  // PROPS TO USE WHEN PATHWAY CARD LIST IS LINKED AND CAN GIVE AN ID
  // const { header, topics, image, id, overview, structure, careers } = card;

  const splitPathname = useLocation().pathname.split("/");
  const card = cardData[splitPathname[2]];

  // --------------- (id.overview)
  const overviewJSX = card.overview.split('.').map((sentence, index) => {
    return <p key={index}>{sentence}</p>;
  });

  const structureJSX = card.structure.split('.').map((sentence, index) => {
    return <p key={index}>{sentence}</p>;
  });

  const careersJSX = card.careers.split('.').map((sentence, index) => {
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
        <h1 className="card-container__header">{card.header}</h1>
        <img
          className="card-container__image"
          data-testid="main-image"
          src={card.image}
          alt={card.topics}
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
      <div className="pathway-overview__button">
        <Button buttonText={'START PATHWAYS'} />
      </div>
    </div>
  );
};

export default PathwayOverview;
