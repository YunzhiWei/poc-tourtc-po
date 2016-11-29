
'use strict';

angular.module('week3App')

  // .controller('AuthorityController', ['$scope', 'authorityService', function($scope, authorityService) {
  //
  // }])

  .controller('RoleController', ['$scope', 'roles', function($scope, roles) {

    $scope.userrolelist = roles;

  }])

  .controller('PurchaseOrderController', ['$scope', 'purchaseOrderService', function($scope, purchaseOrderService) {

    $scope.purchaseorders = purchaseOrderService.restPurchaseOrders().query();

  }])

  .controller('PODetailController', ['$scope', '$stateParams', 'purchaseOrderService', function($scope, $stateParams, purchaseOrderService) {

    $scope.purchaseorder = purchaseOrderService.restPurchaseOrders().get({id:parseInt($stateParams.id,10)});
    $scope.poItems = purchaseOrderService.restPOItems().query({purchase_orderId:parseInt($stateParams.id,10)});

    $scope.poItemsTotalCost = function () {
      return $scope.poItems
      .map(function(item) {
        console.log("item cost: ", item.price, " x ", item.copies, " = ", item.price * item.copies);
        return item.price * item.copies;
      })
      .reduce(function(accu, value) {
        console.log("accu: ", accu, "value: ", value);
        return accu + value;
      }, 0);
    }
  }])

  .controller('PaymentPlanController', ['$scope', 'plans', function($scope, plans) {

    $scope.paymentPlans = plans;

    // paymentBillService.restPaymentPlans().query({bill_number:"x"})
    // .$promise.then(
    //   function(response) {
    //     $scope.paymentPlans = response;
    //   },
    //   function(response) {
    //     $scope.message = "Error: " + response.status + " " + response.statusText;
    //   }
    // );

  }])

  .controller('PaymentBillController', ['$scope', '$stateParams', 'paymentBillService', function($scope, $stateParams, paymentBillService) {

    $scope.paymentBills = paymentBillService.restPaymentBills().query({status:$stateParams.status});
    if ($stateParams.status) $scope.viewtitle = $stateParams.status;

  }])

  .controller('HeaderController', ['$rootScope', '$scope', function($rootScope, $scope) {

    var $ctrl = this;
    var cancellers = [];

    $ctrl.$onInit = function () {
      var cancel = $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams, options){
          console.log("stateChangeStart - toState: ", toState);
        }
      );
      cancellers.push(cancel);

      cancel = $rootScope.$on('$stateChangeSuccess',
        function(event, toState, toParams, fromState, fromParams){
          console.log("stateChangeSuccess - toState: ", toState);
          if (toState.name == "app.paymentplan" || toState.name == "app.paymentbill") {
            $ctrl.billdropdownactive = true;
          }
          else {
            $ctrl.billdropdownactive = false;
          }
          if (toState.name == "app.authority") {
            $ctrl.authdropdownactive = true;
          }
          else {
            $ctrl.authdropdownactive = false;
          }
        }
      );
      cancellers.push(cancel);

      cancel = $rootScope.$on('$stateChangeError',
        function(event, toState, toParams, fromState, fromParams, error){
          console.log("stateChangeError - toState: ", toState);
        }
      );
      cancellers.push(cancel);
    };

    $ctrl.$onDestroy = function () {
      cancellers.forEach(function (item) {
        item();
      });
    };

  }])

;
