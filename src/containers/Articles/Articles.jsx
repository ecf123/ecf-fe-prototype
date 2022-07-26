import React, {useState} from 'react';
import ArticleCardList from '../ArticleCardList/ArticleCardList';
import TrophyHeader from "../../components/TrophyHeader/TrophyHeader";
import SearchBar from '../../components/SearchBar/SearchBar';
import FilterTag from '../../components/FilterTag/FilterTag';
import Navigation from '../../components/Navigation/Navigation';
import "./Articles.scss";

// path: /articles

const Articles = ({ articleInfo, userProfile }) => {
  
  // eslint-disable-next-line no-unused-vars
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState(["All"])

  const searchTermChange = event => {
    event.preventDefault()
    const cleanInput = event.target.search.value.toLowerCase();
    setSearchTerm(cleanInput);
  }

  const filteredArticles = articleInfo.filter(article => {
    const articleTitleLower = article.title.toLowerCase();    
    
    
    return articleTitleLower.includes(searchTerm)
  })
  
  return (
    <div className='articles'>
      <TrophyHeader userProfile={userProfile} />
      <h1 className='articles__title'>Articles</h1>
      <div className="articles__content">
        <SearchBar handleInput={searchTermChange} />
        <FilterTag />
        <ArticleCardList articleInfo={filteredArticles} />
        <Navigation />
      </div>
    </div>
  );
};

export default Articles;