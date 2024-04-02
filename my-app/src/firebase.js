// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from './firebase';


const firebaseConfig = {
    apiKey: "AIzaSyC0Zfawu2cdh4Gluwq9skP35Q2isyAXYyI",
    authDomain: "movieverse-20fed.firebaseapp.com",
    projectId: "movieverse-20fed",
    storageBucket: "movieverse-20fed.appspot.com",
    messagingSenderId: "829473455872",
    appId: "1:829473455872:web:e2972546262f8f7f31bde5",
    measurementId: "G-CR4F261RSV"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth =firebase.auth();

  export { auth };
  export default db;