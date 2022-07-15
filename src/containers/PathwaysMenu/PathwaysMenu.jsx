import React, { useState } from "react";
import TrophyHeader from "../../components/TrophyHeader/TrophyHeader.jsx";
import FilterTag from "../../components/FilterTag/FilterTag.jsx";
import PathwayCardList from "../PathwayCardList/PathwayCardList";
import Navigation from "../../components/Navigation/Navigation.jsx";
import "./PathwaysMenu.scss"

// Link to dummy data
import userProfile from "../../assets/data/dummyUserData.js";

// path: /pathways

const PathwaysMenu = () => {
    const [filter, setFilter] = useState("all");

    const handleFilterChange = (event) => {
        setFilter(event.target.id);
    };

    return (
        <div className="pathways-menu">
            <div data-testid="pathways-menu-header" className="pathways-menu__header">
            <TrophyHeader  userProfile={userProfile} />  
            </div>
            <h1 data-testid="pathways-menu-heading" className="pathways-menu__heading">Pathways</h1>
            <div data-testid="pathways-menu-filters" className="pathways-menu__filters">
                <FilterTag filterArray={handleFilterChange} />
            </div>
            <div data-testid="pathways-menu-list" className="pathways-menu__list">
                <PathwayCardList filter={filter} />
            </div>
            <div data-testid="pathways-menu-navbar" className="pathways-menu__navbar">
                <Navigation />
            </div>
        </div>
    );
};

export default PathwaysMenu;