
'use strict';

angular.module('week3App')

.directive('paymentPlanList', function() {
  var ddo = {
    templateUrl: 'directives/paymentplanlist.html',
    scope: {
      plans: '<',
      title: '@'
    },
    controller: PaymentPlanListController,
    controllerAs: 'pplist',
    bindToController: true
  };

  return ddo;
})

;

function PaymentPlanListController() {
  var pplist = this;
}
