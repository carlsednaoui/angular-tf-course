var app = angular.module('myApp', []);

app.directive('editable', function() {
  return {
    restrict: 'E',
    templateUrl: './editable.html',
    scope: {
      edit: '='
    },
  }
})

app.factory('editMode', function() {
  return {
    mode: false
  };
})

app.controller('editMe', function($scope, editMode) {
  $scope.edit = editMode;
})

app.controller('sidebar', function($scope, editMode) {
  $scope.edit = editMode;
})
