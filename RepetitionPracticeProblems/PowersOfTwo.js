/**
 * @description Prob_1: Program for Prints the Table of the Powers of 2
 **/
 const prompt = require("prompt-sync")();
 const number = parseInt(prompt("Enter the number value:   "));

 for (let i=1; i <= number; i++) {
     console.log(Math.pow(2,i));
 }
