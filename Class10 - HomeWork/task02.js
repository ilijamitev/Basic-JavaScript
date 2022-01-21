$("document").ready(function () {
    console.log("========= READY TASK 02 =========")

    /*
    HOMEWORK PART 2
    Create a header generator
    
    1. Create two inputs, one for text and one for color
    2. Create a button that says: generate h1
    3. Create an h3 element for messages
    
    4. When the button is clicked create a new header below the inputs and button
    The new header should have the text and color from the inputs
    
    5. If the person enters an invalid color or an empty text show an error message to the message element
    
    You must use JQuery to complete the task
    */

    $("button").first().click(function () {
        let color = $('#color').first().val()
        let text = $('#text').first().val()

        if (text !== "") {
            $('h3').before().html(`<h1>${text}</h1>`).css('color', color)
        }
        else {
            $('h3').text(`Please enter text and select color !`).css('color', color)
        }
    })

































})