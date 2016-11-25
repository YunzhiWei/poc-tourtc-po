
'use strict';

angular.module('week3App')

.component('paymentPlanList', {
    templateUrl: 'directives/paymentplanlist.html',
    controller: PaymentPlanListController,
    bindings: {
      plans: '<',
      planlistlength: '<',
      ischeckboxenable: '<',
      title: '@'
    }
})
;

PaymentPlanListController.$inject = [];
function PaymentPlanListController() {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    $ctrl.totalamountofselecteditems = 0;
    $ctrl.totalamount = 0;
  };

  $ctrl.$onChanges = function (changeObj) {
    console.log("changeObj: ", changeObj);
    console.log("changeObj.plans: ", changeObj.plans);
    console.log("changeObj.planlistlength: ", changeObj.planlistlength);
    console.log("$ctrl.plans: ", $ctrl.plans, $ctrl.plans[0], $ctrl.plans[1]);
    console.log("totalamount: ", $ctrl.totalamount);

    if (changeObj.planlistlength.currentValue > 0) {
      console.log("map reduce");
      $ctrl.totalamount = $ctrl.plans
      .map(function(item) {
        console.log("item.amount: ", item.amount);
        return item.amount;
      })
      .reduce(function(accu, value) {
        console.log(accu, " + ", value, " = ", accu + value);
        return accu + value;
      }, 0);
    }
  }

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
