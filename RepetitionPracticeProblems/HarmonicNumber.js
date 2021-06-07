/**
 * @description Prob_2: Program for Harmonic Number
 **/
 const prompt = require("prompt-sync")();
 const number = parseInt(prompt("Enter the Number:   "));

 let harmonicNumber = 0;
 for(let i = 1; i <= number; i++) {
     harmonicNumber = harmonicNumber + (1/i);
 }
 console.log("nth Harmonic Number = " +harmonicNumber);