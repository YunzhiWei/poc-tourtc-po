
angular.module('week3App')

.component('roleList', {
    templateUrl: 'components/rolelist.html',
    controller: RoleListController,
    bindings: {
      userroles: '<',
      title: '@',
      onShowDetails: '&'
    }
})
;

RoleListController.$inject = [];
function RoleListController() {
  var $ctrl = this;

  $ctrl.onClickCreateNewRole = function () {
    console.log("onClickCreateNewRole");
  };

  $ctrl.onClickDetails = function (id) {
    console.log("onClickDetails", id);
    $ctrl.onShowDetails({index:id});
  };

}
