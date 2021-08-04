import firebase from "firebase"
var firebaseConfig = {
    apiKey: "AIzaSyBzQnSBSP3m27lZdnCbRjJDVnFEM-GDwNc",
    authDomain: "fayaku-shop.firebaseapp.com",
    projectId: "fayaku-shop",
    storageBucket: "fayaku-shop.appspot.com",
    messagingSenderId: "49723282893",
    appId: "1:49723282893:web:a56a7f14f5bad681f96084",
    measurementId: "G-B5QHD0FCDW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default firebase