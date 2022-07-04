import "./App.scss";
import Navigation from './components/Navigation/Navigation';
import Routing from "./containers/Routing/Routing";
import { BrowserRouter as Router} from 'react-router-dom';

const App = () => {
  const handleOnClick = () => {
    console.log("Clicked");
  }

  return (
      <Router>
        <div className="App">
          <Routing/>
          <Navigation/>
        </div>
      </Router>
  );
};

export default App;
