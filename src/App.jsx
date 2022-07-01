<<<<<<< HEAD
import SignIn from "./containers/SignIn/SignIn";
=======
import Home from "./containers/Home/Home";
import userProfile from "./assets/data/dummyUserData"
import "./App.scss";
import SearchContainer from "./containers/SearchContainer/SearchContainer";
import Button from "./components/Button/Button";
>>>>>>> 06b8739ccdf3dbbbfd9dd4f60da1da7a46bd413e

const App = () => {

  const handleOnClick = () => {
    console.log(1);
  };
  


//     return (
//         <div className="App">
//             <SearchContainer title="Pathways"/>
          
//             <Button
//               buttonText="START PATHWAYS"
//               buttonType="submit"
//               isSecondary={false}
//               onClickButton={handleOnClick}
//             />
//             <Button
//               buttonText="SIGN IN"
//               buttonType="submit"
//               isSecondary={true}
//               onClickButton={handleOnClick}
//             />
//         </div>

//     );
// }


<<<<<<< HEAD
  return (
    <div className="App">
      <SignIn welcomeMessage="Welcome Back" />
    </div>
  );
};

=======
>>>>>>> 06b8739ccdf3dbbbfd9dd4f60da1da7a46bd413e
export default App;
