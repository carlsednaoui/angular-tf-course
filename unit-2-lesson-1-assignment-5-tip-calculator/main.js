angular.module('tipCalculator', ['ngRoute', 'ngAnimate'])
  .config(function($routeProvider) {
      $routeProvider.when('/', {
          templateUrl : './home.html'
      }).when('/meal', {
          templateUrl : './meal.html',
          controller : 'mealDetailsCtrl'
      }).when('/earnings', {
          templateUrl : './earnings.html',
          controller : 'earningsCtrl'
      }).otherwise({
        redirectTo : '/'
      })
  })
  .run(function($rootScope) {
    $rootScope.checks = [];
  })
  .controller('mealDetailsCtrl', function($scope, $rootScope) {
    $scope.chargeCustomer = function() {
      updateCustomerCharges();
      $rootScope.checks.push(this.data);
      $scope.data = {};
    }

    $scope.cancel = function() {
      $scope.data = {};
    }

    function updateCustomerCharges() {
      var data = $scope.data;
      $scope.subtotal = calculateSubtotal(data.price, data.tax);
      $scope.tip = calculateTip(data.price, data.tip);
      $scope.total = $scope.subtotal + $scope.tip;
    }
    
    function calculateSubtotal(amount, tax) {
      if (amount === undefined || tax === undefined) return;
      return amount + (amount * (tax/100));
    }

    function calculateTip(amount, tip) {
      if (amount === undefined || tip === undefined) return;
      return amount * (tip/100);
    }

  })
  .controller('earningsCtrl', function($rootScope, $scope) {

    $scope.getTipTotal = function() {
      return $rootScope.checks.reduce(function(prev, curr, i, arr) {
        return prev + ((curr.tip/ 100) * curr.price);
      }, 0);
    }

    $scope.reset = function() {
      $rootScope.checks = [];
    }

  })

