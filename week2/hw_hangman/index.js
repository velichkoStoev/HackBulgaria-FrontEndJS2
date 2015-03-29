"use strict";

var prompt = require('prompt');
prompt.start();

function promptGuess(){
    console.log("Input a letter: ");
    prompt.get(['input'], function (err, result) {   
        var input = result.input.toLowerCase();
        if(validateInput(input)){
            checkWord(input);
        }else{
            console.log("Invalid input! Please enter a single letter!");
            promptGuess();
        }
    });
}

function validateInput(input){
    var regex = /^[a-zA-Z]$/;
    return regex.test(input);
}

function checkWord(input){
    if(checkedLetters.indexOf(input) === -1){
        checkedLetters.push(input);
        var inputIndex = word.indexOf(input);
        
        if(inputIndex === -1){
            tries --;

            if(tries === 0){
                console.log("You have no more tries, mate, sorry ... ");
            }else{
                console.log("Sorry, not this one! :(");
                console.log("Tries left: " + tries);
                promptGuess();
            }
        }else{
            maskedWord = updateMaskedWord(maskedWord, input);
            if(maskedWord === word){
                console.log("Yeah, that's it!");
            }else{
                console.log("Nice guess!");
                console.log("The word is now " + maskedWord);
                promptGuess();
            }
        }
    }else{
        console.log("You've tried with this letter already! Go on!");
        promptGuess();
    }
}

function maskWord(){
    var maskedWord = new Array(word.length + 1).join("*");

    var firstLetter = word.charAt(0);
    var lastLetter = word.charAt(word.length - 1);

    checkedLetters.push(firstLetter);
    checkedLetters.push(lastLetter);

    maskedWord = updateMaskedWord(maskedWord, firstLetter);
    maskedWord = updateMaskedWord(maskedWord, lastLetter);  

    return maskedWord;
}

function updateMaskedWord(maskedWord, character){
    var indices = [];
    for(var i = 0; i < word.length; i++){
        if(character === word[i]){
            indices.push(i);
        }
    }

    for(var j = 0; j < indices.length; j++){
        maskedWord = maskedWord.replaceAt(indices[j], character);
    }  

    return maskedWord;
}

String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index + character.length);
}

var word = "guessthat"; //some hardcoded string in order to test stuff
var checkedLetters = [];
var tries = 5;

var maskedWord = maskWord();

console.log("The word is " + maskedWord + " !");
console.log("Let's start!");
promptGuess();