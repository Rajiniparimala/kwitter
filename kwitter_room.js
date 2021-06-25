
//ADD YOUR FIREBASE LINKS
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAV30uDNNrx9oID6ii2IAHSQqsK8-lsRIg",
    authDomain: "class-test-ca24c.firebaseapp.com",
    databaseURL: "https://class-test-ca24c-default-rtdb.firebaseio.com",
    projectId: "class-test-ca24c",
    storageBucket: "class-test-ca24c.appspot.com",
    messagingSenderId: "641148199504",
    appId: "1:641148199504:web:7a07ea9fad6045dbdc2755"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  
  firebase.database().ref("/").on('value', function(snapshot) {
     document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
