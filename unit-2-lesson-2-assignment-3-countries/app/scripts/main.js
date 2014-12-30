angular.module('countries', ['ngRoute', 'ngAnimate'])
  .config(function($routeProvider) {
      $routeProvider.when('/', {
          templateUrl : './templates/home.html'
      }).when('/countries', {
          templateUrl : './templates/countries.html',
          controller : 'CountriesCtrl',
          resolve: {
            countries: function(API) {
              return API.getCountries();
            }
          }
      }).when('/countries/:countryCode', {
          templateUrl : './templates/country.html',
          controller : 'CountryCtrl',
          resolve: {
            country: function(API, $route) {
              return API.getCountries()
                .then(function(countries) {
                  var currentCountryId = $route.current.params.countryCode;
                  return API.findCountryById(currentCountryId, countries);
                })
                .then(function(country) {
                  return API.getCityPopulation(country.capital, country.countryCode)
                  .then(function(response) {
                    country.population = response.data.geonames[0].population;
                    return country;
                  })
                })
                .then(function(country) {
                  return API.getNeighbours(country.geonameId)
                  .then(function(response) {
                    country.neighbours = response.data.geonames;
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
  .controller('CountryCtrl', function($scope, $location, country) {
      $scope.country = country;
      $scope.showCountry = function(countryCode) {
        $location.path('/countries/' + countryCode);
      }
  });
