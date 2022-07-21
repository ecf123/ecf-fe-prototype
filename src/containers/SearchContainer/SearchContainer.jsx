import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./SearchContainer.scss";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import Carousel from "../../components/Carousel/Carousel";
import cardData from "../../assets/data/dummyPathwayData";
import articleInfo from "../../assets/data/dummyArticleCardInformation";
import ArticleCardList from "../ArticleCardList/ArticleCardList";

const SearchContainer = ({ title, pathwaysLink }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [arr, setArr] = useState(cardData);
  const [articleArray, setArticleArray] = useState(articleInfo);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.search.value);
    event.preventDefault();
    const filterArray = cardData.filter((element) => {
      return element.header
        .toLowerCase()
        .includes(event.target.search.value.toLowerCase());
    });
    setArr(filterArray);
    
    const articleFilterArray = articleInfo.filter((element) => {
      return element.title
        .toLowerCase()
        .includes(event.target.search.value.toLowerCase());
    });
    setArticleArray(articleFilterArray)
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
            <ContentHeader title={title} link={pathwaysLink} />
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
      <div className="home-container__header">
        <ContentHeader title="Articles" link="/articles" />
      </div>
      <ArticleCardList articleInfo={articleArray} />
    </div>
  );
};

export default SearchContainer;
