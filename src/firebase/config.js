import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8IChjcEEiDTcBNV4MRxb8iBhkysUOQFo",
  authDomain: "miniblog-889d1.firebaseapp.com",
  projectId: "miniblog-889d1",
  storageBucket: "miniblog-889d1.appspot.com",
  messagingSenderId: "526695703303",
  appId: "1:526695703303:web:5e3614abe059f079c81ba2",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};