let sayNo = document.getElementById("no");
let sayYes = document.getElementById("yes");
let display = document.getElementById("output")

function init(){
    sayNo.style.position = 'relative';
    sayNo.style.top = '0px';
    sayNo.style.left = '0px';

}
window.onload = init;
console.log(window.innerHeight);  // 658
console.log(window.innerWidth);  // 1400

function acceptIt(){
 display.innerText = "Thanks for loving me <3"
    setTimeout(()=>{ display.innerText = ""}, 1000)
}
function run(){
    sayNo.style.position = 'absolute';
    sayNo.style.left = Math.floor(Math.random() * 90+ 5) + '%';
    sayNo.style.top = Math.floor(Math.random() * 90 + 5) + '%';
}