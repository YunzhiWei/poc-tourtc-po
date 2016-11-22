
'use strict';

angular.module('week3App')
.service('authorityService', ['$resource', 'baseURL', function($resource, baseURL) {
  this.getAuthorities = function() {
    return $resource(baseURL+"authoritie_groups/:id", null, {'update':{method:'PUT'}});
  };

  this.getUserRoles = function() {
    return $resource(baseURL+"user_roles/:id", null, {'update':{method:'PUT'}});
  };

}])
;
