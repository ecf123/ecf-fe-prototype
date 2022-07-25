import React from "react";
import "./Home.scss";
import WelcomeHeader from "../../components/WelcomeHeader/WelcomeHeader";
import SearchContainer from "../../containers/SearchContainer/SearchContainer";
import Navigation from "../../components/Navigation/Navigation";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import ArticleCardList from "../ArticleCardList/ArticleCardList";
import articleInfo from "../../assets/data/dummyArticleCardInformation";

// path: /

const Home = ({ userProfile }) => {
  console.log(userProfile);
  console.log(userProfile.displayName);

  const displayName = userProfile.displayName || sessionStorage.getItem("displayName");
  
  return (
    <div className="home-container">
      <WelcomeHeader userProfile={userProfile} displayName={displayName} />
      <SearchContainer title="Pathways" pathwaysLink="/pathways" />
      <div className="home-container__header">
        <ContentHeader title="Articles" link="/articles" />
      </div>
      <ArticleCardList articleInfo={articleInfo} />
      <Navigation />
    </div>
  );
};

export default Home;
