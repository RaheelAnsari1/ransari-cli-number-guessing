#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please Guess a Number Between 1 To 10:"
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulation! you have Guessed The Right Number");
}
else {
    console.log("You Guessed The Wrong Number");
}
