/**
 * @description Prob_4: Enter 3 Numbers do Arithmetic Operations
 **/
 const prompt = require("prompt-sync")();
 const a = parseInt(prompt("Enter the value of a:  "));
 const b = parseInt(prompt("Enter the value of b:  "));
 const c = parseInt(prompt("Enter the value of c:  "));

 const firstExpression = a + b * c;
 const secondExpression = a % b + c;
 const thirdExpression = c + a / b;
 const fourthExpression = a * b + c;
 if (firstExpression > secondExpression && firstExpression > thirdExpression && firstExpression > fourthExpression) {
     console.log("firstExpression is Maximum");
 } else if (secondExpression > thirdExpression && secondExpression > fourthExpression) {
     console.log("secondExpression is Maximum");
 } else if (thirdExpression > fourthExpression) {
     console.log("thirdExpression is Maximum");
 } else {
     console.log("fourthExpression is Maximum");
 }

 if (firstExpression < secondExpression && firstExpression < thirdExpression && firstExpression < fourthExpression) {
    console.log("firstExpression is Minimum");
} else if (secondExpression < thirdExpression && secondExpression < fourthExpression) {
    console.log("secondExpression is Minimum");
} else if (thirdExpression < fourthExpression) {
    console.log("thirdExpression is Minimum");
} else {
    console.log("fourthExpression is Minimum");
}
 