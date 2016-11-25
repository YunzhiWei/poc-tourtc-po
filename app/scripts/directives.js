
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

  pplist.totalamountofselecteditems = 0;

  pplist.updateSelection = function($event, id) {
    var checkbox = $event.target;
    if (checkbox.checked) {
      console.log("checked: ", id);
      pplist.totalamountofselecteditems += pplist.plans[id].amount;
    }
    else {
      console.log("unchecked: ", id);
      pplist.totalamountofselecteditems -= pplist.plans[id].amount;
    }
    console.log("total amount: ", pplist.totalamountofselecteditems);
  };

}
