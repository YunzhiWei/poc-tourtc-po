
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

PaymentBillListController.$inject = ['paymentBillService'];
function PaymentBillListController(paymentBillService) {
  var $ctrl = this;

  $ctrl.showDetails = function (id) {
    $ctrl.detailBillId = id;
    $ctrl.paymentPlans = paymentBillService.restPaymentPlans().query({bill_number:parseInt(id,10)});
  }

}
