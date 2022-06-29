// TEMPORARY
import PathwaysCard from "./components/PathwaysCard/PathwaysCard";

const card = {header: "Financial Forest", topics: "Banking, Investments", percentage: 90};

const App = () => {
  return (
    <div className="App">
      <h1>Mark is not a dummy!!</h1>
      <PathwaysCard card={card} />
    </div>
  );
};
export default App;
