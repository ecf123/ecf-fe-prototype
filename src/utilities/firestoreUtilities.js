import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { collection, addDoc, getDocs, setDoc, doc } from "firebase/firestore";
import { database } from "../firebase";

export const logCollectionIds = async collectionName => {
  const querySnapshot = await getDocs(collection(database, collectionName));
  querySnapshot.forEach(doc => {
    console.log(doc.data().id);
    console.log(doc.data().title);
  });
};

export const logImageUrlFromStorage = async storageLocation => {
  const storage = getStorage();
  const url = await getDownloadURL(ref(storage, storageLocation));
  console.log("---");
  console.log(storageLocation);
  console.log(url);
  console.log("---");
};

export const addCollectionToFirestore = async (collectionName, data) => {
  const docRef = await addDoc(collection(database, collectionName), data);
  console.dir(docRef);
};

export const updateAllInCollectionWithDocId = async collectionName => {
  const querySnapshot = await getDocs(collection(database, collectionName));
  querySnapshot.forEach(async document => {
    const updated = { ...document.data(), id: document.id };
    await setDoc(doc(database, collectionName, document.id), updated);
  });
};

export const updateAllInCollection = async (collectionName, dataObject) => {
  const querySnapshot = await getDocs(collection(database, collectionName));
  querySnapshot.forEach(async document => {
    await setDoc(doc(database, collectionName, document.id), dataObject, { merge: true });
  });
};
