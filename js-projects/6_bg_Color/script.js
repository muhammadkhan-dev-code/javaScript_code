let body= document.querySelector("body");
let startBtn= document.getElementById("start");
let stopBtn= document.getElementById("stop");

let intervalId;
function updateBackgroundColor(){
    let randomColor= Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor= `#${randomColor}`;
}
startBtn.addEventListener("click", function(){
    intervalId= setInterval(updateBackgroundColor, 1000);
});

stopBtn.addEventListener("click", function(){
    clearInterval(intervalId);
    intervalId= null;

})

/**
 * 
 * //generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);


 */
