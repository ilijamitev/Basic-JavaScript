/*
BONUS HOMEWORK
Create a recipe page from inputs

Ask the user for the name of the recipe
Ask the user how many ingredients do we need for the recipe
Ask the user for the name of every ingredient

Print the name of the recipe in the HTML as heading element, ex: h1 - h6
Print all ingredients as an unordered list in the HTML
Extra: Use a table if you want to be fancy:)
*/


// Ask the user for the name of the recipe
let recipeNameInput = prompt("Please enter the name of the recipe")
while (recipeNameInput === "") {
    alert("Please enter the recipe name and than click OK")
    recipeNameInput = prompt("Please enter the name of the recipe")
}



// Print the name of the recipe in the HTML as heading element, ex: h1 - h6
function recipeName(recipeNameInput) {
    let recipeName = document.getElementsByTagName("h2")[0]

    if (recipeNameInput !== null) {
        recipeName.innerText = `${recipeNameInput}`
        recipeName.style.color = "#52b69a"
    }
    return recipeName
}
recipeName(recipeNameInput)



// Ask the user how many ingredients do we need for the recipe
let numberOfIngredientsInput = Number(prompt("How many ingredients do we need for the recipe"))
while ((numberOfIngredientsInput < 0) || (isNaN(numberOfIngredientsInput))) {
    alert("Please enter a valid number")
    numberOfIngredientsInput = Number(prompt("How many ingredients do we need for the recipe"))
}



// Print all ingredients as an unordered list in the HTML
// Extra: Use a table if you want to be fancy:)

let listOfIngredients = []

for (let i = numberOfIngredientsInput; i > 0; i--) {
    let recipeIngredientsInput = prompt(`Please enter the ingredient name (${i})`)
    while (recipeIngredientsInput === "") {
        alert("Please enter the ingredient name and than click OK")
        recipeIngredientsInput = prompt("Please enter the ingredient name")
    }
    listOfIngredients.push(recipeIngredientsInput)
}
console.log(listOfIngredients);



let recipeIngredientTable = document.getElementById("div2")

function recipeIngredientsList(listOfIngredients, recipeIngredientTable) {

    let table = ""
    table += `<table>`
    table += `<tbody>`
    for (let i = 0; i < listOfIngredients.length; i++) {
        table += `<tr><td><b>${i + 1}.</b> ${listOfIngredients[i]}</td></tr>`
    }
    table += `</tbody>`
    table += `</table>`
    console.log(table);

    recipeIngredientTable.innerHTML = table
}

recipeIngredientsList(listOfIngredients, recipeIngredientTable)

/*    MOZE LI OBJASNUVANJE ZOSTO NACINOT PODOLE NE E VALIDEN ?       mi dava nesto vaka: <table></table>ing1ing2ing3

function recipeIngredientsList(listOfIngredients, recipeIngredientTable) {

    recipeIngredientTable.innerHTML = "";
    recipeIngredientTable.innerHTML += `<table>`
    recipeIngredientTable.innerHTML += `<tbody>`
    for (let i = 0; i < listOfIngredients.length; i++) {
        recipeIngredientTable.innerHTML += `<tr><td>${listOfIngredients[i]}</td></tr>`
    }
    recipeIngredientTable.innerHTML += `</tbody>`
    recipeIngredientTable.innerHTML += `</table>`
    console.log(recipeIngredientTable.innerHTML);
}
*/

















