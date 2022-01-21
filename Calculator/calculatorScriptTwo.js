console.log("===================== CALCULATOR APP =====================");

let calculator = document.getElementById("calculator");
let displayScreen = document.getElementById("display-screen");
let calculatorButtons = document.getElementsByTagName("button");
let clearButton = document.getElementById("clear");
let numbers = document.getElementsByClassName("num");
let operators = document.getElementsByClassName("operator");
let equalButton = document.getElementById("equal-sign");
let negationButton = document.getElementById("negation")


let firstNum = "";
let secondNum = "";
let operator;
let result;



// CLEAR FUNCTION

function clear() {
    firstNum = "";
    secondNum = "";
    calculator.removeAttribute("class")
    displayScreen.innerText = "0";
}



// MAKE +/- BUTTON WORK

let negation = false;

negationButton.addEventListener('click', function () {
    negation = true;
    displayScreen.innerText = "-"
})



// ADDING NUMBER

function numberInput() {
    if (result) {
        if (negation === true) {
            firstNum = this.value * -1
            negation = false;
            displayScreen.innerText = firstNum
            result = "";
        } else {
            firstNum = this.value
            displayScreen.innerText = firstNum
            result = "";
        }
    }
    else {
        firstNum += this.value

        for (let i = 0; i < firstNum.length; i++) {
            if (firstNum[i] === "." && firstNum[i + 1] === ".") {
                clear()
            }
        }

        if (firstNum[1] === "0" && firstNum[2] === "0") {
            clear()
        }

        if (negation === true) {
            firstNum *= -1
            negation = false;
            displayScreen.innerText = firstNum
            result = "";
        }

        if (firstNum.length <= 15) {
            firstNum = firstNum
            displayScreen.innerText = firstNum
        }
        else if (firstNum.length > 15) {
            alert(`Can't enter more than 15 digits.`)
        }
    }
}



// ADDING OPERATOR & SAVING NUMBER

function operatorFunction() {
    if (negation === true) {
        operator = this.value
        displayScreen.innerText = operator

        secondNum = (firstNum * -1)
        firstNum = "";
        negation = false;
    }
    else {
        secondNum = firstNum;
        firstNum = "";
        operator = this.value
        displayScreen.innerText = operator
    }
}



// DOING SOME MATHS

function resultFunction() {

    secondNum = Number(secondNum)
    firstNum = Number(firstNum)

    if (negation === true) {
        secondNum = secondNum * -1
        negation = false;
    }

    switch (operator) {
        case "+":
            result = secondNum + firstNum;
            break;

        case "-":
            result = secondNum - firstNum;
            break;

        case "*":
            result = secondNum * firstNum;
            break;

        case "/":
            result = secondNum / firstNum;
            break

        default:
            result = firstNum;
    }

    console.log('num1', secondNum);
    console.log('opr', operator);
    console.log('num2', firstNum);
    console.log('result', result);
    console.log("");


    if (isNaN(result)) {
        result = "Error!";
    } else if (result === Infinity || result === -Infinity) {
        result = "NEVER DIVIDE BY ZERO !\n Click 'C'";
        calculator.setAttribute("class", "twistCalculator");   // add CSS animation by adding class (pre-defined and styled in CSS) in our calculator wrapper element
        console.log(calculator);
    }

    // if (operator !== undefined && secondNum !== 0 && firstNum !== 0 && result !== 0) {
    //     displayScreen.innerText = `${secondNum} ${operator} ${firstNum} = ${result}`
    // }
    displayScreen.innerText = result;       // alternative way ==> displaying only the result, not the whole equation

    secondNum = 0;   // will provide "0" on display if "=" is pressed multiple times
    firstNum = result;
}



// CALLING THE FUNCTIONS ON CLICK

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', numberInput);
}

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', operatorFunction);
}

equalButton.addEventListener('click', resultFunction);

clearButton.addEventListener('click', clear)




