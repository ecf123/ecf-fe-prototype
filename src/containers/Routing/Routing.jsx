import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import SkillsTree from "../SkillsTree/SkillsTree";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import Challenge from "../Challenge/Challenge";

const Routing = () => {

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

  return (
    <Router>
      <Routes>
        <Route
          path="/marketplace"
          element={<Marketplace userProfile={userProfile} />}
        />
        <Route
          path="/marketplace/:marketplaceId"
          element={<MarketplaceIndex />}
        />

        <Route path="/pathways" element={<PathwaysMenu />} />
        <Route path="/pathways/:pathwayId" element={<PathwayOverview />} />
        <Route
          path="/pathways/:pathwayId/skills-tree"
          element={<SkillsTree />}
        />

        <Route path="/splash" element={<Splash />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/create-account" element={<CreateAccount />} />

        <Route path="/" element={<Home userProfile={userProfile} />} />

        <Route
          path="/articles"
          element={<Articles userProfile={userProfile} />}
        />
        <Route path="/articles/:articleId" element={<ArticleIndex />} />

        <Route path="/courses/:courseId" element={<CourseOverview />} />
        <Route path="/lesson/:lessonId" element={<LessonOverview />} />
        <Route path="/challenge/:challengeId" element={<Challenge />} />

        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default Routing;
