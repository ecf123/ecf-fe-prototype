import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import userProfile from "../../assets/data/dummyUserData";
import PathwaysMenu from "../PathwaysMenu/PathwaysMenu";
import Marketplace from "../Marketplace/Marketplace";
import CourseOverview from "../CourseOverview/CourseOverview";
import ArticleIndex from "../ArticleIndex/ArticleIndex";
import React, {useState, useEffect} from "react";
import LessonOverview from "../LessonOverview/LessonOverview";
import MarketplaceIndex from "../MarketplaceIndex/MarketplaceIndex";
import PathwayOverview from "../PathwayOverview/PathwayOverview";
import SignIn from "../SignIn/SignIn";
import Splash from "../Splash/Splash";
import CreateAccount from "../CreateAccount/CreateAccount";
import Articles from "../Articles/Articles";
import SkillsTreePage from "../SkillsTreePage/SkillsTreePage";
import {auth} from "../../firebase";
import {onAuthStateChanged} from "firebase/auth";
import Challenge from "../Challenge/Challenge";
import pathwayOverviewData from "../../assets/data/dummyPathwayData";
import articleInfo from "../../assets/data/dummyArticleCardInformation";
import marketData from "../../assets/data/dummyMarketData.js";
import card from '../../assets/data/dummyPathwayData';
import MultipleChoiceEndScreen from '../MultipleChoiceEndScreen/MultipleChoiceEndScreen';
import lessonsData from '../../assets/data/dummyLessonOverview.js';

const Routing = () => {

const Routing = ({ userToken }) => {
  // eslint-disable-next-line no-unused-vars
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (authenticatedUser) => {
      if (authenticatedUser) {
        setUserToken(authenticatedUser);
      } else {
        setUserToken(null);
      }
    });
  }, []);

  const AuthPages = (
    <>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/marketplace" element={<Marketplace userProfile={userProfile} marketData={marketData} />} />
      <Route path="/marketplace/:marketplaceId" element={<MarketplaceIndex userProfile={userProfile} marketData={marketData} />} />
      <Route path="/pathways" element={<PathwaysMenu />} />
      <Route path="/pathways/:pathwayId" element={<PathwayOverview card={card} userProfile={userProfile} />} />
      <Route path="/pathways" element={<PathwaysMenu />} />
      <Route path="/pathways/:pathwayId" element={<PathwayOverview cardData={pathwayOverviewData} userProfile={userProfile}/>} />
      <Route path="/pathways/:pathwayId/skills-tree" element={<SkillsTreePage />} />

      {userToken && (
        <Route path="/" element={<Home displayName={userToken.displayName} userProfile={userProfile} />} />
      )}
      {!userToken && <Route path="/" element={<Splash />} />}

      <Route path="/articles" element={<Articles userProfile={userProfile} articleInfo={articleInfo} />} />
      <Route path="/articles/:articleId" element={<ArticleIndex articleArray={articleInfo} />} />
      <Route path="/courses/:courseId" element={<CourseOverview dummyPathwayData={dummyPathwayData} />} />
      <Route path="/lesson/:lessonId" element={<LessonOverview userProfile={userProfile} lessonData={lessonsData[0]}/>} />
      <Route path="/challenge/:challengeId" element={<Challenge />} />
      <Route path="/challenge/multiple-choice-end-screen" element={<MultipleChoiceEndScreen/>} />
      <Route path="/profile" element={<Profile />} />
    </>
  );

  return (
    <Router>
      <Routes>{userToken ? AuthPages : preAuthPages}</Routes>
    </Router>
  );
};

export default Routing;