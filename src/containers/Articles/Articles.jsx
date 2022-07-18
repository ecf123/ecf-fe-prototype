import React, {useState} from 'react';
import ArticleCardList from '../ArticleCardList/ArticleCardList';
import TrophyHeader from "../../components/TrophyHeader/TrophyHeader";
import SearchBar from '../../components/SearchBar/SearchBar';
import FilterTag from '../../components/FilterTag/FilterTag';
import Navigation from '../../components/Navigation/Navigation';
import "./Articles.scss";

// path: /articles

const Articles = ({ articleInfo, userProfile }) => {

  const [searchCriteria, setSearchCriteria] = useState("");

  return (
    <div className='articles'>
      <header className="articles__header">
        <TrophyHeader userProfile={userProfile} />
      </header>
      <div className="articles__content">
        <h2 className='articles__title'>Articles</h2>
        <SearchBar handleChange={setSearchCriteria} />
        <FilterTag />
        <ArticleCardList articleInfo={articleInfo} />
        <Navigation />
      </div>
    </div>
  );
};

export default Articles;