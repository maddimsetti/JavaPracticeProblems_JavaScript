/**
 * @description Prob_4: Program for Powers of 2 Less Than or equal to 2^n till 256 is reached
 **/
 let powersOfTwo = 1;
 let i = 1;
 while (i != 0) {
     powersOfTwo = Math.pow(2,i);
     console.log(powersOfTwo);
     if (powersOfTwo == 256) {
         break;
     }
     i++;
 }
 
