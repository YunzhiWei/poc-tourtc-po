
'use strict';

angular.module('week3App')

  .controller('AuthorityController', ['$scope', 'authorityService', function($scope, authorityService) {

    $scope.rolename = "客服";
    $scope.selected = ['周边短线','国内长线'];

    $scope.authorityGroups = authorityService.restAuthorityGroups().query();
    $scope.authorities = authorityService.restAuthorities().query();
    $scope.userroles = authorityService.restUserRoles().query();

    $scope.isSelected = function (name) {
      return $scope.selected.indexOf(name) >= 0;
    }

    $scope.updateSelection = function($event, name) {
      var checkbox = $event.target;
      if (checkbox.checked) {
        console.log("checked: ", name);

        if($scope.selected.indexOf(name) == -1) {
          $scope.selected.push(name);
        }
      }
      else {
        console.log("unchecked: ", name);

        var idx = $scope.selected.indexOf(name);

        if(idx >= 0) {
          $scope.selected.splice(idx, 1);
        }
      }

      console.log($scope.selected);

    };

    $scope.onClickAddGroup = function() {
      console.log("onClickAddGroup");
    };

    $scope.onClickAddAuthority = function(id) {
      console.log("onClickAddGroup: ", id);
    };

    $scope.onClickSaveChange = function(id) {
      console.log("onClickSaveChange: ", id);
    };

    $scope.onClickCancelChange = function (id) {
      console.log("onClickCancelChange: ", id);
    };

    $scope.onClickCreateNewRole = function () {
      console.log("onClickCreateNewRole");
    };

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

  .controller('PaymentPlanController', ['$scope', 'paymentBillService', function($scope, paymentBillService) {

    $scope.paymentPlans = paymentBillService.restPaymentPlans().query();

  }])

;
