
'use strict';

angular.module('week3App')

.component('paymentBillList', {
    templateUrl: 'components/paymentbilllist.html',
    controller: PaymentBillListController,
    bindings: {
      bills: '<',
      title: '@'
    }
})
;

PaymentBillListController.$inject = [];
function PaymentBillListController() {
  var $ctrl = this;
}
