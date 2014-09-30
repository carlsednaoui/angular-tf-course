angular.module('myApp', [])
  .controller('madLib', function($scope) {
    $scope.inputs = {};

    $scope.models = [
      {
        model: 'maleName',
        placeholder: 'male name',
        type: 'text'
      },
      {
        model: 'jobTitle',
        placeholder: 'job title',
        type: 'text'
      },
      {
        model: 'tediousTask',
        placeholder: 'tedious task',
        type: 'text'
      },
      {
        model: 'dirtyTask',
        placeholder: 'dirty task',
        type: 'text'
      },
      {
        model: 'celebrity',
        placeholder: 'celebrity',
        type: 'text'
      },
      {
        model: 'uselessSkill',
        placeholder: 'useless skill',
        type: 'text'
      },
      {
        model: 'obnoxiousCelebrity',
        placeholder: 'obnoxious celebrity',
        type: 'text'
      },
      {
        model: 'hugeNumber',
        placeholder: 'huge number',
        type: 'text'
      },
      {
        model: 'adjective',
        placeholder: 'adjective',
        type: 'text'
      }
    ];

    $scope.getGender = function(word) {
      if (word == 'hisHer') {
        return ($scope.gender == 'male') ? 'his' : 'her';
      }

      if (word == 'heShe') {
        return ($scope.gender == 'male') ? 'he' : 'she';
      }
    }

  });
