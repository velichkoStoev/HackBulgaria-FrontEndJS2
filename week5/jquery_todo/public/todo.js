$( document ).ready(function() {
    var counter = 1;

    $('#add-btn').click(function(){
        var task = $('#task-input').val();
        $('#tasks-field').append('<p>' + counter + '. ' + task + '</p>');
        counter++;
    });
});