// Import the functions you need from the SDKs you need
import axios from "axios";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

let storage = null

axios.get('https://src.perki-jogja.com/api/firebase-config').then(({ data }) => {
  if (data.success) {
    firebaseConfig.apiKey = data.result.apiKey;
    firebaseConfig.authDomain = data.result.authDomain;
    firebaseConfig.databaseURL = data.result.databaseURL;
    firebaseConfig.projectId = data.result.projectId;
    firebaseConfig.storageBucket = data.result.storageBucket;
    firebaseConfig.messagingSenderId = data.result.messagingSenderId;
    firebaseConfig.appId = data.result.appId;
    firebaseConfig.measurementId = data.result.measurementId;
  }

  const app = initializeApp(firebaseConfig);
  storage = getStorage(app);
})

export { storage }
