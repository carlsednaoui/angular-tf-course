angular.module('countries', ['ngRoute', 'ngAnimate'])
  .config(function($routeProvider) {
      $routeProvider.when('/', {
          templateUrl : './home.html'
      }).when('/countries', {
          templateUrl : './countries.html',
          controller : 'CountriesCtrl'
      }).when('/countries/:countryCode', {
          templateUrl : './country.html',
          controller : 'CountryCtrl'
      }).otherwise({
        redirectTo : '/'
      })
  })
  .run(function($rootScope, API) {
    $rootScope.countries = [];

    API.getCountries().then(function(response) {
      $rootScope.countries = response.data.geonames;
    });;
  })
  .controller('CountriesCtrl', function($scope, $rootScope, $location) {
    $scope.showCountry = function(countryCode) {
      $location.path('/countries/' + countryCode);
    }
  })
  .controller('CountryCtrl', function($scope, $rootScope, $location, $routeParams) {
    $scope.countryCode = $routeParams.countryCode;
    $scope.country;

    // find current country
    function findCurrentCountry() {
      $rootScope.countries.forEach(function(country) {
        if (country.countryCode === $scope.countryCode) {
          $scope.country = country;
          return;
        }
      })  
    }

    findCurrentCountry();

    // if user enters through a country URL, find country once API has responded
    $rootScope.$watch('countries', function(newValue, oldValue) {
      findCurrentCountry();
    });

  });
