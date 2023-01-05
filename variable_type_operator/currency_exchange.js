let inputNumber = document.getElementById('inputNumber');

let result1 = document.getElementById("result")
let selectFrom = document.getElementById("selectFrom")
let selectTo = document.getElementById("selectTo")

// step 1
inputNumber.addEventListener('input',handleData)

// step 2
function handleData(ev){
    let doMath;
    let theInput = ev.target
    console.log(typeof ev)
    console.log(typeof ev.target)
    console.log(theInput.value, typeof theInput.value)
    doMath = parseInt(theInput.value) * 10
    result1.textContent = doMath
}


function result(){
    let input = inputNumber.value;

    result1.innerHTML = parseInt(input * 23000)
}
