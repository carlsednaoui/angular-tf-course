angular.module('countries').factory('API', function($http) {
  
  // convenience vars
  var baseUrl = 'http://api.geonames.org/';
  var username = 'carlsed';

  function getCountries() {
    return $http.get( baseUrl + 'countryInfoJSON', { 
      params: { username: username },
      cache: true
    }).then(function(response) {
      return response.data.geonames;
    });
  }

  function getCityPopulation(city, country) {
    return $http.get( baseUrl
                      + 'searchJSON?name_equals='
                      + city
                      + '&country='
                      + country
                      + '&username='
                      + username);
  }

  function getNeighbours(geonameId) {
    return $http.get( baseUrl
                      + 'neighboursJSON?geonameId='
                      + geonameId
                      + '&username='
                      + username);
  }

  function findCountryById(countryId, countries) {
    var country;
    countries.forEach(function(c) {
      if (countryId === c.countryCode) {
        country = c;
        return false;
      }
    })
    return country;
  }

  function testSpec() {
    return "hello";
  }

  return {
    getCountries: getCountries,
    getCityPopulation: getCityPopulation,
    getNeighbours: getNeighbours,
    findCountryById: findCountryById,
    testSpec: testSpec
  };
});
