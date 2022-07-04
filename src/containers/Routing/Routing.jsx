import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import userProfile from "../../assets/data/dummyUserData";
import Button from "./../../components/Button/Button";
import PathwaysMenu from "../PathwaysMenu/PathwaysMenu";
import Article from "../Article/Article";
import Marketplace from "../Marketplace/Marketplace";
import Authentication from '../Authentication/Authentication';
import Course from '../Course/Course';

import React from 'react'

const Routing = () => {
  return (
    <Routes>
        <Route path="/marketplace" element={<Marketplace userProfile={userProfile} />}/>
        <Route path="/marketplace/:marketplaceId"  element={<Marketplace/>}/>
        <Route path="/pathways" element={<PathwaysMenu/>}/>
        <Route path="/authentication" element={<Authentication/>}/>
        <Route exact path="/" element={<Home userProfile={userProfile} />}/>
        <Route path="/articles" element={<Article userProfile={userProfile} />}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/courses" element={<Course />}/>
    </Routes>
  )
}

export default Routing