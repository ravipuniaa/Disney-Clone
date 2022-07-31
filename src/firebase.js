import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD_Ch1rkgACcp0TxR5ti7eBeGFwRZ2VTTM",
    authDomain: "disneyplusclone-56f02.firebaseapp.com",
    projectId: "disneyplusclone-56f02",
    storageBucket: "disneyplusclone-56f02.appspot.com",
    messagingSenderId: "167087206751",
    appId: "1:167087206751:web:4deed37d7603ada86c46ea"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;
