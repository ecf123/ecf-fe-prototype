import {useState} from "react";
import "./App.scss";
import Button from "./components/Button/Button";

// TEMPORARY //////////////////
import PathwaysCard from "./components/PathwaysCard/PathwaysCard";

const card = {header: "Financial Forest", topics: "Banking, Investments"};

//////////////////////////////

const App = () => {
  const [percentage, setPercentage] = useState(90);

  const handleOnClick = () => {
    console.log(1);
  };

  return (
    <div className="App">
      <Button buttonText="START PATHWAYS" buttonType="submit" isSecondary={false} onClickButton={handleOnClick} />
      <Button buttonText="SIGN IN" buttonType="submit" isSecondary={true} onClickButton={handleOnClick} />

      <PathwaysCard card={card} percentage={percentage} />
    </div>
  );
};
export default App;
