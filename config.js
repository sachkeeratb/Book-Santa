import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  // Add your firebase config here
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
