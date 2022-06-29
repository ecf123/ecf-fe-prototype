import NavBar from "./components/NavBar/NavBar";
import Test from "./components/Test/Test";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
const App = () => {
  return (

    <Router>
      
    <div className="App">
    
      <NavBar/>
    <Routes>
<Route path="/" element=""/>
<Route path="/Resources" element={<Test/>}/>
<Route path="/Learning" element=""/>
<Route path="/Profile" element=""/>
    </Routes>
    </div>
    </Router>
  );
};

export default App;
