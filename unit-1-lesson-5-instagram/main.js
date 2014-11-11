angular.module('myApp', ['ngAnimate'])
  .controller('instaSearch', function($scope, $http) {
    $scope.searchInstagram = function() {
      var url = 'https://api.instagram.com/v1/tags/'
              + $scope.search
              + '/media/recent';

      var query = {
        client_id: 'd5b1dcbfb2bf4f3096d1a346ae2ae2ea',
        callback: 'JSON_CALLBACK'
      };
      
      $http({
        url: url,
        method: 'JSONP',
        params: query
      })
        .success(function(res) {
          if (res.meta.error_type) {
            $scope.resultMessage = res.meta.error_message;
            return;
          }
          
          var prevSearch = $scope.search;
          var len = res.data.length;

          $scope.search = '';
          $scope.resultMessage = 'We found '
                               + len
                               + ' results for "'
                               + prevSearch
                               + '"';

          $scope.images = res.data;
        })
        .error(function() {
          $scope.resultMessage = 'There was an error, please try again.';
        })
    }
  });
