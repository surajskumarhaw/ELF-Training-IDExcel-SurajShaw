var ele;

/*------------------ For creating element ----------------------*/

function create() {
    ele = document.createElement("p");
    ele.innerText = "This is a paragraph";
}


/*------------------ For displaying element ----------------------*/

function displayEle() {
    document.body.appendChild(ele);
}


/*------------------ For deleting element ----------------------*/

function deleteEle() {
    ele.remove();
}