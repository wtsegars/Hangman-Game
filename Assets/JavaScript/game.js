const memeChoices = ['Pepe The Frog', 'Harambe', 'Scumbag Steve', 'Bad Luck Brian', 'Change My Mind', 'Pedobear', 'Ultra Instinct Shaggy'];

var numberOfLives = 6;

var choosenMemeText = document.getElementById('choosen-name');
var numberOfGuessesLeft = document.getElementById('guesses-left');
var guessedLetters = document.getElementById('guessed-letters');
var memeChoice = memeChoices[Math.floor(Math.random() * memeChoices.length)];
var userGuess = event.key; 
choosenMemeText.textContent = memeChoice; 

document.onkeypress = function (event) {
    for (let i = 0; i < memeChoices.length; i++) {
        for (let l = 0; l <= memeChoices[i].length; l++) {
            if (userGuess === memeChoices[i][l]) {
                choosenMemeText.textContent = userGuess; 
            }
            else {
                numberOfLives--;
            }

            if (numberOfLives === 0) {
                var loserImg = document.createElement('IMG');
                loserImg.setAttribute('src', '../Images/2u2mf4.jpg');
            }
            if (numberOfLives > 0 && choosenMemeText === memeChoice) {
                alert('Congraulations! You win!');
                alert('Refresh the page to play again.');
                var winnerImg = document.getElementById('winner-img');
                document.createElement('IMG');
                if (i === 'Pepe The Frog') {
                    winnerImg.setAttribute('src', '../Images/pepefroggie.jpg');
                }
                else if (i === 'Harambe') {
                    winnerImg.setAttribute('src', '../Images/d31.jpg');
                }
                else if (i === 'Scumbag Steve') {
                    winnerImg.setAttribute('src', '../Images/c5b.jpg');
                }
                else if (i === 'Bad Luck Brian') {
                    winnerImg.setAttribute('src', '../Images/cab.jpg');
                }
                else if (i === 'Change My Mind') {
                    winnerImg.setAttribute('src', '../Images/0cb.jpg');
                }
                else if (i === 'Pedobear') {
                    winnerImg.setAttribute('src', '../Images/PedoBear.jpg');
                }
                else {
                    winnerImg.setAttribute('src', '../Images/271.jpg');
                }
            }
        }
    }
};
