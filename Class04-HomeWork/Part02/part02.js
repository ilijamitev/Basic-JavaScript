console.log("========== HomeWork Part 2 =========");

/*

HOMEWORK PART 2

Write a JavaScript function that will return:

--- Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years

--- Note: Call the function in console to see answer

--- Bonus: Make the same function work for converting dog to human years as well

*/

let humanOrDogConversion = prompt("PLEASE CHOOSE WHAT DO YOU WANT TO CONVERT \n1. For converting human years to dog years please enter 'H' \n2. For converting dog years to human years please enter 'D'")

let humanAge;
let dogsAge;


function convertAge() {
    if (humanAge > 0) {
        let humanToDogAge = humanAge * 7;
        return humanToDogAge
    }
    else if (dogsAge > 0) {
        let dogToHumanAge = dogsAge / 7;
        return dogToHumanAge
    }
}


if (humanOrDogConversion === "H") {
    humanAge = Number(prompt("Enter human years : "))
    if (!(Number(humanAge))) {
        alert("Please enter a valid number !")
    }
    else if (humanAge <= 0) {
        alert("Please enter a number greather than zero !")
    }
    else {
        console.log("Human years: ", humanAge);
        console.log("Dog years: ", convertAge());
        alert(`You have ${(convertAge()).toFixed(1)} dog years !`);
    }
}
else if (humanOrDogConversion === "D") {
    dogsAge = Number(prompt("Enter dog's years : "))
    if (!(Number(dogsAge))) {
        alert("Please enter a valid number !")
    }
    else if (dogsAge <= 0) {
        alert("Please enter a number greather than zero !")
    }
    else {
        console.log("Dog years: ", dogsAge);
        console.log("Human years: ", convertAge());
        alert(`You have ${(convertAge()).toFixed(1)} human years !`);
    }
}
else {
    alert("Please choose an option !")
}






