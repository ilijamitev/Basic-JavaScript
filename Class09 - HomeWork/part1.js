console.log("========== HOMEWORK PART 01 ==========");
/*
HOMEWORK PART 1

CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
--name
--kind
--speak (method)

This method will take one parameter and will print in the console a message: 
e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

Bonus: enter the values from prompt or from HTML inputs
*/
let petName = document.getElementById("pet-name")
let petKind = document.getElementById("pet-kind")
let petSpeak = document.getElementById("pet-speak")
let submitBtn = document.getElementsByTagName("button")[0]
let div = document.getElementsByTagName("div")[0]



//                   ONE WAY TO SOLVE THE TASK


/*
submitBtn.addEventListener('click', function () {

    let animal = {
        name: petName.value,
        kind: petKind.value,
        speak: function (petSpeak) {
            console.log(`${this.name} says: "${petSpeak.value}"`);
        }
    }
    animal.speak(petSpeak)

    petName.value = ''
    petKind.value = ''
    petSpeak.value = ''

})
*/


//                    ANOTHER WAY TO SOLVE THE TASK 


let petArray = [];

submitBtn.addEventListener('click', function () {

    if (petName === "" || petKind === "" || petSpeak === "") {
        alert("Please enter values")
    }
    else {
        let animal = {
            name: petName.value,
            kind: petKind.value,
            speak: petSpeak.value
        }
        petArray.push(animal)

        let uList = ""
        uList += `<ul>`
        for (let i = 0; i < petArray.length; i++) {
            uList += `<li>Pet name: ${petArray[i].name}</li>`
            uList += `<li>Pet kind: ${petArray[i].kind}</li>`
            uList += `<li>${petArray[i].name} says: "${petArray[i].speak}"</li><br>`
        }
        uList += `</ul>`
        div.innerHTML = uList
    }
    petName.value = '';
    petKind.value = '';
    petSpeak.value = '';
})

