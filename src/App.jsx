import SearchContainer from "./containers/SearchContainer/SearchContainer";
import Button from "./components/Button/Button";
import MarketplaceCard from "./components/MarketplaceCard/MarketplaceCard";
import image from "./assets/images/adidas-gift-voucher.svg"
const App = () => {

  const handleOnClick = () => {
    console.log(1);
  };
  


    return (
        <div className="App">
            <MarketplaceCard title = "Adidas gift voucher" score = "10" trophies = "5" img = {image} imgTitle = "adidas gift voucher"/>
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
