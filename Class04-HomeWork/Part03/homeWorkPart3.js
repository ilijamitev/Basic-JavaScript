console.log("============ HomeWork Part #3 ============");
/* 
Write a javascript function for an ATM:
The ATM should give cash
Should return "Not enough money" if you request more money
Should return the ammount withdrawn and money left on the account if you have enough
Note: Hardcode your account money in the program
Bonus: Make it work with prompt()! 
*/
let menuAtm = prompt("WELCOME TO MY ATM MACHINE \n To withdraw money press 'W' \n To check your balance press 'C'")

let withdrawMoneyAmmount;
let checkBalance;
let totalMoneyAmmount = 10000;


if (menuAtm === "W") {
    withdrawMoneyAmmount = Number(prompt("Enter the amount of money you wish to withdraw :"))
    if (isNaN(withdrawMoneyAmmount)) {
        alert("Enter a valid number!")
    }
} else if (menuAtm === "C") {
    checkBalance = alert(`Your current balance is : ${totalMoneyAmmount}$`)
} else {
    alert("Please select option !")
}


function moneyWithdraw(totalMoneyAmmount, withdrawMoneyAmmount) {
    if (withdrawMoneyAmmount === 0) {
        alert("Please enter a value !") // kako da napravam samo koga ke se klikne OK (bez vnesen input) da go dava ova, a koga ke bide CANCEL da ne go dava
    } else if (withdrawMoneyAmmount <= 0) {
        alert("You've entered an invalid number!")
    } else if (withdrawMoneyAmmount > totalMoneyAmmount) {
        alert("Not enough money!")
    } else if (withdrawMoneyAmmount <= totalMoneyAmmount) {
        let currentMoneyAmmount = totalMoneyAmmount - withdrawMoneyAmmount;
        alert(`You withdrawed ${withdrawMoneyAmmount}$ from your account.  \nNow you have ${currentMoneyAmmount}$ left on your account.`)
    }
}


moneyWithdraw(totalMoneyAmmount, withdrawMoneyAmmount);




