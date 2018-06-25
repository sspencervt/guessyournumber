let numberFind = require('./guessyour-core.js')
/* node code */


global.userInput = function() {
    process.stdin.once('data', (chunk) => {
    numberFind.handleInput(chunk);
});
}

global.display = function(message) {
    console.log(message);
}

global.exit = function() {
    process.exit()
}

numberFind.gameStart()

