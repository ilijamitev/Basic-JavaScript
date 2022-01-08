/*
HOMEWORK PART 2
Print all numbers from an array and the sum

1. Create an array with numbers

2. Print all numbers from the array in a list element, in a new HTML page

3. Print out the sum of all of the numbers below the list

*** Bonus: Try printing the whole mathematical equasion as well ( 2 + 4 + 5 = 11)
*/

let outputArrayOfNumbers = document.querySelector("div")
let sumOfNumbersOutput = document.getElementById("secondHeader")
let equasionOfSumOutput = document.getElementById("secondDiv")
let arrayOfNumbers = []


function sumOfNumbers(arrayOfNumbers) {
    let sum = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
    }
    return sum
}


for (let i = 5; i > 0; i--) {
    let inputNumbers = prompt(`Please enter five numbers (${i})`)
    if (inputNumbers === "" || inputNumbers === " ") {
        alert("Please enter a value !")
        i++
    }
    else if (inputNumbers === null) {
        break
    }
    else {
        inputNumbers = Number(inputNumbers)
        if (isNaN(inputNumbers) || inputNumbers === Infinity || inputNumbers === -Infinity) {
            alert("Please enter a valid number")
            i++
        }
        else if (typeof inputNumbers === "number") {
            arrayOfNumbers.push(inputNumbers)

            outputArrayOfNumbers.innerHTML = `<ul>
                        <li>${arrayOfNumbers[0]}</li>
                        <li>${arrayOfNumbers[1]}</li>
                        <li>${arrayOfNumbers[2]}</li>
                        <li>${arrayOfNumbers[3]}</li>
                        <li>${arrayOfNumbers[4]}</li>
                        </ul>`

            equasionOfSumOutput.innerText = `${arrayOfNumbers[0]} + ${arrayOfNumbers[1]} + ${arrayOfNumbers[2]} + ${arrayOfNumbers[3]} + ${arrayOfNumbers[4]} = ${sumOfNumbers(arrayOfNumbers)}`
        }
    }
}


sumOfNumbersOutput.innerText += `  ${sumOfNumbers(arrayOfNumbers)}`
sumOfNumbersOutput.style.color = "darkred";




















