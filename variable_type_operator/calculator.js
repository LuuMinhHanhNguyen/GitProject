let display = document.querySelector("#display");
let buttons = document.querySelectorAll("button")
let lightGreen = "#90EE90";
let white = "#FFFFFF";

buttons.forEach((item) =>{
    item.onclick = () => {
        item.style.background = lightGreen;
        setTimeout(() =>{ item.style.background = white }, 100)

        if(item.id === "clear"){
            display.value = ""
        }
        else if(display.value !== "" && item.id === "equal"){
            display.value = eval(display.value)
        }
        else if(display.value === "" && item.id === "equal"){
            display.value = "Empty!"
            setTimeout(()=>{display.value = ""}, 200)
        }
        else{
            display.value += item.id
        }
    }
    for(var x = 2; x < 8; x++)
    {
        console.log(x);
    }
})



