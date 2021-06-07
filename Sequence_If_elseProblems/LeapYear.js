const prompt = require('prompt-sync')();
const year = prompt("Enter the Year(YYYY):    ");

let a = year % 4;
let b = year % 100;
let c = year % 400;
if ((a == 0) && (b != 0) || (c == 0)) {
    console.log("Given Year is LEAP YEAR");
} else {
    console.log("Given Year is NOT A LEAP YEAR");
}