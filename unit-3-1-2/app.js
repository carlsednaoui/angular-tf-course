var app = angular.module('myApp', []);

app.directive('optIn', function() {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: './opt-in.html',
    }
})
