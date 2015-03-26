"use strict";

var prompt = require('prompt');

prompt.start();

// var number = getRandomInt(1000, 9999);
var numberStr = generateNumberWithUniqueDigits();
console.log('Number: ' + numberStr);

console.log('Guess: ');
promptNumber();

function promptNumber(){
    prompt.get(['input'], function (err, result) {
        
        if(validateInput(result.input)){
            var bullsCows = getBullsAndCows(numberStr, result.input);
            if(bullsCows['bulls'] == 4){
                console.log('Success');
                return;
            }else{
                console.log('Bulls: ' + bullsCows['bulls'] + '| Cows: ' + bullsCows['cows']);
                promptNumber();
            }
        }else{
            console.log('Your input is not valid - should be 4 unique digits!');
            promptNumber();
        }    

    });
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var getBullsAndCows = function(number, guess){
    var numberLength = numberStr.length;

    var bulls = 0;
    var cows = 0;

    for(var i=0; i<numberLength; i++){
        if(numberStr.charAt(i) == guess.charAt(i)){
            bulls++;
        }else if(guess.indexOf(numberStr.charAt(i)+'') != -1){
            cows++;
        }
    }

    return {
        bulls: bulls,
        cows: cows
    };
}

function generateNumberWithUniqueDigits(){
    var digitsArray = [];
    var numberStr = "";

    while(true){
        var digit = Math.floor(Math.random()*10);

        if(digitsArray.indexOf(digit) === -1){ 
            numberStr += digit;
            digitsArray.push(digit);
        }

        if(numberStr.length === 4){
            return numberStr;
        }
    }
}

function validateInput(input){
    var regex = /^\d{4}$/;

    if(!regex.test(input)){
        return false;
    }

    for(var i=0; i<4; i++){
        if(input.split(input[i]).length !== 2){
            return false;
        }
    }

    return true;
}