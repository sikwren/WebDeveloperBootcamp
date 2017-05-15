var age = prompt("How old are you?");

if (age < 1) {
	console.log("Invalid age.");
}

else if (age < 18) {
	console.log("Sorry you are not old enough to enter the venue.");
}

else if (age < 21) {
	console.log("You can enter, but you cannot drink.");
}

else {
	console.log("Come on in. You can drink.");
}

if (age === "21") {
	console.log("Happy 21st Birthday!");
}

if ((age % 2) === 1){
 	console.log("You age is odd!");
}

if (age % Math.sqrt(age) === 0) {
	console.log("Your age is a perfect square!");
}
