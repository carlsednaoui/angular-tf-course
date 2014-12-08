angular.module('countries').factory('API', function($http) {

  function getCountries() {
    return $http.get('http://api.geonames.org/countryInfoJSON?username=demo');
  }

  return {
    getCountries: getCountries
  };
});

