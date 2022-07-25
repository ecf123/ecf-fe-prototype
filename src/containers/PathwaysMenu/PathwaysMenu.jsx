import React, { useState } from "react";
import TrophyHeader from "../../components/TrophyHeader/TrophyHeader.jsx";
import FilterTag from "../../components/FilterTag/FilterTag.jsx";
import PathwayCardList from "../PathwayCardList/PathwayCardList";
import Navigation from "../../components/Navigation/Navigation.jsx";
import cardData from "../../assets/data/dummyPathwayData";
import "./PathwaysMenu.scss";

// Link to dummy data
import userProfile from "../../assets/data/dummyUserData.js";

// path: /pathways

const PathwaysMenu = () => {
  const [filter, setFilter] = useState("all");

  const [filteredCardData, setFilteredCardData] = useState(cardData);

  const getFilteredCards = (newFilter) => {
    console.log(newFilter);
    if (newFilter !== "all") {
      setFilteredCardData(
        cardData.filter((card) => card.category.toLowerCase() === newFilter)
      );
    } else {
      setFilteredCardData(cardData);
    }
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.id);
    getFilteredCards(event.target.id);
  };

  return (
    <div className="pathways-menu">
      <TrophyHeader userProfile={userProfile} />
      <h1
        data-testid="pathways-menu-heading"
        className="pathways-menu__heading"
      >
        Pathways
      </h1>
      <div
        data-testid="pathways-menu-filters"
        className="pathways-menu__filters"
      >
        <FilterTag filterArray={handleFilterChange} />
      </div>

      <div data-testid="pathways-menu-list" className="pathways-menu__list">
        <PathwayCardList cards={filteredCardData} />
      </div>

      <div data-testid="pathways-menu-navbar" className="pathways-menu__navbar">
        <Navigation />
      </div>
    </div>
  );
};

export default PathwaysMenu;
