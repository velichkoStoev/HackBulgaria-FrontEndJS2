function TodoApp(){
    this.addTask = function(taskValue, container){
        var task = taskValue;
        var taskLabel = $('<label />').html(task);
        var taskCheckbox = $('<input/>').attr({ type: 'checkbox' });
        taskLabel.prepend(taskCheckbox);
        container.append(taskLabel);
        container.append('<br>');
    },
    this.completeTask = function(checkbox){
        if(checkbox.is(':checked')){
            checkbox.parent().wrap('<strike>');
        }else{
            checkbox.parent().unwrap('<strike>');
        }
    }
}

$(document).ready(function() {
    var todoApp = new TodoApp();
    var container = $('#tasks-field');  

    $('#add-btn').click(function(){
        var task = $('#task-input').val();
        todoApp.addTask(task, container);
        
        $('div#tasks-field label input').click(function(){
            todoApp.completeTask($(this));
        });
    });
});