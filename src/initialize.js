import firebase from 'firebase';

const fbConfig = {
  apiKey: "AIzaSyD2S7DuYSH8BcoNyfs9Dw0SVvSit8Cq63E",
  authDomain: "mad9135-1-2bbd0.firebaseapp.com",
  databaseURL: "https://mad9135-1-2bbd0.firebaseio.com",
  projectId: "mad9135-1-2bbd0",
  storageBucket: "mad9135-1-2bbd0.appspot.com",
  messagingSenderId: "189686879125",
  appId: "1:189686879125:web:7e86f6d1ebf8cf80df9c9c",
  measurementId: "G-2SSB86NKQX"
};
// Initialize Firebase
const Firebase = firebase.initializeApp(fbConfig);

export default Firebase;

// var db = Firebase.firestore();
// var cat = db.collection("categories");

// cat.doc("books").set({ titles: ["Holy Bible", "Robert's React", "Steve's Javascript"] });

// cat.doc("movies").set({ titles: ["The Passion of Christ", "Monty Python", "Life of Briant"] });

// cat.doc("musics").set({ titles: ["I Surrender", "Shape of You", "Perfect"] });
