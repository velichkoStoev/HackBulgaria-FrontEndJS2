window.onload = function() {
  var button = document.getElementById("add-task-button");
  button.onclick = function(event) {
      var input = document.getElementById("task-input");
      var text_area = document.getElementById("text-area");

      text_area.value += ('* ' + input.value + '\n')
  };
};