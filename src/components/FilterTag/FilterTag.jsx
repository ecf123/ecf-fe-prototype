import React, { useState } from "react";
import "./FilterTag.scss";
import performanceMoney from "../../assets/images/performance-money-icon.svg";
import handshake from "../../assets/images/handshake-icon.svg";
import paintingPalette from "../../assets/images/painting-palette-icon.svg";
import phoneWrite from "../../assets/images/phone-write-icon.svg";
import carActions from "../../assets/images/car-actions-icon.svg";
import fileCode from "../../assets/images/file-code-icon.svg";

const filtersArray = [
    { id: "finance", name: "Finance", img: performanceMoney },
    { id: "business", name: "Business", img: handshake },
    { id: "design", name: "Design", img: paintingPalette },
    { id: "digital-marketing", name: "Digital-marketing", img: phoneWrite },
    { id: "engineering", name: "Engineering", img: carActions },
    { id: "programming", name: "Programming", img: fileCode },
];

const FilterTag = () => {
    const [activeArray, setActiveArray] = useState([
        true,
        false,
        false,
        false,
        false,
        false,
        false,
    ]);

    const handleSelected = (event) => {
        setActiveArray([false, false, false, false, false, false, false]);
        switch (event.target.id) {
            case "all":
                setActiveArray([
                    true,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                ]);
                break;
            case "finance":
                setActiveArray([
                    false,
                    true,
                    false,
                    false,
                    false,
                    false,
                    false,
                ]);
                break;
            case "business":
                setActiveArray([
                    false,
                    false,
                    true,
                    false,
                    false,
                    false,
                    false,
                ]);
                break;
            case "design":
                setActiveArray([
                    false,
                    false,
                    false,
                    true,
                    false,
                    false,
                    false,
                ]);
                break;
            case "digital-marketing":
                setActiveArray([
                    false,
                    false,
                    false,
                    false,
                    true,
                    false,
                    false,
                ]);
                break;
            case "engineering":
                setActiveArray([
                    false,
                    false,
                    false,
                    false,
                    false,
                    true,
                    false,
                ]);
                break;
            case "programming":
                setActiveArray([
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    true,
                ]);
                break;
            default:
                setActiveArray([
                    true,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                ]);
                break;
        }
    };

    const filterTagJsx = filtersArray.map((filter, index) => {
        return (
            <span
                id={filter.id}
                data-testid="filtertag-item"
                key={index + 1}
                className={
                    activeArray[index + 1]
                        ? "filter-tag__item filter-tag__active"
                        : "filter-tag__item"
                }
                onClick={(event) => {
                    handleSelected(event);
                }}
            >
                <img src={filter.img} alt="" /> {filter.name}
            </span>
        );
    });

    return (
        <div className="filter-tag">
            <span
                id="all"
                data-testid="filtertag-item"
                className={
                    activeArray[0]
                        ? "filter-tag__item filter-tag__active"
                        : "filter-tag__item"
                }
                onClick={(event) => {
                    handleSelected(event);
                }}
            >
                {"    "}
                All{"   "}
            </span>
            {filterTagJsx}
        </div>
    );
};

export default FilterTag;
