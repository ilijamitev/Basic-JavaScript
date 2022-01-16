console.log("==================== EXERCISES ====================");
console.log("");
console.log("================== TASK 01 ==================");
// Task 1
//Declare a variable a.
//Assign the variable with the value of 7.
//Declare and asign a variable b with the value of 8.
//Declare a variable c and asign it the value of a + b.
//Print the value in the console.
let a = 7;
let b = 8;
let c = a + b;
console.log(c);




console.log("");
console.log("================== TASK 02 ==================");
// Task 2
//Declare and asign an integer variable.
//Declare and asign a boolean variable.
//Declare and asign a string variable.
//Use the typeof operator to check the types of all assigned variables.
let ab = 10;
let bc = true;
let cd = "";
console.log(typeof ab);
console.log(typeof bc);
console.log(typeof cd);




console.log("");
console.log("================== TASK 03 ==================");
// Task 3
//Declare 2 variables x and y and set them to 10 and 3.
//Declare and asign a variable that would be the result of division of 10 and 3.
//Declare and asign a variable that would be the whole part of the division of 10 and 3.
//Declare and asign a variable that would be the remainder of the division of 10 and 3.
let x = 10;
let y = 3;
let divisionResult = x / y;
console.log(divisionResult);
let divisionWholeNumber = Math.round(divisionResult)
console.log(divisionWholeNumber);
let remainder = x % y;
console.log(remainder);




console.log("");
console.log("================== TASK 04 ==================");
// Task 4
//Declare a variable name.
//Assign the variable to your name.
//Declare and assign a variable lastName with the value of your last name.
//Print Hello, and your name and last name in the console from the previous variables.
let firstName = "ILIJA"
let lastName = "MITEV"
console.log(`Hello ${firstName} ${lastName}`);




console.log("");
console.log("================== TASK 05 ==================");
// Task 5
//Declare two number variables and assign them any number
//Write an if statement that prints the larger one in console
let num111 = 123213;
let num222 = 32424;

if (num111 < num222) {
    console.log(`The larger number is ${num222}`);
}
else {
    console.log(`The larger number is ${num111}`);
}




console.log("");
console.log("================== TASK 06 ==================");
// Task 6
//Declare a variable and assign any number to it
//Write an if statement that finds out if a number is even OR larger than 100
//If it is print in the console: The number is cool!
let var1 = 342;

if (var1 >= 100) {
    console.log("The number is cool!");
}




console.log("");
console.log("================== TASK 07 ==================");
// Task 7
//Write a JavaScript program that will convert denars to euros.
//One euro is 61.5 denars.
function convertCurrency(denars) {
    let euros = denars * 61.5
    return euros
}
console.log(convertCurrency(100));




console.log("");
console.log("================== TASK 08 ==================");
// Task 8
//Declare a variable named day
//Initialize it with some day of the week as string
//Write a switch that prints "I am in SEDC" in console on the days you have classes in sedc
//Print "I am free" in console on all other days
let day = "Monday"

switch (day) {
    case "Monday":
        console.log("I am in SEDC");
        break;
    case "Wednesday":
        console.log("I am in SEDC");
        break;
    default:
        console.log("I am free");
        break;
}




console.log("");
console.log("================== TASK 09 ==================");
// Task 9
//Declare and assign an array of 6 integers. Ex 5,6,15,42.
//Declare and assign an array of strings. Ex Nikola Trajan Dejan
//Print the first value of each array.
//Print the arrays.
//Change the values of the first element in both arrays.
//Assign a value to the 100 th member of the first array.
//Print how many elements the array has?
//What is the value of the 99th element in the array.
//Write an example of push.
//Write an example of pop.
//What is the value of the 1000th element in both arrays?

let arraySix = [1, 2, 3, 4, 5, 6]
let arrayStrings = ["One", "Two", "Three", "Four", "Five", "Six"]
console.log(arraySix[0]);
console.log(arrayStrings[0]);
console.log(arraySix);
console.log(arrayStrings);
arraySix.splice(0, 1, "New")
arrayStrings.splice(0, 1, 33)
arraySix[99] = "100"
console.log(arraySix.length);
console.log(arraySix[99]);
arraySix.push(101)
arraySix.pop()
console.log(`The value is : ${arraySix[1000]}`);
console.log(`The value is : ${arrayStrings[1000]}`);




console.log("");
console.log("================== TASK 10 ==================");
// Task 10
//Write a while loop that counts from 0 to 10.
//The numbers should be printed in the console.
let i = 0;
while (i < 10) {
    i++
    console.log(i);
}




console.log("");
console.log("================== TASK 11 ==================");
// Task 11
//Write a for loop that counts from 1 to 20 but skips every second number.
//The numbers should be printed in the console.
for (let i = 1; i <= 20; i += 2) {
    console.log(i);
}




