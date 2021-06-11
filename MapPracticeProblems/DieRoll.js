/**
 * @description Problem 1: Find the number that reached maximum times and the one that was for minimum times
 **/
let dieRollMap = new Map();

dieRollMap.set(1,0);
dieRollMap.set(2,0);
dieRollMap.set(3,0);
dieRollMap.set(4,0);
dieRollMap.set(5,0);
dieRollMap.set(6,0);
while (Array.from(dieRollMap.values()).includes(10) != 0) {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let value = dieRollMap.get(randomNumber) + 1;
    dieRollMap.set(randomNumber,value);
}
console.log(dieRollMap);
let minDieValue = Math.min(...dieRollMap.values());
for(let [key,value] of dieRollMap) {
    if (value == 10) {
        console.log("Maximum Times Die Number Rolled = " +key);
    } 
    if (value == minDieValue) {
        console.log("Minimum Times Die Rolled = " +key);
    }
}
