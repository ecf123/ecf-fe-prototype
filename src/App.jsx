import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./containers/Home/Home";
import Navigation from './components/Navigation/Navigation';
import Profile from "./containers/Profile/Profile";
import userProfile from "./assets/data/dummyUserData";
import SearchContainer from "./containers/SearchContainer/SearchContainer";
import Button from "./components/Button/Button";
import Pathway from "./containers/Pathway/Pathway";
import Article from "./containers/Article/Article";
import Marketplace from "./containers/Marketplace/Marketplace";
import Splash from "./containers/Splash/Splash";

const App = () => {
  const handleOnClick = () => {
    console.log("Clicked");
  }

  return (
    <Router>
      <div className="App">
      {/* <SearchContainer title="Pathways" />
      <Button
        buttonText="START PATHWAYS"
        buttonType="submit"
        isSecondary={false}
        onClickButton={handleOnClick}
      />
      <Button
        buttonText="SIGN IN"
        buttonType="submit"
        isSecondary={true}
        onClickButton={handleOnClick}
      /> */}

        <Routes>
          <Route exact path="/" element={<Home userProfile={userProfile} />}/>
          <Route path="/splash" element={<Splash/>} /> 
          <Route path="/library" element="" />
          <Route path="/pathway" element={<Pathway userProfile={userProfile}/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/market-place" element={<Marketplace userProfile={userProfile} />}/>
          <Route path="/article" element={<Article userProfile={userProfile} />}/>
        </Routes>
        {/* <Navigation/> */}
      </div>
    </Router>
  );
};

export default App;
