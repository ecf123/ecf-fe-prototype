import "./App.scss";
import Routing from "./containers/Routing/Routing";

const App = () => {
  const handleOnClick = () => {
    console.log("Clicked");
  }

  return (
      
        <div className="App">
          <Routing/>
        </div>
      
  );
};

export default App;
