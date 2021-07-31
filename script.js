const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;

const log = () => {
    const inputFieldValue = Number(document.querySelector('.guess').value); 
    const secretNumberBox = document.querySelector('.number');
    const scoreField = document.querySelector('.score');
    const highscoreField = document.querySelector('.highscore');
    
    let message = document.querySelector('.message');

    // number guessing logic
    if (!inputFieldValue) { // if nothing is entered in input field
        message.textContent = 'No number!'; 
    } else if ( inputFieldValue === secretNumber) { // if number is correct
        message.textContent = 'Correct number!';
        document.body.style.backgroundColor = '#60b347';
        secretNumberBox.textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            highscoreField.textContent = score;
        }

    } else if (inputFieldValue < secretNumber) { // if number is lower than secret number

        if (score > 1) {
            message.textContent = 'Too low!';
            score--;
            scoreField.textContent = score;
        } else {
            message.textContent = 'You lost!';
            scoreField.textContent = 0;
        }
        
    } else if (inputFieldValue > secretNumber) { // if number is higher than secret number

        if (score > 1) {
            message.textContent = 'Too high!';
            score--;
            scoreField.textContent = score;
        } else {
            message.textContent = 'You lost!';
            scoreField.textContent = 0;
        }
    };
}

const reset = () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    const inputFieldValue = document.querySelector('.guess').value = ''; 
    const scoreField = document.querySelector('.score').textContent = score;
    const secretNumberBox = document.querySelector('.number').textContent = '?';

    let message = document.querySelector('.message').textContent = 'Start guessing!';
    
    document.body.style.backgroundColor = '#222';
}

checkBtn.addEventListener('click', log);
againBtn.addEventListener('click', reset);
