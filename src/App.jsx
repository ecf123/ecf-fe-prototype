import "./App.scss";

// TEMPORARY //////////////////
import PathwaysCard from "./components/PathwaysCard/PathwaysCard";

const card = {header: "Financial Forest", topics: "Banking, Investments", percentage: 80};

//////////////////////////////

const App = () => {
  return (
    <div className="App">
      <PathwaysCard card={card} />
    </div>
  );
};
export default App;
