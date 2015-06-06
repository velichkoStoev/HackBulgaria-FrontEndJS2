var mainApp = angular.module('mainApp', ['ui.router']);

mainApp.config(function($stateProvider){
    $stateProvider
        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html',
            controller: 'aboutController'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'views/contact.html',
            controller: 'contactController'
        });
});

mainApp.controller('aboutController', function($scope){
    $scope.githubAccout = 'velichkoStoev';
});

mainApp.controller('contactController', function($scope){
    $scope.aboutMessage = "I'm trying to be cool!";
});
