/**
 * @description Prob_1: Unit Conversion Selection.
 **/
function helpUser() {
    let number = parseInt(prompt("Enter the Number:  "));
    switch (number) {
        case 1:
            console.log("The Freezing Point is " +((boilingPoint * (9/5)) + 32));
            break;
        case 2:
            console.log("The Boiling Point is " +((freezingPoint - 32) * (9/5)));
            break;
        default:
            console.log("INVALID INPUT");      
    }
}

const prompt = require("prompt-sync")();
const freezingPoint = prompt("Enter the Freezing Point Between 32 F to 212 F:   ");
const boilingPoint = prompt("Enter the Boiling Point Between 0 C to 100 C:   ");
helpUser();