console.log("========== EXERCISES =========");
console.log("");
console.log("============ Exercise 4 ============");
/* 
EXERCISE 4
Create a car object with some properties
model, color, year, fuel, fuelConsumption and a method that calculate how much fuel you will need to pass some distance.
*/
let car = {
    model: "KIA Sportage",
    year: 2020,
    fuel: "95",
    fuelConsumption: 10,
    fuelConsumptionPerDistance: function (distance) {
        let fuelPerDistance = this.fuelConsumption * distance / 100;
        return console.log(`You will need ${fuelPerDistance} l of fuel for ${distance} km`);
    }
}
car.fuelConsumptionPerDistance(22 * 2 * 5)




console.log("");
console.log("============ Exercise 5 ============");
/*
EXERCISE 5
Create a student registry form. The form should have:
--- First Name
--- Last Name
--- Age
The form should have a save button which will create a student object and add it to an array (students). 
Log the array after every save to see the results in the console.
Bonus: Make the students appear in an unordered list in the page.
*/

let inputFirstName = document.getElementById("firstName")
let inputLastName = document.getElementById("lastName")
let inputAge = document.getElementById("age")
let registerButton = document.getElementById("registerBtn")
let div = document.getElementById("div")

let registerArray = [];
let register = {}


registerButton.addEventListener('click', function () {
    if (inputFirstName.value === "" || inputLastName.value === "" || inputAge.value === "") {
        alert("Please enter values !")
    }
    else if (Number(inputAge.value) < 0 || Number(inputAge.value) > 150) {
        // else if (inputAge.value < 0 || inputAge.value > 150) {    // FUNKCIONIRA I BEZ DA SE PARSIRA INPUTOT.. 
        alert('Enter a valid age !')
        console.log(inputAge.value);
    }
    else {
        register = {
            firstName: inputFirstName.value,
            lastName: inputLastName.value,
            age: Math.floor(inputAge.value)
        }
        // console.log(register);
        registerArray.push(register)

        let list = ``
        list += `<ul>`
        for (let i = 0; i < registerArray.length; i++) {
            list += `<li><b>Student No ${i + 1}</b></li>`
            list += `<li>First name : ${registerArray[i].firstName}</li>`
            list += `<li>Last name : ${registerArray[i].lastName}</li>`
            list += `<li>Age : ${registerArray[i].age}</li><br>`
        }
        list += `</ul>`
        div.innerHTML = list;

        /*          ZOSTO NA OVOJ NACIN PODOLE NE GO DAVA VALIDNO ?!?!    mi dava: <ul></ul> pa posebno <li></li>
        
                div.innerHTML = ``
                div.innerHTML += `<ul>`
                for (let i = 0; i < registerArray.length; i++) {
                    div.innerHTML += `<li>${registerArray[i].firstName}</li>`
                    div.innerHTML += `<li>${registerArray[i].lastName}</li>`
                    div.innerHTML += `<li>${registerArray[i].age}</li><br>`
                }
                div.innerHTML += `</ul>`
        */
    }
    inputFirstName.value = ""
    inputLastName.value = ""
    inputAge.value = ""
})

console.log(registerArray);




