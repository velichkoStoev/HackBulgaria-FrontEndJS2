'use strict'

$(document).ready(function(){
    console.log('document ready!');
    $('#add-btn').click(function(){
        TodoApp.addTask($('#addTask').val());
    });
})