/**
 * @description Prob_4: Program that takes a input as range of Numbers as input and 
 *                      output the prime number in that range
 **/
 const prompt = require("prompt-sync")();
 const number1 = parseInt(prompt("Enter a Positive Number from Which PrimeNumber:  "));
 const number2 = parseInt(prompt("to which PrimeNumber will be Executed:   "));

 if(number1 == 1 && number2 == 1) {
     console.log("1 is neither Prime nor Composite Number");
 } else {
     for(let j = number1; j <=number2; j++ ){
         i = 2;
         q = 1;
         while( i < j) {
             q = j % i;
             if ( q == 0) {
                 break;
             } else {
                 i = i + 1;
             }
         }
         if (q != 0) {
             console.log(j);
         }
     }
 }