/**
 * @description A Program to show Sum of three Integer adds to ZERO
 **/
function findTriplets() {
    for (let i = 0; i < array.length-2; i++) {
        for (let j = i+1; j < array.length-1; j++) {
            for (let k = j+1; k < array.length; k++) {
                q = array[i] + array[j] + array[k];
                if (q == 0) {
                    console.log(array[i]);
                    console.log(array[j]);
                    console.log(array[k]);
                    return;
                }
                else {
                    console.log("Sum of Integer Not Zero")
                }
            }
        }
    }
}

const prompt = require('prompt-sync')();
let array = [parseInt(prompt("Enter the FirstNumber")),parseInt(prompt("Enter the secondNumber")),parseInt(prompt("Enter the ThirdNumber"))]
findTriplets();