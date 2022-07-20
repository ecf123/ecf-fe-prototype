import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import userProfile from '../../assets/data/dummyUserData';
import PathwaysMenu from '../PathwaysMenu/PathwaysMenu';
import Marketplace from '../Marketplace/Marketplace';
import CourseOverview from '../CourseOverview/CourseOverview';
import ArticleIndex from '../ArticleIndex/ArticleIndex';
import React from 'react';
import LessonOverview from '../LessonOverview/LessonOverview';
import MarketplaceIndex from '../MarketplaceIndex/MarketplaceIndex';
import PathwayOverview from '../PathwayOverview/PathwayOverview';
import SignIn from '../SignIn/SignIn';
import Splash from '../Splash/Splash';
import CreateAccount from '../CreateAccount/CreateAccount';
import Articles from '../Articles/Articles';
import SkillsTreePage from '../SkillsTreePage/SkillsTreePage';
import Challenge from '../Challenge/Challenge';
import card from '../../assets/data/dummyPathwayData';
import articleInfo from '../../assets/data/dummyArticleCardInformation';
import marketData from '../../assets/data/dummyMarketData.js';

const Routing = ({ userToken }) => {
  // eslint-disable-next-line no-unused-vars

  const preAuthPages = (
    <>
      <Route path="/splash" element={<Splash />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="*" element={<Navigate to="/splash" />} />
    </>
  );

  const AuthPages = (
    <>
      <Route
        path="/marketplace"
        element={<Marketplace userProfile={userProfile} />}
      />
      <Route
        path="/marketplace/:marketplaceId"
        element={<MarketplaceIndex marketData={marketData} />}
      />

      <Route path="/pathways" element={<PathwaysMenu />} />
      <Route
        path="/pathways/:pathwayId"
        element={<PathwayOverview card={card} userProfile={userProfile} />}
      />
      <Route
        // TEMPORARY PATH FOR DEMO -v
        path="/pathways/skills-tree"
        // THIS IS THE ACTUAL PATH -v
        // path="/pathways/:pathwayId/skills-tree"
        element={<SkillsTreePage />}
      />

      {userToken && (
        <Route
          path="/"
          element={
            <Home
              displayName={userToken.displayName}
              userProfile={userProfile}
            />
          }
        />
      )}
      {!userToken && <Route path="/" element={<Splash />} />}

      <Route
        path="/articles"
        element={<Articles articleInfo={articleInfo} />}
      />
      <Route
        path="/articles/:articleId"
        element={<ArticleIndex articleArray={articleInfo} />}
      />

      <Route path="/courses/:courseId" element={<CourseOverview />} />
      <Route path="/lesson/:lessonId" element={<LessonOverview />} />
      <Route path="/challenge/:challengeId" element={<Challenge />} />

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
