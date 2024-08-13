
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBhrWSCesDa6lk-CVQ7iHkPGVjIoebvkL8",
      authDomain: "kwitter-87d3f.firebaseapp.com",
      databaseURL: "https://kwitter-87d3f-default-rtdb.firebaseio.com",
      projectId: "kwitter-87d3f",
      storageBucket: "kwitter-87d3f.appspot.com",
      messagingSenderId: "234802709341",
      appId: "1:234802709341:web:60dbba046d930c7e385eb4"
    };

    firebase.initializeApp(firebaseConfig)
user_info_name = localStorage.getItem("user_name");
document.getElementById('Welcome').innerHTML = "Welcome  " + user_info_name ;

function getData() {
firebase.database().ref("/").on('value', function(snapshot) {
document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;
      //Start code
console.log("listofroomnames" + Room_names);
row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function logout(){

      localStorage.removeItem("user_name")
      window.location ="index.html" ;
}
function addroom(){

      room =  document.getElementById("room_name").value;
      firebase.database().ref("/").child(room).update({
       purpose:"room"    
      });
      localStorage.setItem("roomName",room);

window.location = "kwitter_page.html";


}
function redirectToRoomName(name){

      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";


}