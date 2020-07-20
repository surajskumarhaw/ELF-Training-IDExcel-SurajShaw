var current = localStorage.getItem("currentUser");
var first = document.getElementById("first");
var last = document.getElementById("last");
var e = document.getElementById("email");

if(current !== null){
    var userData = JSON.parse(current);
    first.innerText = "First Name : "+ userData.firstName;
    last.innerText = "Last Name : " + userData.lastName;
    e.innerText = "Email : " + userData.email;
}


function logout(){
    localStorage.removeItem("current");
    location.href = "/index.html";
}