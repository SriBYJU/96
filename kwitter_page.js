function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

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

  
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";

}
