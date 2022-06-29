import NavBar from './components/NavBar/NavBar';
import Test from './components/Test/Test';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Button from "./components/Button/Button";
const App = () => {
  const handleOnClick = () => {
    console.log(1);
  };

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element="" />
          <Route path="/Library" element={<Test/>} />
          <Route path="/Branches" element="" />
          <Route path="/Profile" element="" />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
