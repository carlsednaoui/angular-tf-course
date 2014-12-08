angular.module('countries').factory('API', function($http) {

  function getCountries() {
    return $http.get('http://api.geonames.org/countryInfoJSON?username=carlsed');
  }

  return {
    getCountries: getCountries
  };
});

