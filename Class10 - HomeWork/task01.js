$("document").ready(function () {
    console.log("========= READY TASK 01 =========")
    /*
    HOMEWORK PART 1
    CREATE A GREETING APP WITH JQUERY
    
    1. Create an input
    2. Create a button
    3. When clicked the button should print a greet message in an h1 header
    
    Ex: input: Petko output message: Hello there Petko!
    
    
    You must use JQuery to complete the task
    */

    $('button').first().click(function () {
        if ($('#name').first().val() !== "") {
            $('button').after(`<h1>Hello there ${$('#name').first().val()} &#x270C;</h1>`)
        }
    })



})