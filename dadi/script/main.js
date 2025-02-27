// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Bonus
// Invece di generare il numero random per l'utente, chiedilo con un prompt!

// user dice genrator
const userDice = Math.floor(Math.random() * 6 ) + 1;
// computer dice genrator
const computerDice = Math.floor(Math.random() * 6 ) + 1;

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