// import {useState} from "react";
import "./App.scss";
import Button from "./components/Button/Button";
import SearchContainer from "./containers/SearchContainer/SearchContainer";
import PathwaysCard from "./components/PathwaysCard/PathwaysCard";

import card from "./assets/data/dummyPathwayData";

const App = () => {
  // useState is to be used in later development
  // const [percentage, setPercentage] = useState(80);
  const percentage = 80;

  const handleOnClick = () => {
    console.log(1);
  };

  return (
    <div className="App">
      <SearchContainer title="Pathways" />
      <Button buttonText="START PATHWAYS" buttonType="submit" isSecondary={false} onClickButton={handleOnClick} />
      <Button buttonText="SIGN IN" buttonType="submit" isSecondary={true} onClickButton={handleOnClick} />

      <PathwaysCard card={card} percentage={percentage} />
    </div>
  );
};
export default App;
