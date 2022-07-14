import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./SearchContainer.scss";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import Carousel from '../../components/Carousel/Carousel'
import cardData from "../../assets/data/dummyPathwayData"

const SearchContainer = ({ title, pathwaysLink }) => {

  const [searchTerm, setSearchTerm] = useState("");
  const [arr, setArr] = useState(cardData);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.search.value);
    event.preventDefault();
    const filterArray = cardData.filter((element) => {
      return element.header
        .toLowerCase()
        .includes(event.target.search.value.toLowerCase());
    });
    setArr(filterArray);
  };

  return (
    <div className="search-container">
      <SearchBar handleChange={handleSearchChange} />
      {arr.length ? (
        searchTerm ? (
          <h1 className="search-container__heading">
            Search results for "{searchTerm}"
          </h1>
        ) : (
          <div className="search-container__titles">
            <ContentHeader title={title} link={pathwaysLink}/>
          </div>
        )
      ) : (
        <h1 className="search-container__heading">
          Nothing matched your search.
        </h1>
      )}
      <div className="search-container__carousel">
        <Carousel cardData={arr} />
      </div>
    </div>
  );
};

export default SearchContainer;
