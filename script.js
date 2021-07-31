const checkBtn = document.querySelector('.check');

const secretNumber = Math.trunc(Math.random() * 20) + 1;

const log = () => {
    const inputFieldValue = Number(document.querySelector('.guess').value); 
    const secretNumberBox = document.querySelector('.number');

    let message = document.querySelector('.message');

    // number guessing logic
    if (!inputFieldValue) { // if nothing is entered in input field
        message.textContent = 'No number!'; 
    } else if ( inputFieldValue === secretNumber) { // if number is correct
        message.textContent = 'Correct number!';
        document.body.style.backgroundColor = '#60b347';
        secretNumberBox.textContent = secretNumber;
    } else if (inputFieldValue < secretNumber) { // if number is lower than secret number
        message.textContent = 'Too low!';
    } else if (inputFieldValue > secretNumber) { // if number is higher than secret number
        message.textContent = 'Too high!';
    }

}

checkBtn.addEventListener('click', log);
