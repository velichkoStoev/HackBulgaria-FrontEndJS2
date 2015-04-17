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

  var displayList = function(container) {
    $('#container ol').empty();
    tasks.forEach(function(task){
      var liElement = $('<li>' + task['name'] + '</li>')
      var checkbox = $('<input type="checkbox" id="' + task['id'] +'">');
      // var button = $('<button type="button">Click Me!</button>');
      
      checkbox.click(function(){
        finishTask($(this).attr('id'));
      });

      liElement.prepend(checkbox);

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