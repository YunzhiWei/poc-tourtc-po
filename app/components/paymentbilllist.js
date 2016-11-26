
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
    paymentBillService.restPaymentPlans().query({bill_number:parseInt(id,10)})
    .$promise.then(
      function(response) {
        $ctrl.paymentPlans = response;
        $ctrl.detailBillId = id;
      },
      function(response) {
        $ctrl.message = "Error: " + response.status + " " + response.statusText;
      }
    );
  }

}
