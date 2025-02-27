// Crea una lista di email di invitati ad una festa.
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Si può fare? Certo che si basta ragionare un po’.

// inzialize and add element to the array
const listMail = ['example1@gmail.com', 'example2@gmail.com', 'example3@gmail.com', 'example4@gmail.com', 'example5@gmail.com', 'example6@gmail.com'];
// user input
const inputMail = prompt('Enter your email address');
//inizialize a boolean variable
let checkMail = false;

// iterations of the array(listMail) length
for (let i = 0; i < listMail.length; i++) {

    //check if user input match with one of the listMail element
    if (inputMail === listMail[i]) {

        checkMail = true;
        break;
    }
}

// check the checkMail variable and print the relative statement
if (checkMail) {

    console.log('You can go into the party!');
}
else {

    console.log('You cant go into the party!');
}