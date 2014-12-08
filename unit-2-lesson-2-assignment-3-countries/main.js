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
  .controller('CountryCtrl', function($scope, $rootScope, $location, $routeParams, API) {
    $scope.countryCode = $routeParams.countryCode;
    $scope.country;

    // find current country
    function updateCountryInfo() {
      $rootScope.countries.forEach(function(country) {
        if (country.countryCode === $scope.countryCode) {
          $scope.country = country;
          return;
        }
      })  

      if ($scope.country) {
        API.getCityPopulation($scope.country.capital, $scope.countryCode)
          .then(function(response) {
            $scope.population = response.data.geonames[0].population;
          });

        API.getNeighbours($scope.country.geonameId)
          .then(function(response) {
            $scope.neighbours = response.data.geonames;
          });  
      }
    }

    updateCountryInfo();

    // if user enters through a country URL, find country once API has responded
    $rootScope.$watch('countries', function(newValue, oldValue) {
      updateCountryInfo();
    });

    $scope.showCountry = function(countryCode) {
      $location.path('/countries/' + countryCode);
    }


  });
