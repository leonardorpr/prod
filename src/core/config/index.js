import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAcU3tw6i_LhVMV9PpAOAxwUGNRTrDyzQE",
  authDomain: "prod-14758.firebaseapp.com",
  databaseURL: "https://prod-14758.firebaseio.com",
  projectId: "prod-14758",
  storageBucket: "prod-14758.appspot.com",
  messagingSenderId: "630364476458"
};

firebase.initializeApp(config);

export default firebase;
