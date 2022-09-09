import "./App.scss";
import Routing from "./containers/Routing/Routing";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { database } from "./firebase";

const App = () => {
  /* 
     TODO:
     - DELETE HELPER FUNCTIONS ONCE FIRE STORE IS INTEGRATED
     - DELETE FIRE STORE IMPORTS ONCE INTEGRATED
     */

  // eslint-disable-next-line no-unused-vars
  const logImageUrlFromStorage = async storageLocation => {
    const storage = getStorage();
    const url = await getDownloadURL(ref(storage, storageLocation));
    console.log("---");
    console.log(storageLocation);
    console.log(url);
    console.log("---");
  };

  // eslint-disable-next-line no-unused-vars
  const addCollectionToFirestore = async (collectionName, data) => {
    const docRef = await addDoc(collection(database, collectionName), data);
    console.dir(docRef);
  };

  useEffect(() => {}, []);

  return (
    <div className="App">
      <Routing />
    </div>
  );
};

export default App;
