
'use strict';

angular.module('week3App')
.constant("baseURL","http://localhost:3000/")
.service('authorityService', ['$resource', 'baseURL', function($resource, baseURL) {
  this.restAuthorityGroups = function() {
    return $resource(baseURL+"authority_groups/:id", null, {'update':{method:'PUT'}});
  };

  this.restAuthorities = function() {
    return $resource(baseURL+"authorities/:id", null, {'update':{method:'PUT'}});
  };

  this.restUserRoles = function() {
    return $resource(baseURL+"user_roles/:id", {id: '@id'}, {'update':{method:'PUT'}});
  };

}])

.service('purchaseOrderService', ['$resource', 'baseURL', function($resource, baseURL) {

  this.restPurchaseOrders = function() {
    return $resource(baseURL+"purchase_orders/:id", null, {'update':{method:'PUT'}});
  };

  this.restPOItems = function() {
    return $resource(baseURL+"po_items/:id", null, {'update':{method:'PUT'}});
  };

}])

.service('paymentBillService', ['$resource', 'baseURL', function($resource, baseURL) {

  this.restPaymentPlans = function() {
    return $resource(baseURL+"payment_plans/:id", null, {'update':{method:'PUT'}});
  };

  this.restPaymentBills = function() {
    return $resource(baseURL+"payment_bills/:id", null, {'update':{method:'PUT'}});
  };

}])

;
