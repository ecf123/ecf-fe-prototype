import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import userProfile from "../../assets/data/dummyUserData";
import PathwaysMenu from "../PathwaysMenu/PathwaysMenu";
import Marketplace from "../Marketplace/Marketplace";
import CourseOverview from "../CourseOverview/CourseOverview";
import ArticleIndex from "../ArticleIndex/ArticleIndex";
import React, { useState, useEffect } from "react";
import LessonOverview from "../LessonOverview/LessonOverview";
import MarketplaceIndex from "../MarketplaceIndex/MarketplaceIndex";
import PathwayOverview from "../PathwayOverview/PathwayOverview";
import SignIn from "../SignIn/SignIn";
import Splash from "../Splash/Splash";
import CreateAccount from "../CreateAccount/CreateAccount";
import Articles from "../Articles/Articles";
import SkillsTreePage from "../SkillsTreePage/SkillsTreePage";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import Challenge from "../Challenge/Challenge";
import articleInfo from "../../assets/data/dummyArticleCardInformation";
import MultipleChoiceEndScreen from "../MultipleChoiceEndScreen/MultipleChoiceEndScreen";
import marketData from "../../assets/data/dummyMarketData.js";
import lessonsData from "../../assets/data/dummyLessonOverview.js";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import pathwayOverviewData from "../../assets/data/dummyPathwayData";

const Routing = () => {
  const [userToken, setUserToken] = useState(null);
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    if (userToken && userLoading) {
      setUserLoading(false);
    }
  }, [userToken, userLoading]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authenticatedUser => {
      if (authenticatedUser) {
        setUserToken(authenticatedUser);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoute user={!userToken} />}>
          <Route path={userLoading ? "/" : "splash"} element={<Splash />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Route>
        {/* TODO: user={userToken} WHEN ALL ROUTING IS ADDED */}
        <Route element={<ProtectedRoute user={true} navigateTo={"/"} />}>
          <Route path="/marketplace" element={<Marketplace userProfile={userProfile} marketData={marketData} />} />

          <Route
            path="/marketplace/:marketplaceId"
            element={<MarketplaceIndex userProfile={userProfile} marketData={marketData} />}
          />

          <Route path="/pathways" element={<PathwaysMenu />} />
          <Route
            path="/pathways/:pathwayId"
            element={<PathwayOverview pathwaysData={pathwayOverviewData} userProfile={userProfile} />}
          />
          <Route path="/pathways/:pathwayId/skills-tree" element={<SkillsTreePage />} />

          {!userLoading && <Route path="/" element={<Home userProfile={userToken} />} />}

          <Route path="/articles" element={<Articles userProfile={userProfile} articleInfo={articleInfo} />} />
          <Route path="/articles/:articleId" element={<ArticleIndex articleArray={articleInfo} />} />
          <Route path="/courses/:courseId" element={<CourseOverview dummyPathwayData={pathwayOverviewData} />} />
          <Route
            path="/lesson/:lessonId"
            element={<LessonOverview userProfile={userProfile} lessonData={lessonsData[0]} />}
          />
          <Route path="/challenge/:challengeId" element={<Challenge />} />
          <Route path="/challenge/multiple-choice-end-screen" element={<MultipleChoiceEndScreen />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routing;


