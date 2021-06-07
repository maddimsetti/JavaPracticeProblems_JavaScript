/**
 * @description Prob_5:Program That Computes a factorial of anumber taken as input
 **/
 const prompt = require("prompt-sync")();
 const number = parseInt(prompt("Enter the Number:   "));
 var fact = 1;
 if (number == 0 || number == 1) {
     console.log("The Factorial is  " +number);
 } else {
     for (let i = 1; i <= number; i++) {
         fact = fact * i;
     }
     console.log("The Factorial is  " +fact);
 }