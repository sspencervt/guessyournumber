'use strict';

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

global.usingJava = true;

function javaIntro() {
    display("I've thought of a number between 1-100\nGo!!!")
    numberFind.gameStart()
}

javaIntro();

