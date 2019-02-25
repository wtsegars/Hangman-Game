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

        // If statement to determine if the userGuess matches memeChoice[i]
            // render the char. to the proper div
        // else
            // render the char. to the proper div
            // decrement the lives
            // render the new lives value to the proper div

        
    //         if (numberOfLives > 0 && choosenMemeText === memeChoice) {
    //             alert('Congraulations! You win!');
    //             alert('Refresh the page to play again.');
    //             var winnerImg = document.getElementById('winner-img');
    //             winnerImg.document.createElement('<img>');
    //             if (i === 'Pepe The Frog') {
    //                 winnerImg.setAttribute('src', 'Assets/Images/pepefroggie.jpg');
    //             }
    //             else if (i === 'Harambe') {
    //                 winnerImg.setAttribute('src', 'Assets/Images/d31.jpg');
    //             }
    //             else if (i === 'Scumbag Steve') {
    //                 winnerImg.setAttribute('src', 'Assets/Images/c5b.jpg');
    //             }
    //             else if (i === 'Bad Luck Brian') {
    //                 winnerImg.setAttribute('src', 'Assets/Images/cab.jpg');
    //             }
    //             else if (i === 'Change My Mind') {
    //                 winnerImg.setAttribute('src', 'Assets/Images/0cb.jpg');
    //             }
    //             else if (i === 'Pedobear') {
    //                 winnerImg.setAttribute('src', 'Assets/Images/PedoBear.jpg');
    //             }
    //             else {
    //                 winnerImg.setAttribute('src', 'Assets/Images/271.jpg');
    //             }
    //         }
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
//var drinkOptions = document.getElementById('drink-options');
//for (let i = 0; i < drinkList.length; i++) {
    //var newElm = document.createElement("p");
    //newElm.textContent = drinkList[i]; 
   //drinkOptions.appendChild(newElm);
  //}
  //