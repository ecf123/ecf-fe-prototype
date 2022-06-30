import Navigation from './components/Navigation/Navigation';
import Test from './components/Test/Test';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element="" />
          <Route path="/Library" element={<Test/>} />
          <Route path="/Branches" element="" />
          <Route path="/Profile" element="" />
        </Routes>
        <Navigation/>
      </div>
    </Router>
  );
};

export default App;
