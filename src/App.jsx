import Navigation from './components/Navigation/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./containers/Home/Home";
import Profile from "./containers/Profile/Profile";
import Pathways from "./containers/Pathway/Pathway";


const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route  path="/Library" element="" />
          <Route  path="/Branches" element={<Pathways/>} />
          <Route  path="/Profile" element={<Profile/>} />
        </Routes>
        <Navigation/>
      </div>
    </Router>
  );
};
export default App;
