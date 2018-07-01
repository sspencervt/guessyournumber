/* core code */


let computerNumber
let guessCounter = 0
let userGuess

function gameStart() {
    computerCreate();
}

function computerCreate() {
    computerNumber = Math.floor(Math.random() * 99 + 1)
    // userInput()
}

function handleInput(item) {
    clear()
    userGuess = item.toString().trim();
    guessCounter += 1;
    analyzeGuess();
}

function analyzeGuess() {
    console.log('In "analyzeGuess"')
    console.log({userGuess})
    console.log({computerNumber})

    if (userGuess == computerNumber){
        console.log("HERE 1")
        display("YaY! it took you " + guessCounter + " guesses!" )
    }

    if (userGuess < computerNumber) {
        console.log("HERE 2")
        display("It is higher than " + userGuess)
        display("Guess again.")
    }
    
    if (userGuess > computerNumber) {
        console.log("HERE 3")
        display("it is lower than " + userGuess)
        display("Guess again.")
    }
    console.log("DONE!")
}


module.exports = {
    gameStart: gameStart,
    handleInput: handleInput,
}