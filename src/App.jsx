import LoginPage from "./components/LoginPage/LoginPage";

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


  return (
    <div className="App">
      <LoginPage welcomeMessage="Welcome Back" />
    </div>
  );
};

export default App;
