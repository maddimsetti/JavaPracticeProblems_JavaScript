/**
 * @description Prob_4: Program that takes User Input and does Unit conversion of different Lengths
 **/
 const convert = require('convert-units');
 const prompt = require("prompt-sync")();
 const choice = parseInt(prompt("Enter the choice in between 1 to 4:    "));

 switch(choice) {
     case 1:
         console.log(convert(1).from('ft').to('in'));
         break;
     case 2:
         console.log(convert(1).from('ft').to('m'));
         break;
     case 3:
         console.log(convert(1).from('in').to('ft'));
         break;
     case 4:
         console.log(convert(1).from('m').to('ft'));
         break;
     default:
         console.log("INVALID CHOICE");                
 }