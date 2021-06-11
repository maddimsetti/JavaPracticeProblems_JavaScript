/**
 * @description Problem 1 : A program in the following steps
]                           Generates 10 Random 3 Digit number.
                            Store this random numbers into a array.
                            Then find the 2nd largest and the 2nd smallest element with sorting the array.
                Problem 2 : Extend the above program to sort the array and then find the 2nd largest and the 2nd smallest element.        
 **/
let numbersArr = new Array();

for(let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random()*900)+100;
    numbersArr.push(randomNumber);
}
console.log(numbersArr);

let sortedArray = numbersArr.sort(function(a,b){
    return a - b;});
console.log("Sorted Array: "+sortedArray); 

console.log("The Second Largest Number in the Array : " +numbersArr[8]);
console.log("The Second Smallest Number in the Array : " +numbersArr[1]);

//Find the 2nd largest and the 2nd smallest element without sorting the array.
let secondLargest = numbersArr[0];
let largest = numbersArr[0];
let secondSmallest = numbersArr[0];
let smallest = numbersArr[0];

for(let i = 0; i < numbersArr.length; i++)
{
    if(secondLargest < numbersArr[i])
    {
        if(largest < numbersArr[i])
        {
            secondLargest = largest;
            largest = numbersArr[i] 
        }
        else
        {
            secondLargest = numbersArr[i];
        }
    }

    if(secondSmallest > numbersArr[i])
    {
        if(smallest > numbersArr[i])
        {
            secondSmallest = smallest;
            smallest = numbersArr[i] 
        }
        else
        {
            secondSmallest = numbersArr[i];
        }
    }
}

console.log("Second smallest value is : "+secondSmallest);
console.log("Second largest value is : "+secondLargest);