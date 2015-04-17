var TodoApp = (function() {
  // private vars
  var tasks = [];
  var index = 0;

  var addTask = function(taskName) {
    var newTask = {
      id: ++index,
      name: taskName,
      finished: false
    };
    tasks.push(newTask);
    displayList();
  };

  var finishTask = function(id) { 
    id = parseInt(id);

    tasks.forEach(function(task){
      if(task['id'] === id){
        task['finished'] = true;
        return;
      }
    }); 
    
    displayList();
  };

  var deleteTask = function(id){
    id = parseInt(id);

    tasks = tasks.filter(function(task){
      return task['id'] !== id;
    });

    displayList();
  };

  var displayList = function(container) {
    $('#container ol').empty();
    tasks.forEach(function(task){
      var liElement = $('<li id="' + task['id'] +'">' + task['name'] + '</li>')
      var checkbox = $('<input type="checkbox">');
      var button = $('<button type="button">Delete</button>');
      
      checkbox.click(function(){
        finishTask($(this).parent().attr('id'));
      });

      button.click(function(){
        deleteTask($(this).parent().attr('id'));
      });

      liElement.prepend(checkbox);
      liElement.prepend(button);

      if(task['finished'] === true){
        liElement.addClass('finished');
      }

      $('#container ol').append(liElement);
    });
  };

  // public api
  return {
    addTask: addTask,
    finishTask: finishTask,
    displayList: displayList
  };
})();