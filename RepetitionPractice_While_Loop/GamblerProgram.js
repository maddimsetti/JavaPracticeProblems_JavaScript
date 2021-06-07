/**
 * @description Prob_4: Program Where A Gambler Starts with Rs100 and place Re1 bet until he/she goes broke
 *                      i.e., no more money to gamble or reaches the goal of Rs.200. 
 **/
let cash = 100;
let goal = 200;
let bet = 1;
let betCount = 0;
let win = 0;
while((cash > 0) && (cash < 200)) {
    let randomNumber = Math.floor(Math.random() * 10) % 2;
    if(randomNumber == 1) {
        cash = cash + (bet * 2);
        win++;
    } else {
        cash = (cash - (bet * 2));
    }
    betCount++;
}
if(cash >= 200) {
    console.log("Gambler Won");
} else {
    console.log("Gambler Loose");
}
console.log("The Number of Times bet: " +betCount);
console.log("The Number of times win: " +win);