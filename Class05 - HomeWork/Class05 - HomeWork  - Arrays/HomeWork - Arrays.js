console.log("==================== HOMEWORK 1 ====================")
/*
HOMEWORK #1
1. Create a function called tellStory()
2. The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )
3. The function should return one big string with a story made from the arguments
    Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.
4. The value that is returned from the function should be printed in the console or in alert
*/

let storyArray = ["Bobi", "energetic", "playing football"]

function tellStory(storyArray) {
    let bibiAndBobi = `Helloo friends! This is ${storyArray[0]}. ${storyArray[0]} is a ${storyArray[1]} kid. He and his best friend Bibi are ${storyArray[2]} all day long. Unfortunatelly Bibi always wins.`

    return bibiAndBobi;
}

console.log(tellStory(storyArray));





console.log("==================== HOMEWORK 2 ====================")
/*
HOMEWORK #2
1. Write a function that will take an array of 5 numbers as an argument and return the sum.
2. Print it in the console or in alert
BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result.
*/


let arrayNumbers = [1, 3, 5, 7, 9]
// let arrayNumbers = [1, 3, 5, 7, 9, "afasfasd"]   //Error

function validateNumber(arrayNumbers) {
    for (let i = 0; i < arrayNumbers.length; i++) {
        if (typeof arrayNumbers[i] !== "number") {
            return false
        }
    }
}

function arraySum(arrayNumbers) {
    let sum = 0;
    for (let j = 0; j < arrayNumbers.length; j++) {
        sum += arrayNumbers[j];
    }
    return sum
}


if (validateNumber(arrayNumbers) === false) {
    console.log("ERROR !");
}
else {
    console.log("The sum of the numbers in the array is: ", arraySum(arrayNumbers));
}














