
'use strict';

angular.module('week3App')

.directive('paymentPlanList', function() {
  var ddo = {
    templateUrl: 'directives/paymentplanlist.html',
    scope: {
      bills: '=theBills',
      title: '@title'
    }
  };

  return ddo;
})

;
