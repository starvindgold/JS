let randomNumber = parseInt(Math.random() * 100 + 1);

const submit =  document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const resultParas = document.querySelector('.resultParas');

const p = document.createElement('p');
const newGameButton = document.createElement('button');

newGameButton.id = 'newGame';
newGameButton.textContent = 'Start New Game';

let prevGuess = [];
let numGuess = 1;
let playGame = true;

submit.addEventListener('click', function(e) {
    e.preventDefault();
    if(!playGame) return;

    const guess = parseInt(userInput.value);
    validateGuess(guess);
})

function validateGuess(guess) {

    if(isNaN(guess) || !Number.isInteger(guess) || !userInput.value.trim()) {
        alert('Please enter a valid number');
    } else if(guess < 1|| guess > 100) {
        alert('Please enter a number between 1 and 100');
    } else if(prevGuess.includes(guess)) {
        alert('You have already guessed that number');
    } else {
        prevGuess.push(guess);
        displayGuess(guess);
        checkGuess(guess);
    }
    
}

function checkGuess(guess) {
    if(guess === randomNumber) {
        displayMessage(`Congratulations! You guessed the number right`);
        endGame();
    } else if (numGuess >10) {
        displayMessage(`Game Over! Random number was ${randomNumber}`);
        endGame();
    } else if(guess < randomNumber) {
        displayMessage(`Your guess is too low`);
    } else {
        displayMessage(`Your guess is too high`);
    }
}


function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
    
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    submit.setAttribute('disabled', '');
    resultParas.appendChild(newGameButton);
    playGame = false;
}

newGameButton.addEventListener('click', (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    lowOrHi.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    submit.removeAttribute('disabled');
    resultParas.removeChild(newGameButton);
    playGame = true;
});





