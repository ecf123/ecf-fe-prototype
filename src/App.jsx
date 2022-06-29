import Home from "./containers/Home/Home";
import userIcon from "./assets/images/profile-picture.png";

const App = () => {
  const userProfile = {
    firstName: "Ellie",
    lastName: "Laken",
    userIcon: userIcon

  }
  
  
  return (
    <div className="App">
      <Home userProfile = {userProfile} />
    </div>
  );
}

export default App;
