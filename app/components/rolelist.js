
angular.module('week3App')

.component('roleList', {
    templateUrl: 'components/rolelist.html',
    controller: RoleListController,
    bindings: {
      userroles: '<',
      title: '@'
    }
})
;

RoleListController.$inject = [];
function RoleListController() {
  var $ctrl = this;

  $ctrl.onClickCreateNewRole = function () {
    console.log("onClickCreateNewRole");
  };
}
