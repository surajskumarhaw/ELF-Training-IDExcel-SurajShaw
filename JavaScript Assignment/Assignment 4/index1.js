/*------------- 1st way -------------*/

// var ele;
// function logIn(){
//     ele = document.createElement("h1");
//     ele.innerText = "Login Page";
//     document.body.appendChild(ele);
// }
// function clearScreen(){
//     ele.style.display = "none";
// }


/*------------- 2nd way -------------*/

// function logIn(){
//     var ele = document.createElement("h1");
//     ele.innerText = "Login Page";
//     document.body.appendChild(ele);
// }
// function clearScreen(){
//     document.body.style.display = "none";
// }


/*------------- 3rd way -------------*/

// function logIn() {
//     document.write("Login Page");
//     var ele = document.createElement("button");
//     ele.innerText = "clear";
//     document.body.appendChild(ele);
//     ele.setAttribute("onclick", "clearScreen()");
// }
// function clearScreen() {
//     document.body.style.display = "none";
// }


/*------------- 4th way -------------*/

var ele;
function logIn(){

    ele = document.createElement("div");

    var ele0 = document.createElement("h1");
    ele0.innerText = "Login Page";
    ele.appendChild(ele0);

    var ele1 = document.createElement("input");
    ele1.setAttribute("placeholder","User Name");
    ele.appendChild(ele1);

    var br = document.createElement("br");
    ele.appendChild(br);

    var ele2 = document.createElement("input");
    ele2.setAttribute("placeholder","Password");
    ele.appendChild(ele2);

    var br1 = document.createElement("br");
    ele.appendChild(br1);

    var ele3 = document.createElement("input");
    ele3.setAttribute("type","submit");
    ele.appendChild(ele3);
    
    document.body.appendChild(ele);
}
function clearScreen(){
    ele.style.display = "none";
}