var secretNumber = 4;

var guess = Number(prompt("Guess a number"));

if (guess === secretNumber) {		//checks if guess is right 
	alert("You got it right!");

} else if (guess > secretNumber) {	//checks if too high
	alert("Too high, try again!");
} else {							//checks if a number is too low
	alert("Number is too low. Guess again!");
}