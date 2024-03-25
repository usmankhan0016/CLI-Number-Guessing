#! /usr/bin/env node
import inquirer from "inquirer";
// Computer will generate a random number- Done
// User input for guessing number-  Done
// Compare user input with computer generated number- Done
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    { message: "Please guess a number between 1-6: ", type: "number", name: "userGuessedNumber" }
]);
// Conditional statement
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! your gussed the right number");
}
else {
    console.log("Sorry you gussed the wrong number");
}
