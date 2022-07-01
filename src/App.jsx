import SignIn from "./containers/SignIn/SignIn";

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
      <SignIn welcomeMessage="Welcome Back" />
    </div>
  );
};

export default App;
