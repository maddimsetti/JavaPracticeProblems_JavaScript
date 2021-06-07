/**
 * @description Prob_2: Program that takes day and Month from command line and prints true 
 *              if day of month is between march 20 and june 20 false otherwise
 **/
const prompt = require('prompt-sync')();
const date = prompt("Enter the Date:    ");
const month = prompt("Enter the Month:    ");

let res = false;
let st = 1;
let dlimits = 0;
let combo = 0;
if ((month > 3) && (month < 6)) {
    dlimits = (30 + (month % 2));
    if ((date > 1) && (date < dlimits)) {
        combo = ((month * 100) + date);
        if (combo > 320 && combo < 620) {
            res = true;
            st = 0;
        }
    }
}
console.log("month/date:" +res);

