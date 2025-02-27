// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Bonus
// Invece di generare il numero random per l'utente, chiedilo con un prompt!

// user input
const userDice = parseInt(prompt('Enter a number between 1 and 6'));
// computer dice genrator
const computerDice = Math.floor(Math.random() * 6 ) + 1;

// variable for check if user input is valid
const isInputValid = userDice >= 1 && userDice <= 6;

if (isInputValid) {

    //print userDice and computerDice
    console.log('User dice:', userDice);
    console.log('Computer dice:', computerDice);

    if (userDice > computerDice) {

        console.log('You win!');
    }
    else if (computerDice > userDice) {

        console.log('You lose!');
    }
    else {

        console.log('It\'s a tie!');
    }
}
else {

    console.log('The input is not valid. Retry!');
}

