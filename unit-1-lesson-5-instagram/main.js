angular.module('myApp', ['ngAnimate'])
  .controller('instaSearch', function($scope) {
    $scope.searchInstagram = function() {
      console.log($scope.search);
    }

  });
