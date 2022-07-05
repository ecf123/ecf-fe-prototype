import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./containers/Profile/Profile";
import userProfile from "./assets/data/dummyUserData";
import SearchContainer from "./containers/SearchContainer/SearchContainer";
import Button from "./components/Button/Button";
import Pathway from "./containers/Pathway/Pathway";
import Article from "./containers/Article/Article";
import Marketplace from "./containers/Marketplace/Marketplace";

const App = () => {
  return (
    <div className="App">
      <div></div>
    </div>
  );
};

export default App;
