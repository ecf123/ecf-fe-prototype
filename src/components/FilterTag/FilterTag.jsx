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
  { id: "digital marketing", name: "Digital Marketing", img: phoneWrite },
  { id: "engineering", name: "Engineering", img: carActions },
  { id: "programming", name: "Programming", img: fileCode },
];

const FilterTag = ({ filterArray }) => {

  const [selected, setSelected] = useState("all");

  const handleSelected = (event) => {
    if (event.target.id === "all") {
      setSelected("all")
    } else {
      setSelected(
        filtersArray.find((pathway) => pathway.id === event.target.id).id)
      };
  };

  const filterTagJsx = filtersArray.map((filter, index) => {
    return (
      <span
        id={filter.id}
        data-testid="filtertag-item"
        key={index + 1}
        className={
          (selected == filter.id)
            ? "filter-tag__item filter-tag__active"
            : "filter-tag__item"
        }
        onClick={(event) => {
          handleSelected(event);
          filterArray(event);
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
          (selected == "all")
            ? "filter-tag__item filter-tag__active"
            : "filter-tag__item"
        }
        onClick={(event) => {
          handleSelected(event);
          filterArray(event);
        }}
      >
        All
      </span>
      {filterTagJsx}
    </div>
  );
};

export default FilterTag;
