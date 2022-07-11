import "./App.scss";
import Routing from "./containers/Routing/Routing";
import FilterTag from './components/FilterTag/FilterTag';
const App = () => {
  return (
    <div className="App">
      <Routing />
      <FilterTag/>
    </div>
  );
};

export default App;
