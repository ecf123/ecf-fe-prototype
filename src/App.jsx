import Home from "./containers/Home/Home";

const App = () => {
  const userProfile = {
    firstName: "Ellie",
    lastName: "Laken"

  }
  
  return (
    <div className="App">
      <Home userProfile = {userProfile} />
    </div>
  );
}

export default App;
