let radom_number = Math.floor(Math.random() * 100) + 1;
let submitButton = document.querySelector("#subt");
let userInput = document.querySelector("#guessField");
let guessSlot = document.querySelector(".guesses");
let lastResult = document.querySelector(".lastResult");
let lowOrHi = document.querySelector(".lowOrHi");
let remaining = document.querySelector(".remaining");
let startOver = document.querySelector(".resultParas");
let chances = 10;

let paragraph = document.createElement("p");
let prevGuess = [];
let numGuesses = 0;
let playGame = true;

if (playGame) {
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    let user_guess = parseInt(userInput.value);
    validateGuess(user_guess);
  });
}
function validateGuess(guess) {
  if (guess < 1 || guess > 100 || isNaN(guess)) {
    alert(`Please enter a valid number between 1 and 100 Your guess : ${guess}`);
    return false;
  }
  else{
    prevGuess.push(guess);

    displayGuess(guess);
    if (numGuesses >= chances) {
      displayMessage(`Game Over! Random number was ${radom_number}`);
      endGame();
    } else {
      checkGuess(guess);
    }
    

  }
}
function checkGuess(guess) {
  if(guess==radom_number){
    displayMessage(`Congratulations! You guessed it  ${radom_number} & Attempts: ${numGuesses}`);
    endGame();
  }else if (guess < radom_number) {
    displayMessage(`Your guess is Tooo low! Try again.`);
  }else if (guess > radom_number) {
    displayMessage(`Your guess is Tooo high! Try again.`);
  }

  }


function displayGuess(guess) {
    userInput.value = "";
    guessSlot.innerHTML += ` ${guess} `;
    numGuesses++;
    remaining.innerHTML = ` ${chances - numGuesses}`;
    
}
function displayMessage(msg) {
    lowOrHi.innerHTML = `<h2>${msg}</h2>`;

}
function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled", '');
    paragraph.classList.add('button')
    paragraph.innerHTML = `<button id="newGame">Start New Game</button>`;
    startOver.appendChild(paragraph);
    playGame = false;
    newGame();
    



}

function newGame() {
    const newButton= document.querySelector("#newGame");
    newButton.addEventListener("click",(ev)=>{
        radom_number=Math.floor(Math.random()*100+1)
        prevGuess = [];
        numGuesses = 0;
        remaining.innerHTML = ` ${chances - numGuesses}`;
        guessSlot.innerHTML = "";
        lowOrHi.innerHTML = "";
        userInput.removeAttribute("disabled");
        startOver.removeChild(paragraph);
        playGame = true;
    })
}
