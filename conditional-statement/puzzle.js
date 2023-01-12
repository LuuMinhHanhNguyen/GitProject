let images = [
    "https://img.freepik.com/premium-vector/horizontal-shot-mountain-beautiful-scenery-canyon-landscape-background-scene-daytime_722818-112.jpg?w=2000",
    "https://static.vecteezy.com/system/resources/previews/013/417/307/original/horizontal-shot-of-mountain-beautiful-scenery-of-a-canyon-landscape-background-scene-at-daytime-vector.jpg",
    "https://img.freepik.com/premium-vector/horizontal-shot-mountain-beautiful-scenery-canyon-landscape-background-scene-summer-time_722818-116.jpg?w=2000"
];
let firstPic = document.getElementById("pic1");
let secondPic = document.getElementById("pic2");
let thirdPic = document.getElementById("pic3");
let allPics = document.querySelectorAll(".image");
let result = document.getElementById("bingo");
console.log(allPics)

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

allPics.forEach((pic) => {
    pic.onclick = () => {
        pic.src = images[getRandomInt(3)];
        if (firstPic.src === secondPic.src && firstPic.src === thirdPic.src) {
            result.innerText = "Bingo!"
        } else {
            result.innerText = "Find 3 identical pictures"
        }
    }


})


