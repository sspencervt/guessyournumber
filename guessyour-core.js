/* core code */

let userGuess
let computerNumber
let guessCounter = 0

function gameStart() {
    display("I've thought of a number between 1-100\nGo!!!")
    computerCreate()
}

function handleInput(item) {
    userGuess = item.toString().trim();
    guessCounter += 1;
    analyzeGuess();
}

function computerCreate() {
    computerNumber = Math.floor(Math.random() * 99 + 1)
    userInput()
}

function analyzeGuess() {
    if (userGuess == computerNumber){
        display("YaY! it took you " + guessCounter + " guesses!" )
        exit()
    }

    if (userGuess < computerNumber) {
        display("Guesshigherb**ch!")
        userInput()
    }
    
    if (userGuess > computerNumber) {
        display("Guesslowerb**ch!")
        userInput()
    }
}



module.exports = {
    gameStart: gameStart,
    handleInput: handleInput
}