angular.module('tipCalculator', [])
  .run(function($rootScope) {
    $rootScope.reset = function() {
      console.log('reseting');
      $rootScope.data = {};
    }
  })
  .controller('mealDetails', function($scope, $rootScope) {
    var mealDetails = {
      subtotal: 0,
      tip: 0,
      calculateSubtotal: calculateSubtotal,
      calculateTip: calculateTip,
      allMeals: [],
    };

    $scope.chargeCustomer = function() {
      
      mealDetails.calculateSubtotal($scope.data.price, $scope.data.tax);
      mealDetails.calculateTip($scope.data.price, $scope.data.tip);
      debugger;

      $rootScope.$broadcast('customerCharged', mealDetails);
      $scope.cancel();
    }

    $scope.cancel = function() {
      $scope.data = {};
    }

    function calculateSubtotal(amount, tax) {
      mealDetails.subtotal = amount + (amount * (tax/100));
    }

    function calculateTip(amount, tip) {
      mealDetails.tip = amount * (tip/100);
    }

  })
  .controller('charges', function($scope) {
    $scope.$on('customerCharged', function(event, data) {
      $scope.data = data;
    });

    $scope.subtotal;
  })
  .controller('earnings', function($scope) {
    $scope.checks = [];

    $scope.$on('customerCharged', function(event, data) {
      $scope.checks.push(data);
    });

    $scope.getTipTotal = function() {
      return $scope.checks.reduce(function(prev, curr, i, arr) {
        return prev + ((curr.tip/ 100) * curr.price);
      }, 0);
    }

  })

