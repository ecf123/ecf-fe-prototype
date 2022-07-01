import Navigation from './components/Navigation/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import home from "./containers/Home/Home";
import profile from "./containers/Profile/Profile";
import pathways from "./containers/Pathway/Pathway";

const App = () => {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={home} />
          <Route path="/Library" element="" />
          <Route path="/Branches" element={pathways} />
          <Route path="/Profile" element={profile} />
        </Routes>
        <Navigation/>
      </div>
    </Router>
  );
};

export default App;
