/**
 * @description Prob_2: Read a Number and Display the WeekDay
 **/
 const prompt = require("prompt-sync")();
 const number = parseInt(prompt("Enter the Number in Between 1 to 7:   "));

 switch(number) {
     case 1:
         console.log("Sunday");
         break;
     case 2:
         console.log("MONDAY");
         break;
     case 3:
         console.log("TUESDAY");
         break;
     case 4:
         console.log("WEDNESDAY");
         break;
     case 5:
         console.log("THURSDAY");
         break;
     case 6:
         console.log("FRIDAY");
         break;
     case 7:
         console.log("SATURDAY");
         break;
     default:
         console.log("INVALID NUMBER");                            
 }