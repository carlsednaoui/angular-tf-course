angular.module('calendarDemoApp', [])
  .controller('DateCtrl', function(Data, $scope) {

    // initialize data
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();

    $scope.date = {
      month: month,
      year: year
    };

    // gather dropdown data
    $scope.months = Data.months;
    $scope.years = Data.years;

    // monitor date change
    $scope.$watchCollection('date', function(date) {
      $scope.selectedDate = new Date(date.year, date.month, 1);
    });

  })
  .directive('calendar', function() {
    return {
      restrict: 'E',
      templateUrl : 'calendar.html',
      scope: { 
        selectedDate: '=',
        date: '='
      },
      link: function(scope, element, attrs) {
        scope.isCurrentMonth = function(date) {
          return date.getMonth() == scope.date.month;
        }

        scope.getDays = function() {
          return CalendarRange.getMonthlyRange(scope.selectedDate).days;
        }

        scope.days = scope.getDays();
      }
    }
  })
  .service('Data', function() {
    var months = ['January',
                      'February',
                      'March',
                      'April',
                      'May',
                      'June',
                      'July',
                      'August',
                      'September',
                      'October',
                      'November',
                      'December'];

    var years = [];
    var timeframe = 100;
    var startYear = (new Date).getFullYear() - 50;

    for(var i=0; i <= timeframe; ++i) {
      years.push( startYear + i );
    }

  return {
    months: months,
    years: years
  }
  })
