const checkBtn = document.querySelector('.check');

const log = () => {
    const inputFieldValue = Number(document.querySelector('.guess').value); 
    console.log(inputFieldValue);
    let message = document.querySelector('.message');

    // if nothing is entered in input field
    if (!inputFieldValue) {
        message.textContent = 'No number!';
    }
}

checkBtn.addEventListener('click', log);
