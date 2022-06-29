import InputField from "./components/InputField/InputField";

const App = () => {
  return (
    <div className="App">
      <InputField
        inputName="input-name"
        inputType="input-type"
        placeholder="Email Address"
        label="label"
      />
    </div>
  );
};

export default App;
