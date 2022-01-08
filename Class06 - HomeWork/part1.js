/*
HOMEWORK PART 1
Change the page with JavaScript

Change the text of all paragraphs and headers with javascript
Note:The html must not be changed
*/

let title = document.getElementById("myTitle")
title.innerText = "HomeWork Part 01 - DOM"

let firstP = document.querySelector(".paragraph")
firstP.innerText = "Actually, this isn't as easy as you think"

let secondP = document.getElementsByClassName("paragraph")[1]
secondP.innerText = "NO REALLY. IT'S NOT !"

let textTag = secondP.nextElementSibling
textTag.innerText = "It's about having NO TIME to practise"

let secondTitle = document.getElementsByTagName("h1")[1]
secondTitle.innerText = "It is what it is"

secondTitle.nextElementSibling.innerText = "That's all folks"



