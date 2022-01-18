/*
HOMEWORK PART 2

Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.

Already read 'The Robots of dawn' by Isaac Asimov. (if true)
You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).

BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML
*/

let bookTitle = document.getElementById("book-title")
let bookAuthor = document.getElementById("book-author")
let submitButton = document.getElementsByTagName("button")[0]
let selectMenu = document.getElementById("select")
let p = document.getElementById("paragraph")

let inputBookArray = []
let inputBooks = {}


submitButton.addEventListener('click', function () {
    if (bookAuthor.value === "" || bookTitle.value === "") {
        alert("PLEASE ENTER VALUES !")
    }
    else {

        let readingStatus = document.querySelector('input[class="reading-status"]:checked').value

        inputBooks = {
            title: bookTitle.value,
            author: bookAuthor.value,
            readingStatus: readingStatus,

            // check: `${this.title} by ${this.author}`,

            checkReadingStatus: function () {
                if (readingStatus === "read") {
                    return `You've already read the book ${this.title} by ${this.author}.`
                }
                else if (readingStatus === "unread") {
                    return `You haven't read the book ${this.title} by ${this.author} yet.`
                }
            }
        }
        console.log(inputBooks.checkReadingStatus());


        inputBookArray.push(inputBooks)
        console.log(inputBookArray);


        let element = "";
        element += `<option>----Select book----</option>`
        for (let i = 0; i < inputBookArray.length; i++) {
            element += `<option>${inputBookArray[i].title} by ${inputBookArray[i].author}</option>`
            // element.class = `options`;
        }
        selectMenu.innerHTML = element;



        // NEMAM IDEJA KAKO DA GO RESAM OVOJ PROBLEM => Koga ke selektiram od dropdown menito kniga, da mi go napise reading statusot za taa kniga .... 

        // vaka kako sto e napisano sekogas go vrakja statusot samo za poslednata vnesena kniga

        selectMenu.addEventListener('change', function (event) {
            for (let i = 0; i < inputBookArray.length; i++) {
                // let selectedBook = event.target.value
                // console.log(selectedBook);
                // console.log(inputBookArray[i].check);
                // if (selectedBook === inputBookArray[i].check) {
                p.innerText = `${inputBookArray[i].checkReadingStatus()}`
                p.style.color = `darkred`
                p.style.fontSize = `1.3em`
                // }
            }
        })

    }
    bookTitle.value = "";
    bookAuthor.value = "";
})







