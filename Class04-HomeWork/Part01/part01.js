console.log("========== HomeWork Part 1 =========");
/*

HOMEWORK PART 1
Write a JavaScript function which accepts a parameter and returns its type and prints it in the console.Try to call the functions 5 times for 5 different types:
- object
- boolean
- number
- string
- undefined

*/

let input;

function checkInputType(input) {
    if (typeof (input) === "object") {
        return typeof (input)
    }
    else if (typeof (input) === "boolean") {
        return typeof (input)
    }
    else if (typeof (input) === "number") {
        return typeof (input)
    }
    else if (typeof (input) === "string") {
        return typeof (input)
    }
    else if (typeof (input) === "undefined") {
        return typeof (input)
    }
}

console.log(checkInputType(null));
console.log(checkInputType(isNaN()));
console.log(checkInputType(NaN));
console.log(checkInputType(""));
console.log(checkInputType(undefined));





