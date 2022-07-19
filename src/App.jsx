import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import "./App.scss";
import Routing from "./containers/Routing/Routing";
import { auth } from "./firebase";
const App = () => {
  const [userToken, setUserToken] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, authenticatedUser => {
      console.log(authenticatedUser);
      if (authenticatedUser) {
        setUserToken(authenticatedUser);
      } else {
        setUserToken(null);
      }
    });
  }, []);

  return (
    <div className="App">
      <Routing userToken={userToken} setUserToken={setUserToken}/>
    </div>
  );
};

export default App;
