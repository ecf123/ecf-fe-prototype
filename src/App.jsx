import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {
  
  const handleSearchChange = (event) => {
    console.log(event.target.value)
  }

  return (
    <div className="App">
      <SearchBar handleChange={handleSearchChange}/>
    </div>
  );
}

export default App;
