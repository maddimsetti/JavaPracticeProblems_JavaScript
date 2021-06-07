/**
 * @description Prob_4: Program 5 Random 3 Digit values then outputs maximum and minimum
 **/
let randomNumber1 = Math.floor(Math.random() * 900) + 100;
let randomNumber2 = Math.floor(Math.random() * 900) + 100;
let randomNumber3 = Math.floor(Math.random() * 900) + 100;
let randomNumber4 = Math.floor(Math.random() * 900) + 100;
let randomNumber5 = Math.floor(Math.random() * 900) + 100;

const randomNumberList = [randomNumber1,randomNumber2,randomNumber3,randomNumber4,randomNumber5];
const maximum = Math.max(...randomNumberList);
console.log("The Maximum Value of 5Random3Digit values " +maximum);
const minimum = Math.min(...randomNumberList);
console.log("The Minimum Value of 5Random3Digit values " +minimum);