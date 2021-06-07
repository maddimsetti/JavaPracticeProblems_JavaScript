/**
 * @description Prob_4: Simulate A Coin flip and Print out "Heads" or "Tails" accordingly
 **/

let coinFlip = Math.floor(Math.random() * 10) % 2;
if (coinFlip == 0) {
    console.log("HEAD");
} else {
    console.log("TAIL");
}