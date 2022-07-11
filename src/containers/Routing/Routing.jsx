import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import userProfile from "../../assets/data/dummyUserData";
import PathwaysMenu from "../PathwaysMenu/PathwaysMenu";
import Marketplace from "../Marketplace/Marketplace";
import CourseOverview from "../CourseOverview/CourseOverview";
import ArticleIndex from "../ArticleIndex/ArticleIndex";
import React, {useState} from "react";
import LessonOverview from "../LessonOverview/LessonOverview";
import MarketplaceIndex from "../MarketplaceIndex/MarketplaceIndex";
import PathwayOverview from "../PathwayOverview/PathwayOverview";
import SignIn from "../SignIn/SignIn";
import Splash from "../Splash/Splash";
import CreateAccount from "../CreateAccount/CreateAccount";
import Articles from "../Articles/Articles";
import SkillsTree from "../SkillsTree/SkillsTree";
import { auth, onAuthStateChanged } from "../../firebase";
import Challenge from "../Challenge/Challenge";

const Routing = () => {

  const [user, setUser] = useState({ firstName: "", lastName: "", email: "", password: "" });
  
  const handleInputChange = (event) => {
    setUser(previousState => ({ ...previousState, [event.target.name]: event.target.value }));
  }

  useEffect(() => {
    onAuthStateChanged(auth, (authenticatedUser) => {
      if (authenticatedUser) {
        setUser(authenticatedUser);
      } else {
        setUser(null);
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
        <Route path="/create-account" element={<CreateAccount user={user} handleInputChange={handleInputChange} setUser={setUser} />} />

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
