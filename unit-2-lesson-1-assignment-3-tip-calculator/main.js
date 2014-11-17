angular.module('tipCalculator', [])
  .run(function($rootScope) {
    $rootScope.reset = function() {
      $rootScope.data = {};
      console.log('reseting');
      // ask Thomas how to reset globally
    }
  })
  .controller('mealDetails', function($scope, $rootScope) {
    $scope.chargeCustomer = function() {
      $rootScope.$broadcast('customerCharged', this.data);
      $scope.data = {};
    }

    $scope.cancel = function() {
      $scope.data = {};
    }

  })
  .controller('charges', function($scope) {
    $scope.$on('customerCharged', function(event, data) {
      $scope.data = data;
    });

    $scope.calculateSubtotal = function(amount, tax) {
      if (amount === undefined || tax === undefined) return;
      return amount + (amount * (tax/100));
    }

    $scope.calculateTip = function(amount, tip) {
      if (amount === undefined || tip === undefined) return;
      return amount * (tip/100);
    }

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

