function set(){

user = document.getElementById("user_name").value ;

localStorage.setItem("user_name",user)
window.alert("Logged in ")

window.location = "kwitter_room.html" ;

}