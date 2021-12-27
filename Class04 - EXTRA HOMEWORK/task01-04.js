console.log("============= Extra Homework =============");

// TASK 01

function task01() {

    let inputMinutes = Number(prompt("Please enter minutes to convert into seconds"));

    function convertMinutesToSeconds(inputMinutes) {
        let outputSeconds = inputMinutes * 60;
        return outputSeconds
    }

    if (inputMinutes === 0) {
        alert("Please enter a value !")
    }
    else if (isNaN(inputMinutes)) {
        alert("Enter a valid number !")
    }
    else if (inputMinutes < 0) {
        alert("Please enter a positive number !")
    }
    else {
        alert(`${inputMinutes} minutes is equal to ${convertMinutesToSeconds(inputMinutes)} seconds`)
    }
}


// TASK 02

function task02() {
    let inputNumber = prompt("Please enter a number to increment by +1");
    let inputNumberValue;

    function incrementNumber(inputNumberValue) {
        inputNumberValue++;
        return inputNumberValue;
    }

    if (inputNumber === null) {    // if CANCEL - do nothing , works only with string type

    }
    else if (!(inputNumber === "")) {
        inputNumberValue = Number(inputNumber)
        if (isNaN(inputNumberValue)) {
            alert("Enter a valid number")
        }
        else if ((inputNumberValue === Infinity) || (inputNumberValue === -Infinity)) {
            alert("Enter a valid number")
        }
        else if (String(inputNumberValue).length > 16) {   // if is bigger it returns ex. 1.111111111111111e+25
            alert("Your number is too big !")
        }
        else {
            alert(`Your number incremented by +1 equals to ${incrementNumber(inputNumberValue)}`);
        }
    }
    else {
        alert("Please enter a value !")
    }
}


// TASK 03

function task03() {
    let inputHours = Number(prompt("Please enter hours to convert into seconds"));

    function convertHoursToSeconds(inputHours) {
        let outputSeconds = inputHours * 3600;
        return outputSeconds
    }

    if (inputHours === 0) {
        alert("Please enter a value !")
    }
    else if (isNaN(inputHours)) {
        alert("Enter a valid number !")
    }
    else if (inputHours < 0) {
        alert("Please enter a positive number !")
    }
    else {
        alert(`${inputHours} hours is equal to ${convertHoursToSeconds(inputHours)} seconds`)
    }
}


// TASK 04

function task04() {

    let num1 = Number(prompt("Enter your first number:"))
    let num2 = Number(prompt("Enter your second number:"))

    function modulusOfTwoNumbers(num1, num2) {
        let remainderOfNum = num1.toFixed(0) % num2.toFixed(0);
        return remainderOfNum;
    }

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter a number !")
    }
    else if ((num2 === 0) || (num2 === -0)) {
        alert("Cannot divide by zero !")
    }
    else if ((num1 === Infinity) || (num1 === -Infinity) || (num2 === Infinity) || (num2 === -Infinity)) {
        alert("Enter a valid number")
    }
    else if (!(num1 === Math.floor(num1))) {
        alert("You've entered a decimal number. \nPlease enter whole numbers !")
    }
    // we only need positive and negative integers. This is a way to check wether the input number is an integer or a decimal...
    else if (!(num2 === Math.floor(num2))) {
        alert("You've entered a decimal number. \nPlease enter whole numbers !")
    }
    else {
        alert(`The remainder of the division between ${num1} and ${num2} is ${modulusOfTwoNumbers(num1, num2)}`);
    }
}


// START MENU

let selectTaskMenu = prompt("PLEASE SELECT A TASK TO REVIEW :\nFor task 1 type '1'\nFor task 2 type '2'\nFor task 3 type '3'\nFor task 4 type '4'")

if (selectTaskMenu === "1") {
    task01();
}
else if (selectTaskMenu === "2") {
    task02();
}
else if (selectTaskMenu === "3") {
    task03();
}
else if (selectTaskMenu === "4") {
    task04();
}
else {
    alert("PLEASE SELECT A TASK !")
}


