let inputNumber = document.getElementById('inputNumber');
let selectFrom = document.getElementById("selectFrom")
let selectTo = document.getElementById("selectTo")
let outputNumber = document.getElementById("result")
function displayResult() {

    let cal;
   if(inputNumber.value !== ""){
       if (selectFrom.value === "USD" && selectTo.value === "VND") {
           cal = parseInt(inputNumber.value) * 23000
           outputNumber.innerText = cal + " " + "VND"
       }
       if (selectFrom.value === "VND" && selectTo.value === "USD") {
           cal = parseInt(inputNumber.value) / 23000
           outputNumber.innerText = cal + " " + "USD"
       }
       if (selectFrom.value === "VND" && selectTo.value === "VND") {
           cal = parseInt(inputNumber.value)
           outputNumber.innerText = cal + " " + "VND"
       }
       if (selectFrom.value === "USD" && selectTo.value === "USD") {
           cal = parseInt(inputNumber.value)
           outputNumber.innerText = `${cal} USD`
       }
   } else {
       outputNumber.innerText = "Please enter your currency amount!"
   }


}

