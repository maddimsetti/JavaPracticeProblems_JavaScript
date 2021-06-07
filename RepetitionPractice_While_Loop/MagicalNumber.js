/**
 * @description Prob_2: Program for magic Number
 **/
 const prompt = require("prompt-sync")();
 var number = prompt("Enter the Number:  ");

 let sum = 0;
 let rev = 0;
 let number1 = number;
 let re,m,l,p;
 while(number != 0) {
     re = number % 10;
     sum = sum + re;
     number = number / 10;
 }
 m = sum;
 while (m != 0) {
     l = m % 10;
     rev = rev * 10 + l;
     m = m / 10;
 }
 p = sum * rev;
 if (number1 == p) {
     console.log("Given Number is a MAGICAL NUMBER");
 } else {
     console.log("Given Number is NOT A MAGICAL NUMBER");
 }
