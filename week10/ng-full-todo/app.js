var fullTodoApp = angular.module('fullTodoApp', []);

fullTodoApp.controller('TasksController', function($scope){
    $scope.tasks = [];

    $scope.submitTask = function(task){
        if(task && $scope.tasks.indexOf(task) === -1){
            $scope.tasks.push(task);
        }
    }

    $scope.deleteTask = function(task){
        var taskIndex = $scope.tasks.indexOf(task);
        if(taskIndex !== -1){
            $scope.tasks.splice(taskIndex, 1);
        }
    }
});