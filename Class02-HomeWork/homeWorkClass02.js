// HOMEWORK
// Write javascript code that will get an input from the user and calculate which Chinese Zodiac a given year is in (1900-2021)

// Formula for Chinese Zodiac caluclation: (year - 4) % 12. Possible values:

// 0 - Rat   1 - Ox   2 - Tiger   3 - Rabbit   4 - Dragon   5 - Snake   6 - Horse   7 - Goat   8 - Monkey   9 - Rooster   10 - Dog   11 - Pig

let userYearOfBirth = prompt("Enter your birth year:");
let userYearOfBirthValue = parseInt(userYearOfBirth);
let userChineseZodiac = (userYearOfBirthValue - 4) % 12

if (!(isNaN(userYearOfBirth))) {
    if (userYearOfBirthValue >= 1900 && userYearOfBirthValue <= 2021) {
        if (userChineseZodiac === 0) {
            alert("You are a RAT !");
        }
        else if (userChineseZodiac === 1) {
            alert("You are an OX !");
        }
        else if (userChineseZodiac === 2) {
            alert("You are a TIGER !");
        }
        else if (userChineseZodiac === 3) {
            alert("You are a RABBIT !");
        }
        else if (userChineseZodiac === 4) {
            alert("You are a DRAGON !");
        }
        else if (userChineseZodiac === 5) {
            alert("You are a SNAKE !");
        }
        else if (userChineseZodiac === 6) {
            alert("You are a HORSE !");
        }
        else if (userChineseZodiac === 7) {
            alert("You are a GOAT !");
        }
        else if (userChineseZodiac === 8) {
            alert("You are a MONKEY !");
        }
        else if (userChineseZodiac === 9) {
            alert("You are a ROOSTER !");
        }
        else if (userChineseZodiac === 10) {
            alert("You are a DOG !");
        }
        else if (userChineseZodiac === 11) {
            alert("You are a PIG !");
        }
    }
    else {
        alert("Please enter a year between 1900 and 2021 !");
    }
}
else {
    alert("Please enter a valid year !");
}



