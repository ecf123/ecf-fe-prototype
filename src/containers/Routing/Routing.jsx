import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth, database } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import userProfile from "../../assets/data/dummyUserData";
import PathwaysMenu from "../PathwaysMenu/PathwaysMenu";
import Marketplace from "../Marketplace/Marketplace";
import CourseOverview from "../CourseOverview/CourseOverview";
import ArticleIndex from "../ArticleIndex/ArticleIndex";
import LessonOverview from "../LessonOverview/LessonOverview";
import MarketplaceIndex from "../MarketplaceIndex/MarketplaceIndex";
import PathwayOverview from "../PathwayOverview/PathwayOverview";
import SignIn from "../SignIn/SignIn";
import Splash from "../Splash/Splash";
import CreateAccount from "../CreateAccount/CreateAccount";
import Articles from "../Articles/Articles";
import SkillsTreePage from "../SkillsTreePage/SkillsTreePage";
import Challenge from "../Challenge/Challenge";
import MultipleChoiceEndScreen from "../MultipleChoiceEndScreen/MultipleChoiceEndScreen";
import ProtectedRoute from "../../components/ProtectedRoute/ProtectedRoute";

const Routing = () => {
  const [userToken, setUserToken] = useState(null);
  const [userLoading, setUserLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [marketplaces, setMarketplaces] = useState([]);
  const [pathways, setPathways] = useState([]);

  const getCollectionAddToState = async (collectionName, setState) => {
    const collectionData = await getDocs(collection(database, collectionName));
    const collectionObjects = [];
    collectionData.forEach(doc => {
      collectionObjects.push(doc.data());
    });
    setState(collectionObjects);
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
    if (userToken) {
      getCollectionAddToState("articles", setArticles);
      getCollectionAddToState("marketplace", setMarketplaces);
      getCollectionAddToState("pathways", setPathways);
    }
  }, [userToken]);

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
          <Route path="/marketplace" element={<Marketplace userProfile={userProfile} marketData={marketplaces} />} />

          <Route
            path="/marketplace/:marketplaceId"
            element={<MarketplaceIndex userProfile={userProfile} marketData={marketplaces} />}
          />

          <Route path="/pathways" element={<PathwaysMenu pathways={pathways} />} />
          <Route
            path="/pathways/:pathwayId"
            element={<PathwayOverview pathwayData={pathways} userProfile={userProfile} />}
          />
          <Route path="/pathways/:pathwayId/skills-tree" element={<SkillsTreePage pathways={pathways} />} />

          {!userLoading && (
            <Route path="/" element={<Home userProfile={userToken} articles={articles} pathways={pathways} />} />
          )}

          <Route path="/articles" element={<Articles userProfile={userProfile} articleInfo={articles} />} />
          <Route path="/articles/:articleId" element={<ArticleIndex articleArray={articles} />} />
          <Route path="/:pathwayId/courses/:courseId" element={<CourseOverview />} />
          <Route
            path="/:pathwayId/courses/:courseId/lesson/:lessonId"
            element={<LessonOverview userProfile={userProfile} />}
          />
          <Route path="/:pathwayId/courses/:courseId/challenge/:challengeId" element={<Challenge />} />
          <Route path="/challenge/multiple-choice-end-screen" element={<MultipleChoiceEndScreen />} />
          <Route path="/profile" element={<Profile handleLogoutUser={handleLogoutUser} />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routing;
