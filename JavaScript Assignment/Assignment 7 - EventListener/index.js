/* For Mobile element */ 

var x = document.getElementById('unorderdList');
x.addEventListener("click" , clickMouse);

var a = document.getElementById('submit');
a.addEventListener("click" , getMobile);

var b = document.getElementById("remove");
b.addEventListener("click" , removeMob);


function getMobile(){

    var li = document.createElement('li');
    li.innerText = document.getElementById('mob').value;
    x.appendChild(li);

}
function removeMob() {
    x.removeChild(x.lastElementChild);
}
function clickMouse(){
    for (i = 0; i < x.children.length; i++) {
        x.children[i].onclick = function(){this.remove()};
    }
}


/* For SIM element */ 

var y = document.getElementById('unorderdList2');
y.addEventListener("click" , clickSim);

var c = document.getElementById('submit2');
c.addEventListener("click" , getSim);

var d = document.getElementById("remove2");
d.addEventListener("click" , removeSim);


function getSim(){

    var li = document.createElement('li');
    li.innerText = document.getElementById('s').value;
    y.appendChild(li);
    
}
function removeSim() {
    y.removeChild(y.lastElementChild);
}
function clickSim(){
    for (i = 0; i < y.children.length; i++) {
        y.children[i].onclick = function(){this.remove()};
    }
}
