angular.module('countries', ['ngRoute', 'ngAnimate'])
  .config(function($routeProvider) {
      $routeProvider.when('/', {
          templateUrl : './home.html'
      }).when('/countries', {
          templateUrl : './countries.html',
          controller : 'CountriesCtrl',
          resolve: {
            countries: function(API) {
              return API.getCountries().then(function(response) {
                return response.data.geonames;
              });
            }
          }
      }).when('/countries/:countryCode', {
          templateUrl : './country.html',
          controller : 'CountryCtrl',
          resolve: {
            country: function(API, $route) {
              return API.getCountries().then(function(response) {
                return response.data.geonames;
              }).then(function(countries) {
                var country;

                countries.forEach(function(_country) {
                  if (_country.countryCode === $route.current.params.countryCode) {
                    country = _country;
                    return;
                  }
                })

                return country;
              }).then(function(country) {
                return API.getCityPopulation(country.capital, country.countryCode)
                  .then(function(response) {
                    country.population = response.data.geonames[0].population;
                    return country;
                  })
              });
            }
          }
      }).otherwise({
        redirectTo : '/'
      })
  })
  .controller('CountriesCtrl', function($scope, $location, countries) {
    $scope.countries = countries;

    $scope.showCountry = function(countryCode) {
      $location.path('/countries/' + countryCode);
    }
  })
  .controller('CountryCtrl', function($scope, $rootScope, $location, $routeParams, API, country) {

    $scope.country = country;
    // $scope.countryCode = $routeParams.countryCode;
    // $scope.country;

    // // find current country
    // function updateCountryInfo() {
    //   $rootScope.countries
    //   })  

    //   if ($scope.country) {
    //     API.getCityPopulation($scope.country.capital, $scope.countryCode)
    //       .then(function(response) {
    //         $scope.population = response.data.geonames[0].population;
    //       });

    //     API.getNeighbours($scope.country.geonameId)
    //       .then(function(response) {
    //         $scope.neighbours = response.data.geonames;
    //       });
    //   }
    // }
    // updateCountryInfo();

    // // if user enters through a country URL, find country once API has responded
    // $rootScope.$watch('countries', function(newValue, oldValue) {
    //   updateCountryInfo();
    // });

    // $scope.showCountry = function(countryCode) {
    //   $location.path('/countries/' + countryCode);
    // }
  });
