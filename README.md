# Mail

### Testo
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.

### Soluzione

- creo un array con all' interno delle email
- chiedo all' utente, tramite promt di inserire la sua email
- creo un ciclo che scorra l' array
    - controllo se l' email inserita dall' utente è presente nell' array
        - se è presente
            - l' utente può entrare alla festa
            - esco dal ciclo
        - se non è presente
            - l' utente NON può entrare alla festa

# Dadi

### Testo
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Bonus
Invece di generare il numero random per l'utente, chiedilo con un prompt!

### Soluzione

- creo una variabile per l'utente che generi un numero casuale da 1 a 6(incluso)
- creo una variabile per il computer che generi un numero casuale da 1 a 6(incluso)
- controllo chi fa il numero più alto
    - SE il numero dell' utente > numero del computer
        - utente vince
    - ALTRIMENTI SE il numero del computer > numero dell' utente
        - computer vince
    ALTRIMENTI
        - è un pareggio