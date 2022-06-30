import Button from "./components/Button/Button";
const App = () => {
  const handleOnClick = () => {
    console.log(1);
  };

  return (
    <div className="App">
      <h1>Mark is not a dummy!!</h1>
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
