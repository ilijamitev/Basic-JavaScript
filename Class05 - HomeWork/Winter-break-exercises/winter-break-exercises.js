console.log("===================== TASK 00 =====================");
/*
Task 0: Create an array
Create a function that takes an number and creates array with all numbers till that number.

Examples
createArray(5) ➞  [1, 2, 3, 4, 5]
createArray(10) ➞  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
createArray(-5) ➞  []
Notes
Don't forget to return the result.
*/
function countingNumbers(number) {
    let arrayOfNumbers = []

    if ((isNaN(number)) || (typeof number !== "number")) {
        console.log("Enter a valid number");
    }
    else if (number > 0) {
        for (let i = 1; i <= number; i++) {
            arrayOfNumbers.push(i)
        }
    }
    else if (number <= 0) {
        arrayOfNumbers = []
    }

    return arrayOfNumbers
}

console.log(countingNumbers(12));
console.log(countingNumbers("This is a string"));
console.log(countingNumbers(-12));



console.log("");
console.log("===================== TASK 01 =====================");
/*
Task 1: Return the First Element in an Array
Create a function that takes an array and returns the first element.

Examples
getFirstValue([1, 2, 3]) ➞ 1
getFirstValue([80, 5, 100]) ➞ 80
getFirstValue([-500, 0, 50]) ➞ -500
Notes
Don't forget to return the result.
The first element in an array always has an index of 0.
Thry using the build in function Shift
*/
function getFirstElement(arrayInput) {
    if (typeof arrayInput !== "number") {
        let firstItem = arrayInput.shift()
        if (firstItem === undefined) {
            return `You have entered an empty array !`
        }
        return `The first item is: "${firstItem}"`
    }

    else {
        console.log("Please enter an array !");
    }
}

console.log(getFirstElement(234324));
console.log(getFirstElement([32, 23, 324, 43]));
console.log(getFirstElement([]));
console.log(getFirstElement(["First item", 2, "Third item", 4]));



console.log("");
console.log("===================== TASK 02 =====================");
/*
Task 2: Reverse an Array
Write a function to reverse an array.

Examples
reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]
reverse([]) ➞ []
Notes
Don't forget to return the result.
*/
let randomArray = ["first item", "second item", "third item"]

function reverseArray(arrayInput) {
    console.log(`The input array is: ${arrayInput}`);
    let reversedArray = arrayInput.reverse()
    return `The reversed array is: ${reversedArray}`
}

// console.log(reverseArray(12312)); // if typeof arrayInput === "number"...
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(reverseArray(randomArray));



console.log("");
console.log("===================== TASK 03 =====================");
/*
Task 3: Find the Index
Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

Examples
search([1, 2, 3, 4], 3) ➞ 2
search([2, 4, 6, 8, 10], 8) ➞ 3
search([1, 3, 5, 7, 9], 11) ➞ -1
Notes
If the item is not present, return -1.
Try using the build in function IndexOf
*/
let arrayOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, Infinity]
let arrayTwo = [true, false, Boolean, Number, NaN, Object]

function searchArray(item, arrayInput) {
    let searchItemIndex = arrayInput.indexOf(item, 0)
    return searchItemIndex
}

console.log(searchArray(3, arrayOne));
console.log(searchArray(0, arrayTwo));



console.log("");
console.log("===================== TASK 04 =====================");
/*
Task 4: Check if an Array Contains a Given Number
Write a function to check if an array contains a particular number.

Examples
check([1, 2, 3, 4, 5], 3) ➞ true
check([1, 1, 2, 1, 1], 3) ➞ false
check([5, 5, 5, 6], 5) ➞ true
check([], 5) ➞ false
Notes
Don't forget to return the result.
*/
let arrayThree = [1, 23, 53, 45, 23, 3, "2", 5]

function checkArrayForNumber(number, array) {
    let checkArray = array.includes(number)
    return checkArray
}

console.log(checkArrayForNumber(3, arrayThree));
console.log(checkArrayForNumber(2, arrayThree));



console.log("");
console.log("===================== TASK 05 =====================");
/*
Task 5: Negate the Array of Numbers
Given an array of numbers, negate all elements contained within.

Negating a positive value -+n will return -n, because all +'s are removed.
Negating a negative value --n will return n, because the first - turns the second minus into a +.
Examples
negate([1, 2, 3, 4]) ➞ [-1, -2, -3, -4]
negate([-1, 2, -3, 4]) ➞ [1, -2, 3, -4]
negate([]) ➞ []
Notes
Don't forget to return the result.
If you get an empty array, return an empty array: []
*/
let arrayFour = [1, 3, 5, 55, -3, 9, -7, -344, 34, 8]
let arrayFive = []

function makeNegativeArray(array) {
    let negativeArray = []
    for (let i = 0; i < array.length; i++) {
        negativeArray.push(array[i] * -1)
    }
    return negativeArray
}

