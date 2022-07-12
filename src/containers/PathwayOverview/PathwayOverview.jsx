import React, { useState } from 'react';
import BackButton from '../../components/BackButton/BackButton';
import TrophyStats from '../../components/TrophyStats/TrophyStats';
import Button from '../../components/Button/Button';
import './PathwayOverview.scss';
import MenuBar from '../../components/MenuBar/MenuBar';

// path: /pathways/:pathwayId

const PathwayOverview = ({ userProfile, card }) => {
  const { header, topics, image, overview, structure, careers } = card;

  const [category, setCategory] = useState('overview');

  const overviewJSX = overview.split('.').map((sentence) => {
    return <p>{sentence}</p>;
  });
  const structureJSX = structure.split('.').map((sentence) => {
    return <p>{sentence}</p>;
  });
  const careersJSX = careers.split('.').map((sentence) => {
    return <p>{sentence}</p>;
  });
  const handleCategoryChange = (event) => {
    setCategory(event.target.innerText.toLowerCase());
    console.log(event.target.innerText.toLowerCase());
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
        console.log('not working');
        return;
    }
  };

  return (
    <div className="pathway-overview">
      <header className="pathway-overview__header">
      <div className='pathway-overview__backButton'>
        <BackButton linkTo="linkTo" />
        </div>
        <div className='pathway-overview__trophy'>
        <TrophyStats userProfile={userProfile} />
        </div>
      </header>
      <div className="card-container">
        <h1 className="card-container__header">{header}</h1>
        <img className="card-container__image" src={image} alt={topics} />
      </div>
      <div className="pathway-overview__filters">
        <MenuBar
          link1="Overview"
          link2="Structure"
          link3="Careers"
          onClickLink={handleCategoryChange}
        />
      </div>
      <div className="pathway-overview__content">{changeCategory()}</div>

      <div className="pathway-overview__button">
        <Button buttonText={'START PATHWAYS'} />
      </div>
    </div>
  );
};

export default PathwayOverview;
