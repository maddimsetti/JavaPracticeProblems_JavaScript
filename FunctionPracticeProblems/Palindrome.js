/**
 * @description Prob_2: Function to check if the two numbers are Palindromes
 **/
function palindrome() {
    if(originalNumber == number1) {
        console.log("originalNumber and Number1 both numbers are PALINDROME");
    } else {
        console.log("originalNumber and Number1 are NOT A PALINDROME");
    }
}

const prompt = require("prompt-sync")();
let number = parseInt(prompt("Enter the First Number:    "));
let number1 = parseInt(prompt("Enter the Second Number:    "));
let reversedNumber = 0;
let remainder = 0;
let originalNumber = number;
while(number != 0) {
    remainder = number % 10;
    reversedNumber = (reversedNumber * 10) + remainder;
    number = number / 10;
}
palindrome();