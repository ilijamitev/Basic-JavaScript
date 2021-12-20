// HOMEWORK CLASS-02 - Chinese Zodiac calculator 

//   SOLUTION WITH "SWITCH"  

let userYearOfBirth = prompt("Enter your birth year:");
let userYearOfBirthValue = parseInt(userYearOfBirth);
let userChineseZodiac = (userYearOfBirthValue - 4) % 12


if (!(isNaN(userYearOfBirth))) {
    if (userYearOfBirthValue >= 1900 && userYearOfBirthValue <= 2021) {
        switch (userChineseZodiac) {
            case 0:
                alert("You are a RAT !");
                break
            case 1:
                alert("You are an OX !");
                break
            case 2:
                alert("You are a TIGER !");
                break
            case 3:
                alert("You are a RABBIT !");
                break
            case 4:
                alert("You are a DRAGON !");
                break
            case 5:
                alert("You are a SNAKE !");
                break
            case 6:
                alert("You are a HORSE !");
                break
            case 7:
                alert("You are a GOAT !");
                break
            case 8:
                alert("You are a MONKEY !");
                break
            case 9:
                alert("You are a ROOSTER !");
                break
            case 10:
                alert("You are a DOG !");
                break
            case 11:
                alert("You are a PIG !");
                break
        }
    }
    else {
        alert("Please enter a year between 1900 and 2021 !")
    }
}
else {
    alert("Please enter a valid year !")
}



