import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./SearchContainer.scss";
import ContentHeader from "../../components/ContentHeader/ContentHeader";

const SearchContainer = ({ title, pathwaysLink }) => {

  // dummy array
  const dummyArray = [
    "apple",
    "orange",
    "banana",
    "pear",
    "jackfruit",
    "passionfruit",
    "melon",
    "lemon",
    "lime",
    "watermelon",
    "mango",
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [arr, setArr] = useState(dummyArray);

  const arrayJsx = arr.map((element, index) => {
    return <p key={index}>{element}</p>;
  });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.search.value);
    event.preventDefault();
    const filterArray = dummyArray.filter((element) => {
      return element
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
      <div className="search-container__list">{arrayJsx}</div>
    </div>
  );
};

export default SearchContainer;
