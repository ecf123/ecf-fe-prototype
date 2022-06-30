import Home from "./containers/Home/Home";
import userProfile from "./assets/data/dummyUserData"
import "./App.scss";
import SearchContainer from "./containers/SearchContainer/SearchContainer";
import Button from "./components/Button/Button";

const App = () => {

  const handleOnClick = () => {
    console.log(1);
  };
  

  return (
      <div className="App">
            <Home userProfile = {userProfile} />
            <SearchContainer title="Pathways"/>
          
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
}


export default App;
