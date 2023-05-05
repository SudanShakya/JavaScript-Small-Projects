'use strict';

// generating random number
let randomNumber = Math.trunc(Math.random()*20) + 1;

let score = 20;
let highscore = 0;

// function expression to display message
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

// Event listener for check which checks the guessed number
document.querySelector('.check').addEventListener('click', function () {
    
    const guess = Number(document.querySelector('.guess').value);

    // when number is not selected
    if(!guess) {
       displayMessage('No number selected!');
    } 
    // when guessed number is Correct
    else if (guess === randomNumber) {
        displayMessage('Correct Guess! Congratulation.');
        document.querySelector('.number').textContent = randomNumber;
        
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').style.borderRadius = '5rem';

        // sets highscore if score is greater than previous value
        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } 
    // when guessed number is incorrect
    else if (guess !== randomNumber) {
        // when score is not less than 1
        if(score > 1) {
            displayMessage(guess > randomNumber ? 'Too high!' : 'Too low!');
            score--; 
            document.querySelector('.score').textContent = score;
        } 
        // when score is less than 1
        else {
            displayMessage('Game Over!');
            document.querySelector('.score').textContent = 0;
        }
    }
});

// Again button functionality
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    randomNumber = Math.trunc(Math.random()*20) + 1;

    // reseting score, message, number and input section
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').style.borderRadius = '0';
});