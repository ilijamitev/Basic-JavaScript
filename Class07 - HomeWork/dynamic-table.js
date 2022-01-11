console.log("======= Homework Class 07 =======");
/*
HOMEWORK
CREATE A DYNAMIC TABLE
1. Write a Javascript function that will dynamiclly create a table
2. User should input the number of Colums and Rows
3. In every table cell print which row and column it is (ex. Row-3 Column-1)
Don't forget to use google! :)
*/

let inputRows = document.getElementById("rowsInput")
let inputColumns = document.getElementById("columnsInput")
let createTableButton = document.getElementById("buttonCreateTable")
let dynamicTable = document.getElementById("tableDiv")

function createDynamicTable() {
    inputRows = Number(inputRows.value)
    inputColumns = Number(inputColumns.value)

    if (inputRows > 50 || inputColumns > 50) {
        return alert("Please enter numbers that are smaller or equal to 50 !")
    }
    else if (inputRows <= 0 || inputColumns <= 0) {
        return alert("Please enter numbers that are larger than 0 !")
    }
    else {
        let table = ""
        table += `<table>`
        for (let i = 1; i <= inputRows; i++) {
            table += `<tr>`
            for (let j = 1; j <= inputColumns; j++) {
                table += `<td> Row ${i}, Column ${j} </td>`
            }
            table += `</tr>`
        }
        table += `</table>`

        dynamicTable.innerHTML = table

        return table
    }
}

createTableButton.addEventListener('click', createDynamicTable)

