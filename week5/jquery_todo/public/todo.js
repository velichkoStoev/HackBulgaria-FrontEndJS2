$( document ).ready(function() {
    $('#add-btn').click(function(){
        var task = $('#task-input').val();
        var taskCheckbox = $('<label />').html(task).prepend($('<input/>').attr({ type: 'checkbox'}));
        $('#tasks-field').append(taskCheckbox);
        $('#tasks-field').append('<br>');
    });
});