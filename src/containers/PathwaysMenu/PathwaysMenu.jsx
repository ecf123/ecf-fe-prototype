import React from "react";
import FilterTag from "../../components/FilterTag/FilterTag.jsx";
import PathwayCardList from "../PathwayCardList/PathwayCardList";

// path: /pathways

const PathwaysMenu = () => {
    const filterArray = (event) => {
        console.log(event.target.id);
    };

    return (
        <div>
            <div>
                <FilterTag filterArray={filterArray} />
                <PathwayCardList />
            </div>
        </div>
    );
};

export default PathwaysMenu;
