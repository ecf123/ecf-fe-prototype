import React from 'react'
import "./Home.scss"
import WelcomeHeader from '../../components/WelcomeHeader/WelcomeHeader'
import SearchContainer from '../../containers/SearchContainer/SearchContainer'
import Navigation from '../../components/Navigation/Navigation'
import ContentHeader from '../../components/ContentHeader/ContentHeader'
import ArticleCardList from '../ArticleCardList/ArticleCardList'
import articleInfo from "../../assets/data/dummyArticleCardInformation";

// path: /

const Home = ({ userProfile, displayName }) => {  
    return (
        <div className='home-container'>
            <WelcomeHeader displayName={displayName} userProfile={userProfile} />
            <SearchContainer title="Pathways"  pathwaysLink="/pathways" />
            <div className='home-container__header'>
                <ContentHeader title="Articles" link="/articles"/>
            </div>
            <ArticleCardList articleInfo={articleInfo}/>
            <Navigation/>
        </div>
    )
}

export default Home;