function prime() {
    if(z == 2) {
        console.log("PRIME NUMBER");
    } else {
        console.log("NOT A PRIME NUMBER");
    }
}

const prompt = require("prompt-sync")();
let number = parseInt(prompt("Enter the Number:    "));
let count = 0;
let z = 0;
for(let i = 1; i <= number; i++) {
    if ((number % i) == 0) {
        z = ++count;
    }
}

function palindrome() {
    if(originalNumber == reversedNumber) {
        console.log("originalNumber is a PALINDROME");
    } else {
        console.log("originalNumber is NOT A PALINDROME");
    }
}

let reversedNumber = 0;
let originalNumber = number;
let remainder = 0;
while(number != 0) {
    remainder = number % 10;
    reversedNumber = ((reversedNumber * 10) + remainder);
    number = number / 10;
}

prime();
palindrome();

if ((originalNumber == reversedNumber) && (z == 2)) {
    console.log("Palindrome Number is a also PRIME");
} else {
    console.log("Palindrome is NOT A PRIME");
}
