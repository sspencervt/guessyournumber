/* core code */


let computerNumber
let guessCounter = 0
let userGuess
let enter

function enterbutton() {
    enter = document.getElementById('input')
    enter.addEventListener("keyup", function(event) {
        // event.preventDefault()
        if (event.keyCode === 13) {
            document.getElementById('guess').click()
            // document.getElementById('input').value =''
        }
        
    })
    
}

function gameStart() {
    console.log(document.getElementById("output").textContent)
    computerCreate();
}

function computerCreate() {
    computerNumber = Math.floor(Math.random() * 99 + 1)
    // userInput()
}

function handleInput(item) {
    clear();
    userGuess = item.toString().trim();
    analyzeGuess();
}

function analyzeGuess() {
    console.log({userGuess})
    console.log({computerNumber})
    
    if (userGuess == computerNumber){
        display("YaY! it took you " + guessCounter + " guesses!" )
    }

    if (userGuess < computerNumber) {
        display("It is higher than " + userGuess)
        display("Guess again.")
    }
    
    if (userGuess > computerNumber) {
        display("it is lower than " + userGuess)
        display("Guess again.")
    }
    
}



module.exports = {
    gameStart: gameStart,
    handleInput: handleInput,
}

