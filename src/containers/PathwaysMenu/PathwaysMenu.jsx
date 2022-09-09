import React, { useState } from "react";
import TrophyHeader from "../../components/TrophyHeader/TrophyHeader.jsx";
import FilterTag from "../../components/FilterTag/FilterTag.jsx";
import PathwayCardList from "../PathwayCardList/PathwayCardList";
import Navigation from "../../components/Navigation/Navigation.jsx";
import "./PathwaysMenu.scss";

// Link to dummy data
import userProfile from "../../assets/data/dummyUserData.js";

// path: /pathways

const PathwaysMenu = ({ pathways }) => {
  const [filterTag, setFilterTag] = useState("all");

  const handleFilterChange = event => {
    setFilterTag(event.currentTarget.id);
  };

  let filteredPathways = pathways;

  if (filterTag !== "all") {
    filteredPathways = pathways.filter(card => card.category.toLowerCase() === filterTag);
  }

  return (
    <div className="pathways-menu">
      <TrophyHeader userProfile={userProfile} />
      <h1 data-testid="pathways-menu-heading" className="pathways-menu__heading">
        Pathways
      </h1>
      <div data-testid="pathways-menu-filters" className="pathways-menu__filters">
        <FilterTag filterArray={handleFilterChange} />
      </div>

      <div data-testid="pathways-menu-list" className="pathways-menu__list">
        <PathwayCardList cards={filteredPathways} />
      </div>

      <div data-testid="pathways-menu-navbar" className="pathways-menu__navbar">
        <Navigation />
      </div>
    </div>
  );
};

export default PathwaysMenu;
