
'use strict';

angular.module('week3App')

.service('menuFactory', ['$resource', 'baseURL', function($resource, baseURL) {

  // In Angular, when we declare a service instead of factory,
  // Angular will create a new object for us automatically
  // So, we can use this to get the new object created for use
  // And no need to create the object by ourselves.

  this.getDishes = function() {
    return $resource(baseURL+"dishes/:id", null, {'update':{method:'PUT'}});
  };

  // implement a function named getPromotion
  // that returns a selected promotion.

  this.getPromotions = function () {
    return $resource(baseURL+"promotions/:id", null, {'update':{method:'PUT'}});
  };

  this.feedbacks = function () {
    return $resource(baseURL+"feedback/:id", null, {'update':{method:'PUT'}});
  };

}])

.factory('corporateFactory', ['$resource', 'baseURL', function($resource, baseURL) {

    var corpfac = {};

    // Implement two functions, one named getLeaders,
    // the other named getLeader(index)
    // Remember this is a factory not a service

    corpfac.getLeaders = function() {
      return $resource(baseURL+"leadership/:id", null, {'update':{method:'PUT'}});
    };

    return corpfac;

}])
;
