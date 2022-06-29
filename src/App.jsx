import LoginPage from "./components/LoginPage/LoginPage";

const App = () => {
  const handleOnClick = () => {
    console.log(1);
  };

  return (
    <div className="App">
            <LoginPage welcomeMessage="Welcome Back" />
    </div>
  );
};

export default App;
