const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber)
let score = 20;
let highscore = 0;

const checkNumber = () => {
    const inputFieldValue = Number(document.querySelector('.guess').value); 
    const secretNumberBox = document.querySelector('.number');

    const displayMessage = (text) => {
        const message = document.querySelector('.message');
        message.textContent = text;
    };

    const checkScore = () => {
        const scoreField = document.querySelector('.score');

        if (score > 1) {
            score--;
            scoreField.textContent = score;
        } else {
            displayMessage('You lost!');
            scoreField.textContent = 0;
        }
    };

    const checkHighscore = () => {
        const highscoreField = document.querySelector('.highscore');

        if (score > highscore) {
            highscore = score;
            highscoreField.textContent = score;
        }
    };

    if (!inputFieldValue) {
        displayMessage('No number!');
    } else if ( inputFieldValue === secretNumber) {
        displayMessage('Correct number!');
        document.body.style.backgroundColor = '#60b347';
        secretNumberBox.textContent = secretNumber;
        checkHighscore();
    } else if (inputFieldValue !== secretNumber) {
        displayMessage(inputFieldValue > secretNumber ? 'Too high!' : 'Too low!');
        checkScore();
    };
};

const reset = () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    const inputFieldValue = document.querySelector('.guess').value = ''; 
    const scoreField = document.querySelector('.score').textContent = score;
    const secretNumberBox = document.querySelector('.number').textContent = '?';
    const message = document.querySelector('.message').textContent = 'Start guessing!';
    
    document.body.style.backgroundColor = '#222';
};

checkBtn.addEventListener('click', checkNumber);
againBtn.addEventListener('click', reset);
