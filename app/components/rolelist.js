
angular.module('week3App')

.component('roleList', {
    templateUrl: 'components/rolelist.html',
    controller: RoleListController,
    bindings: {
      title: '@'
    }
})
;

RoleListController.$inject = ['authorityService'];
function RoleListController(authorityService) {
  var $ctrl = this;

  $ctrl.userroles = authorityService.restUserRoles().query();

  $ctrl.onClickCreateNewRole = function () {
    console.log("onClickCreateNewRole");
  };
}
