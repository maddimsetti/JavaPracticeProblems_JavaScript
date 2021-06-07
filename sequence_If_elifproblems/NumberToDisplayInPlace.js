/**
 * @description Prob_4: Read a Number 1,10,100,1000,etc and display unit, ten, hundred...
 **/
 const prompt = require("prompt-sync")();
 const number = prompt("Enter the Number to dipslay:  ");

 if (number < 10) {
     console.log("The Number is in Unit's Place");
 } else if (number < 100) {
     console.log("The Number is in Tens's Place");
 } else if (number < 1000) {
     console.log("The Number is in Hundred's Place");
 } else if (number < 10000) {
     console.log("The Number is in Thousand's Place");
 } else if (number < 100000) {
     console.log("The number is in Ten Thousands's place");
 }