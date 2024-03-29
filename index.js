#! /usr/bin/env node
import inquirer from "inquirer";
// Printing  a Welcome Message
console.log("\n\t Welcome To \ 'CodeWithYusra\' - CLI Simple Calculator\n");
//  Asking Question from users through inquirer
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "Firstnumber" },
    { message: "Enter Second Number", type: "number", name: "Secondnumber" },
    {
        message: "Select one of the operator to perfom action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// Conditional statement If-Else
if (answer.operator === "Addition") {
    console.log(answer.Firstnumber + answer.Secondnumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.Firstnumber - answer.Secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.Firstnumber * answer.Secondnumber);
}
else if (answer.operator === "Division") {
    console.log(answer.Firstnumber / answer.Secondnumber);
}
else {
    console.log("Invalid Input");
}
