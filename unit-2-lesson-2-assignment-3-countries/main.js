angular.module('countries', ['ngRoute', 'ngAnimate'])
  .config(function($routeProvider) {
      $routeProvider.when('/', {
          templateUrl : './home.html'
      }).when('/countries', {
          templateUrl : './countries.html',
          controller : 'CountriesCtrl'
      }).when('/countries/:countryCode', {
          templateUrl : './country.html',
          controller : 'CountriesCtrl'
      }).otherwise({
        redirectTo : '/'
      })
  })
  .controller('CountriesCtrl', function($scope, $location, API) {
    $scope.countries;

    API.getCountries().then(function(response) {
      $scope.countries = response.data.geonames;
    })

    $scope.showCountry = function(countryCode) {
      $location.path('/countries/' + countryCode);
    }
  });
