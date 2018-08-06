var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guesses = 10;
var letterUsed = [];
var eachofLetters = null;
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
function countGuesses() {
	document.querySelector("#guesses").innerHTML = "Guesses Left: " + guesses;
}
function farUserGuesses() {
	document.querySelector("#letterUsed").innerHTML = "Your Guesses so far: " + letterUsed.join(' ');
}
countGuesses();
var restart = function() {
	guesses = 10;
	letterUsed = [];
}
document.onkeyup = function(event) {
	guesses--;

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	letterUsed.push(userGuess);
	countGuesses();
	farUserGuesses();

	if (userGuess === computerGuess){
		wins++;
		document.querySelector("#wins").innerHTML = "Wins: " + wins;
		restart();
	} 
	else if (guesses === 0) {
		losses++;
		document.querySelector("#losses").innerHTML = "Losses: " + losses;
		restart();
	}
  };
