/**
 * @description Prob_2: Read a Single Digit Number and Write the number in word
 **/
const prompt = require("prompt-sync")();
const singleDigitNumber = prompt("Enter the Number\n");

if (singleDigitNumber == 0) {
    console.log("ZERO");
} else if (singleDigitNumber == 1) {
    console.log("ONE");
} else if (singleDigitNumber == 2) {
    console.log("TWO");
} else if (singleDigitNumber == 3) {
    console.log("THREE");
} else if (singleDigitNumber == 4) {
    console.log("FOUR");
} else if (singleDigitNumber == 5) {
    console.log("FIVE");
} else if (singleDigitNumber == 6) {
    console.log("SIX");
} else if (singleDigitNumber == 7) {
    console.log("SEVEN");
} else if (singleDigitNumber == 8) {
    console.log("EIGHT");
} else if (singleDigitNumber == 9) {
    console.log("NINE");
} else {
    console.log("INVALID NUMBER");
}
