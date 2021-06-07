/**
 * @description Prob_2: Program for Flip Coin Problem till Either Heads or Tails win 11 times
 **/
 let head = 0;
 let tail = 0;
 while((head < 11) && (tail < 11)) {
     let randomNumber = Math.floor(Math.random() * 2);
     if (randomNumber == 0) {
         console.log("HEAD");
         head++;
     } else {
         console.log("TAIL");
         tail++;
     }
 }
 if (head == 11) {
     console.log("Head Won the Game");
 } else {
     console.log("Tail Won the Game");
 }
 console.log("No Of Heads placed: " +head+ " No Of Tails placed " +tail);