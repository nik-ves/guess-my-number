const checkBtn = document.querySelector('.check');

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

const log = () => {
    const inputFieldValue = Number(document.querySelector('.guess').value); 
    const secretNumberBox = document.querySelector('.number');
    const scoreField = document.querySelector('.score');
    
    let message = document.querySelector('.message');

    // number guessing logic
    if (!inputFieldValue) { // if nothing is entered in input field
        message.textContent = 'No number!'; 
    } else if ( inputFieldValue === secretNumber) { // if number is correct
        message.textContent = 'Correct number!';
        document.body.style.backgroundColor = '#60b347';
        secretNumberBox.textContent = secretNumber;
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

checkBtn.addEventListener('click', log);
