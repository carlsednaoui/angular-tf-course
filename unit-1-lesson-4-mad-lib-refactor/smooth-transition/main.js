angular.module('myApp', ['ngAnimate'])
  .controller('madLib', function($scope) {
    $scope.data = {};

    $scope.textInputs = [
      {
        model: 'maleName',
        placeholder: 'male name'
      },
      {
        model: 'jobTitle',
        placeholder: 'job title'
      },
      {
        model: 'tediousTask',
        placeholder: 'tedious task'
      },
      {
        model: 'dirtyTask',
        placeholder: 'dirty task'
      },
      {
        model: 'celebrity',
        placeholder: 'celebrity name'
      },
      {
        model: 'uselessSkill',
        placeholder: 'useless skill'
      },
      {
        model: 'obnoxiousCelebrity',
        placeholder: 'obnoxious celebrity'
      },
    ];

    // {{ verifyGender(data.gender, 'him') }}
    $scope.verifyGender = function(gender, word) {
      if ( gender === 'male' ) {
        if ( word === 'heshe'  ) return 'he';
        if ( word === 'hisher' ) return 'his';
        if ( word === 'himher' ) return 'him';
      } else {
        if ( word === 'heshe'  ) return 'she';
        if ( word === 'hisher' ) return 'her';
        if ( word === 'himher' ) return 'her';        
      }
    }

    console.log($scope);
    $scope.submit = function() {
      console.log($scope.generateMadLib);
      console.log($scope);

      // if ($scope.generateMadLib.$valid) {
      //   $scope.state = 'display';
      //   $scope.submitted = false;
      // } else {
      //   console.log('errors');
      //   debugger;
      // }
    }

    $scope.reset = function() {
      $scope.data = {};
      $scope.state = 'create';
    }
  });
