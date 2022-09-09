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
import { auth, database } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import Challenge from "../Challenge/Challenge";
import MultipleChoiceEndScreen from "../MultipleChoiceEndScreen/MultipleChoiceEndScreen";
import lessonsData from "../../assets/data/dummyLessonOverview.js";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";
import pathwayOverviewData from "../../assets/data/dummyPathwayData";

const Routing = () => {
  const [userToken, setUserToken] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [marketPlaceData, setMarketPlaceData] = useState([]);

  const getArticles = async () => {
    const articleData = await getDocs(collection(database, "articles"));
    const articleObjects = [];
    articleData.forEach(doc => {
      articleObjects.push(doc.data());
    });
    setArticles(articleObjects);
  };

  const getMarketplaceData = async () => {
    const marketplaceData = await getDocs(collection(database, "marketplace"));

    const marketplaceObjects = [];
    marketplaceData.forEach(doc => {
      marketplaceObjects.push(doc.data());
    });
    setMarketPlaceData(marketplaceObjects);
  };

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

  useEffect(() => {
    getMarketplaceData();
    getArticles();
  }, []);

  const handleLogoutUser = () => {
    setUserToken(null);
    setUserLoading(true);
  };

  return (
    <Router>
      <Routes>
        <Route element={<ProtectedRoute user={!userToken} />}>
          <Route path={userLoading ? "/" : "splash"} element={<Splash />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Route>
        <Route element={<ProtectedRoute user={userToken} navigateTo={"/"} />}>
          <Route path="/marketplace" element={<Marketplace userProfile={userProfile} marketData={marketPlaceData} />} />

          <Route
            path="/marketplace/:marketplaceId"
            element={<MarketplaceIndex userProfile={userProfile} marketData={marketPlaceData} />}
          />

          <Route path="/pathways" element={<PathwaysMenu />} />
          <Route
            path="/pathways/:pathwayId"
            element={<PathwayOverview pathwayData={pathwayOverviewData} userProfile={userProfile} />}
          />
          <Route path="/pathways/:pathwayId/skills-tree" element={<SkillsTreePage />} />

          {!userLoading && <Route path="/" element={<Home userProfile={userToken} articles={articles} />} />}

          <Route path="/articles" element={<Articles userProfile={userProfile} articleInfo={articles} />} />
          <Route path="/articles/:articleId" element={<ArticleIndex articleArray={articles} />} />
          <Route path="/courses/:courseId" element={<CourseOverview pathwayData={pathwayOverviewData} />} />
          <Route
            path="/lesson/:lessonId"
            element={<LessonOverview userProfile={userProfile} lessonData={lessonsData[0]} />}
          />
          <Route path="/challenge/:challengeId" element={<Challenge />} />
          <Route path="/challenge/multiple-choice-end-screen" element={<MultipleChoiceEndScreen />} />
          <Route path="/profile" element={<Profile handleLogoutUser={handleLogoutUser} />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routing;
