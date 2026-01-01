// Generate a random number between 1 and 5
let randomNumber = Math.floor(Math.random() * 5) + 1;

// Ask the user to guess
let userGuess = prompt("Guess a number between 1 and 5");

// Convert the input to a number
userGuess = Number(userGuess);

// Check the guess
if (userGuess === randomNumber) {
  alert("Well done! You guessed correctly.");
} else if (userGuess > randomNumber) {
  alert("Your guess was too high. The correct number was " + randomNumber);
} else {
  alert("Your guess was too low. The correct number was " + randomNumber);
}
