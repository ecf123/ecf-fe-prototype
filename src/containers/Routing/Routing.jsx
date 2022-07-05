import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import userProfile from "../../assets/data/dummyUserData";
import PathwaysMenu from "../PathwaysMenu/PathwaysMenu";
import Marketplace from "../Marketplace/Marketplace";
import CourseOverview from '../CourseOverview/CourseOverview';
import ArticleIndex from '../ArticleIndex/ArticleIndex';
import React from 'react'
import LessonOverview from '../LessonOverview/LessonOverview';
import MarketplaceIndex from '../MarketplaceIndex/MarketplaceIndex';
import PathwayOverview from '../PathwayOverview/PathwayOverview';
import SignIn from '../SignIn/SignIn';
import Splash from '../Splash/Splash';
import CreateAccount from '../CreateAccount/CreateAccount';
import Articles from '../Articles/Articles';
import SkillsTree from '../SkillsTree/SkillsTree';
import Quiz from '../Quiz/Quiz';

const Routing = () => {
  return (
    <Router>
    <Routes>
        <Route path="/marketplace" element={<Marketplace userProfile={userProfile} />}/>
        <Route exact path="/marketplace/:marketplaceId"  element={<MarketplaceIndex/>}/>

        <Route path="/pathways" element={<PathwaysMenu/>}/>
        <Route exact path="/pathways/:pathwayId" element={<PathwayOverview/>}/>
        <Route exact path="/pathways/:pathwayId/skills-tree" element={<SkillsTree />}/>

        <Route path="/splash" element={<Splash/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/create-account" element={<CreateAccount/>}/>

        <Route  path="/" element={<Home userProfile={userProfile} />}/>

        <Route path="/articles" element={<Articles userProfile={userProfile} />}/>
        <Route exact path="/articles/:articleId" element={<ArticleIndex/>}/>
        
        <Route exact path="/courses/:courseId" element={<CourseOverview />}/>
        <Route exact path="/lesson/:lessonId" element={<LessonOverview />}/>
        <Route exact path="/quiz/:quizId" element={<Quiz />}/>

        <Route path="/profile" element={<Profile/>}/>

    </Routes>
    </Router>
  )
}

export default Routing