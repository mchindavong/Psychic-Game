var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
 					   'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var letters = [];


document.onkeyup = function(event) {

	var userGuess = event.key;
  letters.push(userGuess);
  console.log(letters)


	var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

	if (userGuess === computerGuess > 0) {
          wins++;
          guessesLeft--;
        }

      else if (guessesLeft > 0) {
        losses++;
        guessesLeft--;
      }

       var html =
          "<h2>WINS: " + wins + "</h2>" +
          "<h2>LOSSES: " + losses + "</h2>" +
          "<h2>GUESSES LEFT: " + guessesLeft + "</h2>" +
          "<h2>YOUR GUESSES SO FAR: " + userGuess + "," + letters + "</h2>";

          document.querySelector(".game").innerHTML = html;



      if (guessesLeft === 0) {
        document.querySelector(".game").innerHTML = "<h2>YOU GUESSED " + wins + " OUT OF 10 LETTERS</h>" ;
        return

        }

}

