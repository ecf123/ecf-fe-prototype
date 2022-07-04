import Home from "./containers/Home/Home";
import userProfile from "./assets/data/dummyUserData";
import "./App.scss";
import Button from "./components/Button/Button";
import Pathway from "./containers/Pathway/Pathway";
import Article from "./containers/Article/Article";
import Marketplace from "./containers/Marketplace/Marketplace";

const App = () => {
  const handleOnClick = () => {
    console.log(1);
  };

  return (
    <div className="App">
      <Home userProfile={userProfile} />
      <Pathway userProfile={userProfile} />
      <Marketplace userProfile={userProfile} />
      <Article userProfile={userProfile} />

      <SearchContainer title="Pathways" />
      <Button
        buttonText="START PATHWAYS"
        buttonType="submit"
        isSecondary={false}
        onClickButton={handleOnClick}
      />
      <Button
        buttonText="SIGN IN"
        buttonType="submit"
        isSecondary={true}
        onClickButton={handleOnClick}
      />
    </div>
  );
};

export default App;
