const memeChoices = ['pepethefrog', 'harambe', 'scumbagsteve', 'badluckbrian', 'changemymind', 'pedobear', 'ultrainstinctshaggy'];

var numberOfLives = 6;
var totalCorrectCounter = 0;
var choosenMemeText = document.getElementById('choosen-name').textContent;
var numberOfGuessesLeft = document.getElementById('guesses-left');
var guessedLetters = document.getElementById('guessed-letters');
var randomNumber = Math.floor(Math.random() * Math.floor(memeChoices.length));
var hangman = [];
var wrong = [];
var guess = []; 
var memeChoice = memeChoices[randomNumber];
console.log(memeChoice);
for (let i = 0; i < memeChoice.length; i++) {
    hangman.push('_');
}
console.log(hangman);
// memeChoice = choosenMemeText;
numberOfGuessesLeft.textContent = numberOfLives;

// checks guess letter
document.onkeypress = function (event) {
    var userGuess = event.key; 
    
    for (let i = 0; i < memeChoice.length; i++) {
        
        if (userGuess === memeChoice[i]) {
            const name = document.getElementById('choosen-name');
            hangman[i] = userGuess; 
            guess[i] = userGuess
            totalCorrectCounter++;
            name.textContent = hangman.join('');
            console.log(totalCorrectCounter);
        }

    }
    guess.push(event.key);
    guessedLetters.textContent = guess.join(',');
    const val = memeChoice.indexOf(userGuess)
    if (val === -1) {
        numberOfLives--;
        numberOfGuessesLeft.textContent = numberOfLives;
        console.log(numberOfLives);
    }

    console.log(hangman.length);
    console.log(memeChoice.length);
    if (numberOfLives > 0 && totalCorrectCounter === memeChoice.length) {
        winCondition();
    }
    if (numberOfLives === 0) {
        loseCondition();
    }
    function winCondition() {
        var winnerImg = document.getElementById('winner-image');
        alert('Congraulations! You win!');
        alert('Refresh the page to play again.');
        if (memeChoice === 'pepethefrog') {
            var pepe = winnerImg.setAttribute('src', 'Assets/Images/pepefroggie.jpg');
            winnerImg.appendChild(pepe);
            document.body.appendChild(winnerImg);
        }
        else if (memeChoice === 'harambe') {
            var harambe = winnerImg.setAttribute('src', 'Assets/Images/d31/jpg');
            winnerImg.appendChild(harambe);
            document.body.appendChild(winnerImg);
        }
        else if (memeChoice === 'scumbagsteve') {
            var scumbag = winnerImg.setAttribute('src', 'Assets/Images/c5b.jpg');
            winnerImg.appendChild(scumbag);
            document.body.appendChild(winnerImg);
        }
        else if (memeChoice === 'badluckbrian') {
            var brian = winnerImg.setAttribute('src', 'Assets/Images/cab.png');
            winnerImg.appendChild(brian);
            document.body.appendChild(winnerImg);
        }
        else if (memeChoice === 'changemymind') {
            var mind = winnerImg.setAttribute('src', 'Assets/Images/0cb.jpg');
            winnerImg.appendChild(mind);
            document.body.appendChild(winnerImg);
        }
        else if (memeChoice === 'pedobear') {
            var pedobear = winnerImg.setAttribute('src', 'Assets/Images/PedoBear.jpg');
            winnerImg.appendChild(pedobear);
            document.body.appendChild(winnerImg);
        }
        else if (memeChoice === 'ultrainstictshaggy') {
            var shaggy = winnerImg.setAttribute('src', 'Assets/Images/271.jpg');
            winnerImg.appendChild(shaggy);
            document.body.appendChild(winnerImg);
        }
    }
    function loseCondition() {
        var loserImg = document.getElementById('loser-image');
        var loserPic = loserImg.setAttribute("src", "Assets/Images/2u2mf4.jpg");
            loserImg.appendChild(loserPic);
            document.body.appendChild(loserImg);
    }
};
