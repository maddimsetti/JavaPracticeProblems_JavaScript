/**
 * @description Prob_5:Program That Computes a factorial of anumber taken as input
 **/
 const prompt = require("prompt-sync")();
 const number = parseInt(prompt("Enter the Number:   "));
 
 for(let i = 2; i <= number; i++) {
     if ((n % i) == 0) {
         isPrime = 1;
         for(let j = 2; j <= i/2; j++) {
             if (i % j ==0) {
                 isPrime = 0;
                 break;
             }
         }
         if (isPrime == 1) {
             console.log("The Prime Factors are:" +i);
         }
     }
 }