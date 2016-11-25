
'use strict';

angular.module('week3App')

.component('paymentPlanList', {
    templateUrl: 'directives/paymentplanlist.html',
    controller: PaymentPlanListController,
    bindings: {
      plans: '<',
      title: '@'
    }
})
;

PaymentPlanListController.$inject = [];
function PaymentPlanListController() {
  var $ctrl = this;

  $ctrl.totalamountofselecteditems = 0;

  $ctrl.updateSelection = function($event, id) {
    var checkbox = $event.target;
    if (checkbox.checked) {
      console.log("checked: ", id);
      $ctrl.totalamountofselecteditems += $ctrl.plans[id].amount;
    }
    else {
      console.log("unchecked: ", id);
      $ctrl.totalamountofselecteditems -= $ctrl.plans[id].amount;
    }
    console.log("total amount: ", $ctrl.totalamountofselecteditems);
  };

}
