// ADD YOUR FIREBASE LINKS
var firebaseConfig = {

  apiKey: "AIzaSyB4B-0kQ5Br-HKIPijAU5IXAzZBFb5IV5w",

  authDomain: "kwitter-website-3946e.firebaseapp.com",

  databaseURL: "https://kwitter-website-3946e-default-rtdb.firebaseio.com",

  projectId: "kwitter-website-3946e",

  storageBucket: "kwitter-website-3946e.appspot.com",

  messagingSenderId: "735482580007",

  appId: "1:735482580007:web:971abf67cdf7d011e29202"

};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);
function addUser()
{
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
  purpose : "adding user"
});
}


