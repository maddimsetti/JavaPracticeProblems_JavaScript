/**
 * @description Prob_3: Program that takes a input and determines if the number is a prime
 **/
 const prompt = require("prompt-sync")();
 const number = parseInt(prompt("Enter a PositiveNumber:   "));
 let isPrime = true;

 if(number == 1) {
     console.log("1 is neither Prime nor Composite Number");
 } else if (number > 1) {
     //looping through 2 to number
     for(let i = 2; i < number; i++) {
         if (number % i == 0) {
             isPrime = false;
             break;
         }
     }
     if (isPrime) {
         console.log(number +" is a Prime Number");
     } else {
         console.log(number + " is a Not Prime Number");
     }
 }
 //check if number is less than 1 
 else {
     console.log("The Number is not a Prime Number");
 }