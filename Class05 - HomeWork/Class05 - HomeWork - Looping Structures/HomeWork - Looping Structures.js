console.log("========== HOMEWORK 1 ==========");
/*
HOMEWORK #1
Write a javascript function that:
When given any array of strings (should work with array with any number of elements)
It will create one big string and return it
Ex:["Hello", "there", "students", "of", "SEDC", "!"]
Result: "Hello there students of SEDC!"
*/
let stringArray = ["I", "am", "not", "a", "good", "story", "teller", "!"]

function concatinateArrays(stringArray) {
    let sentence = "";
    for (let i = 0; i < stringArray.length; i++) {
        sentence += stringArray[i] + " ";
    }
    return sentence
}

console.log(concatinateArrays(stringArray));





console.log("");
console.log("========== HOMEWORK 2 ==========");
/*
HOMEWORK #2
Title: Looping structures

Description: Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, and will add the "\n" new line after every even number otherwise it will add " " empty space.
1  2
3  4
5  6
7  8
*/

for (let i = 1; i <= 10; i++) {
    let oddNumbers = 0;
    let evenNumbers = 0;

    oddNumbers = 2 * i - 1;
    evenNumbers = 2 * i;

    // console.log(i);
    console.log(oddNumbers + "   " + evenNumbers);
}





console.log("");
console.log("========== HOMEWORK 3 ==========");
/*
HOMEWORK #3
Title: Looping structures

Description: Write a JavaScript function that will return:
The sum of the MAX and MIN numbers from an array with numbers
Ex: arr = [3, 5, 6, 8, 11]
Output: Max: 11, Min: 3, Sum: 14

Bonus: Try making the function work if there are other types of items in it
*/
let arrayOfNumbers = [true, NaN, -12, 42, -35, 34, 33, 333, false, "123123", "A string", 52, 623, 314, 713, ""]
let max = 0;
let min = 0;

function sumOfMinAndMax(arrayOfNumbers) {

    for (let i = 0; i < arrayOfNumbers.length; i++) {
        if (typeof arrayOfNumbers[i] === "number") {
            if (max < arrayOfNumbers[i]) {
                max = arrayOfNumbers[i]
            }
            else if (min > arrayOfNumbers[i]) {
                min = arrayOfNumbers[i]
            }
        }
        else {
            console.log(`The value "${arrayOfNumbers[i]}" is not a number !`);
        }
    }
    console.log("The largest number is: ", max);
    console.log("The smallest number is: ", min);

    let sum = max + min;

    return sum
}

console.log(`The sum of MAX and MIN numbers is ${sumOfMinAndMax(arrayOfNumbers)}`);





console.log("");
console.log("========== HOMEWORK 4 ==========");
/*
HOMEWORK #4
Title: Looping structures

Description:Write a javascript function that:
When given 2 arrays of students firstNames and lastNames will return a new array with students full names
Every name should have a numeric value before it
Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]
*/

let firstNames = ["Ilija", "Stefan", "Nikola", "ABV", "Jovan"]
let lastNames = ["Mitev", "Stefanovski", "Nikolovski", 234, "Jovanovski"]

function fullNames(firstNames, lastNames) {
    let orderNumber = 0
    let fullNames = []

    for (let i = 0; i < firstNames.length; i++) {
        if (firstNames.length !== lastNames.length) {
            console.log("Please check your arrays !");
        }
        else if (typeof firstNames[i] !== "string") {
            console.log(`First name "${firstNames[i]}" is not a valid value ! `);
        }
        else if (typeof lastNames[i] !== "string") {
            console.log(`Last name "${lastNames[i]}" is not a valid value !`);
        }
        else {
            orderNumber++;
            fullNames.push(`${orderNumber}. ${firstNames[i]} ${lastNames[i]}`)
        }
    }
    return fullNames
}

console.log(fullNames(firstNames, lastNames));









