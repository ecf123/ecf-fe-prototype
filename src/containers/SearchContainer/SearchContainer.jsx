import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./SearchContainer.scss";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import Carousel from "../../components/Carousel/Carousel";
import ArticleCardList from "../ArticleCardList/ArticleCardList";

const SearchContainer = ({ title, pathwaysLink, articles, pathways }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = event => {
    event.preventDefault();
    setSearchTerm(event.target.search.value.toLowerCase());
  };

  const filteredPathways = pathways.filter(pathway => {
    return pathway.header.toLowerCase().includes(searchTerm);
  });

  const filteredArticles = articles.filter(element => {
    return element.title.toLowerCase().includes(searchTerm);
  });

  const articleFilterListClassName = "search-container__articles-list" + (searchTerm ? "" : "--search");

  return (
    <div className="search-container">
      <SearchBar handleChange={handleSearchChange} placeholder="Search for pathways, articles..." />
      {searchTerm ? (
        <h1 className="search-container__heading">Pathway results for "{searchTerm}"</h1>
      ) : (
        <div className="search-container__titles">
          <ContentHeader title={title} link={pathwaysLink} />
        </div>
      )}
      {filteredPathways.length === 0 ? (
        <h1 className="search-container__heading">No Pathways found</h1>
      ) : (
        <div className="search-container__carousel">
          <Carousel cardData={filteredPathways} />
        </div>
      )}
      {searchTerm ? (
        <h1 className="search-container__heading">Article results for "{searchTerm}"</h1>
      ) : (
        <div className="search-container__titles">
          <ContentHeader title="Articles" link="/articles" />
        </div>
      )}
      {filteredArticles.length === 0 ? (
        <h1 className="search-container__heading">No Articles found</h1>
      ) : (
        <div className={articleFilterListClassName}>
          <ArticleCardList articleInfo={filteredArticles} />
        </div>
      )}
    </div>
  );
};

export default SearchContainer;
