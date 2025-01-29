// Hangmanbildchen

const hangmanPics = [`
    +---+
    |   |
        |
        |
        |
        |
  =========`, `
    +---+
    |   |
    O   |
        |
        |
        |
  =========`, `
    +---+
    |   |
    O   |
    |   |
        |
        |
  =========`, `
    +---+
    |   |
    O   |
   /|   |
        |
        |
  =========`, `
    +---+
    |   |
    O   |
   /|\\  |
        |
        |
  =========`, `
    +---+
    |   |
    O   |
   /|\\  |
   /    |
        |
  =========`, `
    +---+
    |   |
    O   |
   /|\\  |
   / \\  |
        |
  =========`]

// Array mit zu ratenden Wörtern
const words = ['sternschnuppe', 'bildschirm', 'javascript', 'techstarter', 'schreibtisch', 'pflanze', 'katze', 'fernseher', 'schiff', 'schere'];

let word, guessedWord, attempts, guessedLetters; 
let firstGame = true;

// Funktion um das Spiel zu starten
function startGame() {
    
    // Rausziehen eines beliebigen Wortes
    word = words[Math.floor(Math.random() * words.length)];

    // Das zu ratende Wort verdeckt mit Unterstrichen anzeigen
    guessedWord = [];
    for (let i = 0; i < word.length; i++) {
    guessedWord.push('_');
    }

    // Versuche, initiiert mit 0
    attempts = 0;

    // Bereits verwendete Buchstaben
    guessedLetters = [];
    
    document.getElementById('hangmanPics').textContent = hangmanPics[attempts];
    document.getElementById('word').textContent = guessedWord.join(' ');
    if(firstGame) {
        document.getElementById('message').textContent = 'Willkommen bei Hangman! Rate das Wort! Du hast ' + (6 - attempts) +' Versuche.';
        firstGame = false;
    }
    else {
        document.getElementById('message').textContent = 'Versuchs nochmal! Du hast ' + (6 - attempts) +' Versuche.';
    }
}

startGame();

// Eventlistener für die Eingabe
document.getElementById('letter').addEventListener('input', function () {

    let guess = this.value.toLowerCase();
    setTimeout(() => this.value = '', 1000);

    // Überprüfung ob die Eingabe ein Zeichen lang ist und nur Kleinbuchstaben enthält
    if (!/^[a-z]+$/.test(guess)) {
        document.getElementById('message').textContent = 'Falsche Eingabe! Bitte nur einen Buchstaben eingeben.';
        return;
    }

    // Überprüfung ob Eingabe bereits verwendet wurde
    if (includes(guessedLetters, guess)) {
        document.getElementById('message').textContent = 'Buchstabe bereits verwendet.';
        return;
    }

    // Eingabe bei verwendeten Buchstaben parken
    guessedLetters.push(guess)
    document.getElementById('message').textContent = '';

    // Überprüfung ob Eingabe mit einem Buchstaben aus dem Wort übereinstimmt
    if (includes(word.split(''), guess)) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                guessedWord[i] = guess; // Falls ja, soll der erratene Buchstabe aufgedeckt werden
            }
        }
    }

    // Wenn falsch geraten, dann gibt es einen Abzug beim Versuch
    else {
        attempts++;

        document.getElementById('message').textContent = 'Falscher Buchstabe! Du hast noch ' + (6 - attempts) + ' Versuche.';
    }
    document.getElementById('hangmanPics').textContent = hangmanPics[attempts];
    document.getElementById('word').textContent = guessedWord.join(' ');

    // Wenn keine Versuche mehr übrig, dann wars das :(
    if (attempts === 6) {
        document.getElementById('message').textContent = 'GAME OVER!';
        setTimeout(startGame, 2000);
    }

    // Ansonsten habt ihr gewonnen
    if (!guessedWord.includes('_')) {
        document.getElementById('message').textContent = 'Glückwunsch! Du hast gewonnen!!!';
        setTimeout(startGame, 2000);
    }
});

    //Funktion um zu überprüfen ob ein Array einen Wert enthält
function includes(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
}

