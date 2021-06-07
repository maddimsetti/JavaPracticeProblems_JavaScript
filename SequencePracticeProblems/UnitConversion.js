/**
 * @description Prob_5a: Unit conversion from inches to feet
 * Param: 1 feet = 12 inches 
 **/
var convert = require('convert-units');
 let result = convert(42).from('in').to('ft');
console.log("The Unit conversion from 42 inches to _ feets is " +result);

/**
 * @description Prob_5b: Unit conversion of Rectangular Plot From feet to Meters
 * Param: 1 foot = 0.3048 then 60feet = 18.288 and 40feet = 12.192 
 **/
let rectangularPlot = (convert(60).from('ft').to('m')) * (convert(40).from('ft').to('m'));
console.log("The Rectangular Plot in squareMeters " +rectangularPlot);

/**
 * @description Prob_5c: Calculate Area of 25 such plots in acres
 **/
let areaOf25Plots = convert(rectangularPlot).from('m2').to('ac');
console.log(areaOf25Plots);