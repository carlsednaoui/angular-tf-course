angular.module('countries').factory('API', function($http) {

  var baseUrl = 'http://api.geonames.org/';
  var username = 'username=carlsed';

  function getCountries() {
    return $http.get( baseUrl
                      + 'countryInfoJSON?'
                      + username);
  }

  function getCityPopulation(city, country) {
    return $http.get( baseUrl
                      + 'searchJSON?name_equals='
                      + city
                      + '&country='
                      + country
                      + '&'
                      + username);
  }

  function getNeighbours(geonameId) {
    return $http.get( baseUrl
                      + 'neighboursJSON?geonameId='
                      + geonameId
                      + '&'
                      + username);
  }

  return {
    getCountries: getCountries,
    getCityPopulation: getCityPopulation,
    getNeighbours: getNeighbours
  };
});

