import React from "react";
import TrophyHeader from "../../components/TrophyHeader/TrophyHeader.jsx";
import FilterTag from "../../components/FilterTag/FilterTag.jsx";
import PathwayCardList from "../PathwayCardList/PathwayCardList";
import Navigation from "../../components/Navigation/Navigation.jsx";
import "./PathwaysMenu.scss"

// Link to dummy data
import userProfile from "../../assets/data/dummyUserData.js";

// path: /pathways

const PathwaysMenu = () => {
    const filterArray = (event) => {
        console.log(event.target.id);
    };

    return (
        <div className="pathways-menu">
            <div className="pathways-menu__header">
            <TrophyHeader userProfile={userProfile} />  
            </div>
            <h1 className="pathways-menu__heading">Pathways</h1>
            <div className="pathways-menu__filters">
                <FilterTag filterArray={filterArray} />
            </div>
            <div className="pathways-menu__list">
                <PathwayCardList />
            </div>
            <div className="pathways-menu__navbar">
                <Navigation />
            </div>
        </div>
    );
};

export default PathwaysMenu;
