/*
Standard Calculator
Create a web calculator with all the standard features. 

1. The calculator should have buttons for the numbers to click (just like calculators in real life, no inputs!). 

2. It should have buttons for the operations: Sum, Subtract, Multiply and Divide. 

3. It should also have the standard buttons equals, decimal dot and reset ( C ). 

4. There should be a display where we can see the numbers that we are entering and results (like calculators in real life). 

5. The calculator should show error message if number is too large or if we are dividing by zero.

Note: The eval() function is not allowed!
*/

$("document").ready(function () {
    console.log("================ CALCULATOR APP ================");


    // Defining the display
    let displayScreen = $("#display-screen")
    console.log(displayScreen);
    // Defining all the buttons
    let calculatorButtons = $("button");
    console.log(calculatorButtons);
    // Defining the Clear button
    let clearButton = $("#clear")
    console.log(clearButton);
    // Defining the decimal dot
    let decimalDot = $("#decimal")
    console.log(decimalDot);



    let inputOperatorsArray = [];

    let emptyArray = [];


    let number = "";
    let operator = null;
    let result = 0;



    //                CALCULATOR      FUNCTIONS      START      HERE       !        !        !

    // CLEAR FUNKCIJATA TUKA !!!
    clearButton.onclick = function () {

    };


    calculatorButtons.click(function () {

        let calculatorButtonsValue = $(this).val()



        if (calculatorButtonsValue === "1" || calculatorButtonsValue === "2" || calculatorButtonsValue === "3" || calculatorButtonsValue === "4" || calculatorButtonsValue === "5" || calculatorButtonsValue === "6" || calculatorButtonsValue === "7" || calculatorButtonsValue === "8" || calculatorButtonsValue === "9" || calculatorButtonsValue === "0" || calculatorButtonsValue === ".") {

            number += calculatorButtonsValue
            console.log(number);
            if (isNaN(number)) {
                displayScreen.text('Error')
            }

            displayScreen.text(number)
        }

        else if (calculatorButtonsValue === "+" || calculatorButtonsValue === "-" || calculatorButtonsValue === "*" || calculatorButtonsValue === "/") {
            emptyArray.push(number)
            number = "";                            // CISTENJE NA UPOTREBENITE NIZI     OBAVEZNO !!!

            inputOperatorsArray[0] = calculatorButtonsValue;
            operator = inputOperatorsArray[0]
            displayScreen.text(operator)
        }

        else {
            emptyArray.push(number)
            number = "";

            if (calculatorButtonsValue === "=") {
                switch (operator) {
                    case "+":
                        for (let i = 0; i < emptyArray.length; i++) {
                            result += Number(emptyArray[i])
                            displayScreen.text(result)
                        }
                        emptyArray.unshift(result)
                        break;
                    case "-":
                        displayScreen.text(result)
                        break;
                    case "*":
                        displayScreen.text(result)
                        break;
                    case "/":
                        displayScreen.text(result)
                        break;

                }
            }
        }
        // inputNumberArray[0] = numberButtonsValue
        // console.log(inputNumberArray);

        console.log('ALL NUMBERS :', emptyArray);

        console.log("");

        console.log('num1', number);

        console.log('num1 length', number.length);

        console.log("Operator:", operator);

    })

    // DA NAPRAVAM PROVERKA 
    // cant enter more than 15 digits
    // poveke od 10 decimali NE

    // DA MOZE DA SE VNESE I NEGATIVEN BROJ !!!!!!!!!!!!!!!!!!!!!!!!!!

    // ako se deli so 0 da ja pustam animacijata

    // da nemoze poveke od edna tocki "." da stava

    // switch za operatorite

})
