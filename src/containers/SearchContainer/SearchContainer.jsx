import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./SearchContainer.scss";

const SearchContainer = ({ title }) => {
  // dummy array
  const arr = [
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
  const [arrayJsx, setArrayJsx] = useState([]);

  useEffect(() => {
    setArrayJsx(
      arr.map((element, index) => {
        return <p key={index}>{element}</p>;
      })
    );
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.search.value);
    event.preventDefault();

    const filterArray = arr.filter((element) => {
      return element
        .toLowerCase()
        .includes(event.target.search.value.toLowerCase());
    });

    setArrayJsx(
      filterArray.map((element, index) => {
        return <p key={index}>{element}</p>;
      })
    );
  };

  return (
    <div className="search-container">
      <SearchBar handleChange={handleSearchChange} />
      {arrayJsx.length ? (
        searchTerm ? (
          <h1 className="search-container__heading">
            Search results for "{searchTerm}"
          </h1>
        ) : (
          <div className="search-container__titles">
            <h1 className="search-container__heading">{title}</h1>
            <h2 className="search-container__view-button">View All</h2>
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
