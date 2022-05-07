const colors = ["green","red","rgba(1,122,200)","#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');




btn.addEventListener('click', changeColor);

function changeColor(){
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent= colors[randomNumber];
}


function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
  
}