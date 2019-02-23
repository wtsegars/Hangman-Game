const memeChoices = ['pepe the frog', 'harambe', 'scumbag steve', 'bad luck brian', 'change my mind', 'pedobear', 'ultra instinct shaggy'];

var numberOfLives = 6;

var choosenMemeText = document.getElementById('choosen-name');
var numberOfGuessesLeft = document.getElementById('guesses-left');
var guessedLetters = document.getElementById('guessed-letters');
var memeChoice = memeChoices[Math.floor(Math.random() * memeChoices.length)];

memeChoice.textContent = choosenMemeText;
numberOfLives.appendChild = numberOfGuessesLeft;
document.onkeypress = function (event) {
    var userGuess = event.key; 
    for (let i = 0; i < memeChoice.length; i++) {
        for (let l = 0; l <= memeChoice[i].length; l++) {
            if (userGuess === memeChoice[i][l]) {
                choosenMemeText.textContent = userGuess; 
            }
            else {
                numberOfLives--;
                
            }

            if (numberOfLives === 0) {
                var loserImg = document.createElement('img');
                loserImg.setAttribute('src', 'Assets/Images/2u2mf4.jpg');
                if (event.key === 'spacebar') {
                    location.reload;
                }
            }
            if (numberOfLives > 0 && choosenMemeText === memeChoice) {
                alert('Congraulations! You win!');
                alert('Refresh the page to play again.');
                var winnerImg = document.getElementById('winner-img');
                document.createElement('IMG');
                if (i === 'Pepe The Frog') {
                    winnerImg.setAttribute('src', 'Assets/Images/pepefroggie.jpg');
                }
                else if (i === 'Harambe') {
                    winnerImg.setAttribute('src', 'Assets/Images/d31.jpg');
                }
                else if (i === 'Scumbag Steve') {
                    winnerImg.setAttribute('src', 'Assets/Images/c5b.jpg');
                }
                else if (i === 'Bad Luck Brian') {
                    winnerImg.setAttribute('src', 'Assets/Images/cab.jpg');
                }
                else if (i === 'Change My Mind') {
                    winnerImg.setAttribute('src', 'Assets/Images/0cb.jpg');
                }
                else if (i === 'Pedobear') {
                    winnerImg.setAttribute('src', 'Assets/Images/PedoBear.jpg');
                }
                else {
                    winnerImg.setAttribute('src', 'Assets/Images/271.jpg');
                }
            }
        }
    }
};
//var drinkOptions = document.getElementById('drink-options');
//for (let i = 0; i < drinkList.length; i++) {
    //var newElm = document.createElement("p");
    //newElm.textContent = drinkList[i]; 
   //drinkOptions.appendChild(newElm);
  //}
  //