console.log("");
console.log("================== TASK 12 ==================");
// Task 12
//Write a JavaScript program that will find the sum of all items in the given array,
//make it dynamic, so the result will change if the array is changed.
let arrayOfNumbers = [0, 200, 1, 23, 3, 425, 23, 45, 3, 45, 4]

function sumOfArrayNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}

console.log(sumOfArrayNumbers(arrayOfNumbers));




console.log("");
console.log("================== TASK 13 ==================");
// Task 13
//Write a JavaScript program that will find the sum of all positive numbers in the array.
arrayOfNumbersTwo = [1, -2, 3, 4, -5, -6, 7, -8, -9, 10, 0, -11, -12, 10]

function sumOfPositiveNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sum += array[i]
        }
    }
    return sum
}

console.log(sumOfPositiveNumbers(arrayOfNumbersTwo));




console.log("");
console.log("================== TASK 14 ==================");
// Task 14
//Write javascript program that will take the items from a given array
//and make new aray with the same items in revers order.
randomArray = ['First', 234, 4, 54, 23, 34, 5, 'Last']

function reverseArray(array) {
    let reversedArray = array.reverse()
    return reversedArray
}

console.log(`The initial array is: [${randomArray}] \nThe reversed array is: [${reverseArray(randomArray)}]`);




console.log("");
console.log("================== TASK 15 ==================");
// Task 15
//Write javascript program that will find the average value
//from the all the item values in the given array.
averageArray = [1, 2, 32, 235, 523, 235, 2, 43, 234, -353, 32, 1]

function averageValueArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    let average = sum / array.length
    return average
}

console.log(averageValueArray(averageArray));



console.log("");
console.log("================== TASK 16 ==================");
// Task 16
//Write a function that prints your name in the console

let yourName = "Ilija"

function printName(name) {
    console.log(name);
}

printName(yourName)
printName("Petko")




console.log("");
console.log("================== TASK 17 ==================");
// Task 17
//Write a function that accepts your name as an argument and returns "Hello NAME"
yourNameAgain = "Tijana"

function helloName(name) {
    console.log(`Hello ${name}`)
}

helloName(yourNameAgain)
helloName("Sofija")




console.log("");
console.log("================== TASK 18 ==================");
// Task 18
//Write a function that accepts 2 numbers as arguments and returns the sum of the two
function sumOfTwo(num1, num2) {
    let result = num1 + num2
    return result
}

console.log(sumOfTwo(5, 15));




console.log("");
console.log("================== TASK 19 ==================");
// Task 19
//Write a function that takes a number and returns a message that tells you
//if the number is odd or even

function oddOrEven(num) {
    if (num % 2 === 0) {
        console.log("The number is even");
    }
    else {
        console.log("The number is odd");
    }
}

oddOrEven(-5)




console.log("");
console.log("================== TASK 20 ==================");
// Task 20
//Write a function that takes an array of numbers and returns the number
//of numbers in the array that are even

arrayOfNumbersThree = [234, 3, 34, 43, 5, 64, 35, 375, 3, 2, 3, 4, 8, 8]

function evenNumbersNumber(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            newArray.push(array[i])
        }
    }
    return newArray.length
}

console.log(evenNumbersNumber(arrayOfNumbersThree));




console.log("");
console.log("================== TASK 21 ==================");
// Task 21
//Write an HTML h1 element and select it in javascript by id
let headerOne = document.getElementsByTagName("h1")[0]
console.log(headerOne);




console.log("");
console.log("================== TASK 22 ==================");
// Task 22
//Write two p elements and select them by class
let paragraphsTwo = document.getElementsByClassName("paragraph")
console.log(paragraphsTwo);




console.log("");
console.log("================== TASK 23 ==================");
// Task 23
//Write two h3 elements and select the first one by tag name
let firstThree = document.getElementsByTagName("h3")[0]
console.log(firstThree);




console.log("");
console.log("================== TASK 24 ==================");
// Task 24
//Write a div and inside it write one h1 and 2 p elements
//Select the second p element through the div element
//Hint: You must select the div element and try to find p from there
let secondPInDiv = document.getElementsByTagName("div")[0].lastElementChild
console.log(secondPInDiv);




console.log("");
console.log("================== TASK 25 ==================");
// Task 25
//Write a h1 element with some text inside of it
//Change the text inside the h1 with Javascript
let headingOne = document.querySelector("h1")
headingOne.innerText = `Exercises for everything !!!`
console.log(headingOne);




console.log("");
console.log("================== TASK 26 ==================");
// Task 26
//Write an ul element in HTML
//In the ul element add 5 new li elements with Javascript
let unorderedList = document.getElementsByTagName("ul")[0]
unorderedList.innerHTML = `
<li>List item 1</li>
<li>List item 2</li>
<li>List item 3</li>
<li>List item 4</li>
<li>List item 5</li>
`
console.log(unorderedList);

