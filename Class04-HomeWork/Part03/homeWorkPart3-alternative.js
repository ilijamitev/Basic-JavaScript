console.log("============ HomeWork Part #3 ============");
// This alternative version works as well as the other one , but it has a clearer look (i think ?!)

let menuAtm = prompt("WELCOME TO MY ATM MACHINE \n To withdraw money press 'W' \n To check your balance press 'C'")

let withdrawMoneyAmmount;
let checkBalance;
let totalMoneyAmmount = 10000;

function moneyWithdraw(totalMoneyAmmount, withdrawMoneyAmmount) {
    let currentMoneyAmmount = totalMoneyAmmount - withdrawMoneyAmmount;
    return currentMoneyAmmount
}

if (menuAtm === "W") {
    withdrawMoneyAmmount = Number(prompt("Enter the amount of money you wish to withdraw :"))
    if (isNaN(withdrawMoneyAmmount)) {
        alert("Enter a valid number!")
    }
    else if (withdrawMoneyAmmount === 0) {
        alert("Please enter a value !")
    }
    else if (withdrawMoneyAmmount <= 0) {
        alert("You've entered an invalid number!")
    }
    else if (withdrawMoneyAmmount > totalMoneyAmmount) {
        alert("Not enough money!")
    }
    else {
        alert(`You withdrawed ${withdrawMoneyAmmount}$ from your account.  \nNow you have ${moneyWithdraw(totalMoneyAmmount, withdrawMoneyAmmount)}$ left on your account.`)
    }
} else if (menuAtm === "C") {
    checkBalance = alert(`Your current balance is : ${totalMoneyAmmount}$`)
} else {
    alert("Please select option !")
}




