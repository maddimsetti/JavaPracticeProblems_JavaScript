/**
 * @description Prob_2: Read a Number and Display the WeekDay
 **/
 const prompt = require("prompt-sync")();
 const number = prompt("Enter the Number in between 1 to 7  ");

if (number == 1) {
    console.log("SUNDAY");
} else if (number == 2) {
    console.log("MONDAY");
} else if (number == 3) {
    console.log("TUESDAY");
} else if (number == 4) {
    console.log("WEDNESDAY");
} else if (number == 5) {
    console.log("TUESDAY");
} else if (number == 6) {
    console.log("FRIDAY");
} else if (number == 7) {
    console.log("SATURDAY");
} else {
    console.log("INVALID NUMBER");
}