angular.module('myApp', [])
  .controller('madLib', function($scope) {
    $scope.data = {};

    // $scope.textInputs = [
    //   {
    //     model: 'maleName',
    //     placeholder: 'male name'
    //   },
    //   {
    //     model: 'jobTitle',
    //     placeholder: 'job title'
    //   },
    //   {
    //     model: 'tediousTask',
    //     placeholder: 'tedious task'
    //   },
    //   {
    //     model: 'dirtyTask',
    //     placeholder: 'dirty task'
    //   },
    //   {
    //     model: 'celebrity',
    //     placeholder: 'celebrity name'
    //   },
    //   {
    //     model: 'uselessSkill',
    //     placeholder: 'useless skill'
    //   },
    //   {
    //     model: 'obnoxiousCelebrity',
    //     placeholder: 'obnoxious celebrity'
    //   },
    // ];

    $scope.verifyGender = function(gender, word) {
      // bumper
      if ( gender === 'male' ) return;

      // swap word
      if ( word === 'he'  ) return 'she';
      if ( word === 'his' ) return 'her';
      if ( word === 'him' ) return 'her';
    }

    $scope.submit = function() {
      debugger;
      if ($scope.generateMadLib.$valid) {
        $scope.state = 'display';  
      } else {

      }
    }

    $scope.reset = function() {
      $scope.data = {};
      $scope.state = 'create';
    }
  });
