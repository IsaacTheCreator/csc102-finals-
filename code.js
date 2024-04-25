// JavaScript for the Craps game

/**
 * This is a function to play the Craps game. It will Generate two random numbers between 1 and 6, display the rolled numbers, calculate the sum, and determine the outcome.
 */
function playCraps() {
    // Display loading message
    document.getElementById("loadingMessage").innerHTML = "Rolling the dice...";

    // Generate random numbers between 1 and 6
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;

    // Display the rolled numbers
    document.getElementById("loadingMessage").innerHTML = `You rolled: ${die1} and ${die2}`;

    // Calculate the sum of the dice rolls
    let sum = die1 + die2;

    // Determine the outcome based on the rules of Craps
    if (sum % 2 === 0) { // Logic error: Checking if sum is even instead of 7 or 11
        document.getElementById("resultMessage").innerHTML = "You won!";
    } else if (die1 === die2 && die1 % 2 === 0) {
        document.getElementById("resultMessage").innerHTML = "CRAPS - You lose!";
    } else {
        document.getElementById("resultMessage").innerHTML = "You pushed!";
    }
}
// My Paragraph Explanation 
// To debug this error, I am using a live Preview extension. When Running the game, I will inspect the JavaScript code in the developer console. By examining the conditions and variable values, I can identify the incorrect logic causing the unexpected result.

// After identifying the error, I will fix it by restoring the condition to check if the sum is 7 or 11 instead of checking if it's divisible by 2.

function displayDate(){
    document.getElementById ('date').innerHTML= Date();
}
const buttonElement  = document.querySelector('button');
buttonElement.addEventListener ('click',function(){
    buttonElement.style.backgroundColor='lightblue';
    alert ('Sucess !')
});