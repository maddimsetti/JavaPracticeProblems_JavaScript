/**
 * @description Problem 1: Program to generate a birth month of 50 individuals
                           between the year 92 & 93. Find all the individuals having birthdays
                           in the same month. Store it to finally print.
 **/

let monthMap = new Map();
for (month = 1; month <= 12; month++) {
    monthMap.set(month, 0);
}
for (let individuals = 1; individuals <= 50; individuals++) {
    let birthMonth = Math.floor(Math.random() * 12)  + 1;
    count = monthMap.get(birthMonth) + 1;
    monthMap.set(birthMonth, count);
}
console.log(monthMap);