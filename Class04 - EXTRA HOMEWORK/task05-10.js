console.log("============= Extra Homework =============");

// TASK 5

console.log("============= Task 5 =============");

function oldMcdonaldHadAFarm(numOfChickens, numOfCows, numOfPigs) {
    totalNumberOfAnimalLegs = numOfChickens * 2 + numOfCows * 4 + numOfPigs * 4;
    return totalNumberOfAnimalLegs;
}
console.log("Total number of legs: ", oldMcdonaldHadAFarm(2, 2, 2));


// TASK 6

console.log("============= Task 6 =============");

let string1 = prompt("Enter the first string of characters to compare")
let string2 = prompt("Enter the second string of characters to compare")
function compareStringsByLength(string1, string2) {
    if (string1.length === string2.length) {
        return true;
    }
    else {
        return false;
    }
}

if ((string1 === "") || (string1 === null) || (string2 === "") || (string2 === null)) {
    alert("Please enter a string")
}
else {
    alert(`Is the string length of "${string1}" equal to string length of "${string2}" ?\n\n${compareStringsByLength(string1, string2)}`)
}


// TASK 7

console.log("============= Task 7 =============");

let inputWord;
function pluralWords(inputWord) {
    if (inputWord.endsWith("s")) {
        return true
    }
    return false
}
console.log(pluralWords("function"));
console.log(pluralWords("functions"));
console.log(pluralWords("func"));


// TASK 8

console.log("============= Task 8 =============");

function stringComparison(firstString, secondString) {
    if (firstString.toLowerCase() === secondString.toLowerCase()) {
        return true;
    }
    return false;
}

console.log(stringComparison("", "abc"));
console.log(stringComparison("aBcDeF", "ABCDEF"));
console.log(stringComparison("A123b", "a123B"));


// TASK 9

console.log("============= Task 9 =============");

let monthNumber = Number(prompt("Enter a number (1-12) to convert to corresponding month"))

function monthConverter(monthNumber) {
    switch (monthNumber) {
        case 1:
            return "January";
            break;
        case 2:
            return "February";
            break;
        case 3:
            return "March";
            break;
        case 4:
            return "April";
            break;
        case 5:
            return "May";
            break;
        case 6:
            return "June";
            break;
        case 7:
            return "July";
            break;
        case 8:
            return "August";
            break;
        case 9:
            return "September";
            break;
        case 10:
            return "October";
            break;
        case 11:
            return "November";
            break;
        case 12:
            return "December";
            break;
        default:
            return console.log("Month with that number does not exists");
            break;
    }
}
console.log(monthConverter(monthNumber));



// TASK 10

console.log("============= Task 10 =============");

function truthyOrFalsey(input) {
    if ((input === false) || (input === null) || (input === undefined) || (input === 0) || (input === -0) || (isNaN(input)) || (input === "") || (input === '') || (input === ``)) {
        return 0;
    }
    return 1;
}

console.log(truthyOrFalsey(1231231));
console.log(truthyOrFalsey(1 + 1));
console.log(truthyOrFalsey(-NaN));
console.log(truthyOrFalsey(Infinity));
console.log(truthyOrFalsey("  "));
console.log(truthyOrFalsey(12 < 4));
console.log(truthyOrFalsey(12 > NaN));

