var word = "guessthat"; //some hardcoded string in order to test stuff
var checkedLetters = [];
var tries = 5;

var maskedWord = maskWord();

function validateInput(input){
    var regex = /^[a-zA-Z]$/;
    return regex.test(input);
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

function showMessage(message){
    $('#messages-field').text(message);
}

function checkWord(input){
    if(checkedLetters.indexOf(input) === -1){
        checkedLetters.push(input);
        var inputIndex = word.indexOf(input);
        
        if(inputIndex === -1){
            tries --;

            if(tries === 0){
                showMessage("You have no more tries, mate, sorry ... ");
                blockInput();
            }else{
                showMessage("Sorry, not this one! :(");
                showMessage("Tries left: " + tries);
            }
        }else{
            maskedWord = updateMaskedWord(maskedWord, input);
            if(maskedWord === word){
                showMessage("Yeah, that's it!");
                blockInput();
            }else{
                showMessage("Nice guess!");
                showMaskedWord();
            }
        }
    }else{
        showMessage("You've tried with this letter already! Go on!");
    }
}

function updateMaskedWord(maskedWord, character){
    var indices = [];
    for(var i = 0; i < word.length; i++){
        if(character === word[i]){
            indices.push(i);
        }
    }

    for(var j = 0; j < indices.length; j++){
        maskedWord = replaceAt(maskedWord, indices[j], character);
    }  

    return maskedWord;
}

function replaceAt(string, index, character){
    return string.substr(0, index) + character + string.substr(index + character.length);
}

function showMaskedWord(){
    $("#word-container").text(maskedWord);
}

function blockInput(){
    $("#word-input").prop('disabled', true);
    $("#btn-guess").prop('disabled', true);
}

$( document ).ready(function() {
    showMaskedWord();

    $("#btn-guess").click(function(){
        var guess = $("#word-input").val().toLowerCase();
        if(validateInput(guess)){
            checkWord(guess);
        }else{
            showMessage("Invalid guess! Please enter a single letter!");
        }
    });
});