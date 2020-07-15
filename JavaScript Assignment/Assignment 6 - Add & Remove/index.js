var x = document.getElementById('unorderdList');
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


var y = document.getElementById('unorderdList2');
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