console.log(`The input array is : [${arrayFour}] \nThe negated array is: [${makeNegativeArray(arrayFour)}]`);
console.log(`The input array is : [${arrayFive}] \nThe negated array is: [${makeNegativeArray(arrayFive)}]`);



console.log("");
console.log("===================== TASK 06 =====================");
/*
Task 6: Difference of Max and Min Numbers in Array
Create a function that takes an array and returns the difference between the biggest and smallest numbers.

Examples
diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.
diffMaxMin([44, 32, 86, 19]) ➞ 67
// Smallest number is 19, biggest is 86.
Notes
Don't forget to return the result.
Try using Infinity and -Infinity
*/
let arraySix = [-19, -20, 4, 5, 8, 74, 3, 100, -3, -5, "fsdfsdfds"]
let arraySeven = [3, 32, 234, 32, Infinity, 34, 5, -Infinity]

function differenceMaxMin(array) {

    let max = 0;
    let min = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
        else if (array[i] < min) {
            min = array[i];
        }
    }

    let differenceOfMaxMin = max - min

    return `The Max number is ${max}. \nThe Min number is ${min}. \nThe difference between max and min is ${differenceOfMaxMin}.`
}

console.log(differenceMaxMin(arraySix));
console.log(differenceMaxMin(arraySeven));



console.log("");
console.log("===================== TASK 07 =====================");
/*
Task 7: Multiply by Length
Create a function to multiply all values in an array by the amount of values in that array.

Examples
MultiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]
MultiplyByLength([4, 1, 1]) ➞ ([12, 3, 3])
MultiplyByLength([1, 0, 3, 3, 7, 2, 1]) ➞  [7, 0, 21, 21, 49, 14, 7]
MultiplyByLength([0]) ➞ ([0])
Notes
Don't forget to return the result.
Try using array Length as a multiplier
*/
let arrayEight = [2, 3, 4, 5, 6, 7, 8, 9, 0, 1]

function multiplyArrayByLength(array) {
    let multipliedArray = []
    for (let i = 0; i < array.length; i++) {
        multipliedArray.push(array[i] * array.length)
    }
    return `The initial array is: ${array} \nThe multiplied array is: ${multipliedArray}`
}

console.log(multiplyArrayByLength(arrayEight));



console.log("");
console.log("===================== TASK 08 =====================");
/*
Task 8: Hurdle Jump
Create a function that takes an array of hurdle heights and a jumper's jump height, and determine whether or not the hurdler can clear all the hurdles.

A hurdler can clear a hurdle if their jump height is greater than or equal to the hurdle height.

Examples
hurdleJump([1, 2, 3, 4, 5], 5) ➞ true
hurdleJump([5, 5, 3, 4, 5], 3) ➞ false
hurdleJump([5, 4, 5, 6], 10) ➞ true
hurdleJump([1, 2, 1], 1) ➞ false
Notes
Don't forget to return the result.
Return true for the edge case of an empty array of hurdles. (Zero hurdles means that any jump height can clear them).
*/
let hurdleHeightsOne = [4, 1, 2, 3, 4, 5]
let hurdleHeightsTwo = []

function hurdleJump(hurdleHeights, jumpHeight) {
    for (let i = 0; i < hurdleHeights.length; i++) {
        if (hurdleHeights[i] > jumpHeight) {
            return false
        }
    }
    return true
}

console.log(hurdleJump(hurdleHeightsOne, 5));
console.log(hurdleJump(hurdleHeightsTwo, 5));



console.log("");
console.log("===================== TASK 09 =====================");
/*
Task 9: Generate a Countdown of Numbers in an Array
Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.

Examples
countdown(5) ➞ [5, 4, 3, 2, 1, 0]
countdown(1) ➞ [1, 0]
countdown(0) ➞ [0]
Notes
Don't forget to return the result.

The argument will always be greater than or equal to zero.
*/

function theFinalCountdown(number) {

    if (number < 0) {
        return `Enter a number greather than or equal to zero`
    }

    let theCountdown = []

    for (let i = number; i >= 0; i--) {
        theCountdown.push(i)
    }

    return theCountdown
}

console.log(theFinalCountdown(5));
console.log(theFinalCountdown(20));
console.log(theFinalCountdown(0));
console.log(theFinalCountdown(-5));



console.log("");
console.log("===================== TASK 10 =====================");
/*
Task 10: Odd Up, Even Down
Create a function that goes through the array, incrementing (+1) for each odd number and decrementing (-1) for each even number.

Examples
transform([1, 2, 3, 4, 5]) ➞ [2, 1, 4, 3, 6]
transform([3, 3, 4, 3]) ➞ [4, 4, 3, 4]
transform([2, 2, 0, 8, 10]) ➞ [1, 1, -1, 7, 9]
Notes
Don't forget to return the result.
*/
let arrayNine = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

function oddUpEvenDown(array) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            array[i]--;
        }
        else if (array[i] % 2 === 1) {
            array[i]++;
        }
    }

    return array
}

console.log(oddUpEvenDown(arrayNine));

console.log("");
console.log("===================== THE END =====================");