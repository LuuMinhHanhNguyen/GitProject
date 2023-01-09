let cat = document.getElementById("cat");

function init() {
    cat.style.position = 'relative';
    cat.style.left = '0px';
    cat.style.top = '0px';
   doReady()
}
window.onload = init;
function moveRight() {
    console.log("here")
    cat.style.left = parseInt(cat.style.left) + 10 + 'px';
}
function moveLeft(){
   cat.style.left = parseInt(cat.style.left) - 10 + 'px';
}

function moveUp(){
    cat.style.top = parseInt(cat.style.top) - 10 + 'px'
}
function moveDown(){
    cat.style.top = parseInt(cat.style.top) + 10 + 'px'
}

function move(evt){
    console.log(evt)
    console.log(evt.keyCode)
    console.log(typeof evt.keyCode)
    let key = evt.keyCode
    switch (key){
        case 37:
            moveLeft();
            break;
        case 39:
            moveRight();
            break;
        case 38:
            moveUp();
            break;
        case 40:
            moveDown();
            break;
    }
}
function doReady(){
    window.addEventListener("keydown",move);
}


