
'use strict';

angular.module('week3App')

.service('authorityService', ['$resource', 'baseURL', function($resource, baseURL) {
  this.restAuthorityGroups = function() {
    return $resource(baseURL+"authority_groups/:id", null, {'update':{method:'PUT'}});
  };

  this.restAuthorities = function() {
    return $resource(baseURL+"authorities/:id", null, {'update':{method:'PUT'}});
  };

  this.restUserRoles = function() {
    return $resource(baseURL+"user_roles/:id", null, {'update':{method:'PUT'}});
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

;
