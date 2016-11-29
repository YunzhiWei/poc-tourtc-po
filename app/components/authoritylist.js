
'use strict';

angular.module('week3App')

.component('authorityList', {
    templateUrl: 'components/authoritylist.html',
    controller: AuthorityListController,
    bindings: {
      groups: '<',
      authorities: '<',
      rolecode: '<',
      title: '@'
    }
})
;

AuthorityListController.$inject = [];
function AuthorityListController() {
  var $ctrl = this;

  $ctrl.isSelected = function (groupid, code) {
    console.log("rolecode: ", $ctrl.rolecode, "code: ", code);
    return $ctrl.rolecode[groupid] & code;
  }

  $ctrl.updateSelection = function($event, groupid, code) {
    var checkbox = $event.target;
    if (checkbox.checked) {
      console.log("checked: ", groupid, code);
      $ctrl.rolecode[groupid] |= code;
    }
    else {
      console.log("unchecked: ", groupid, code);
      $ctrl.rolecode[groupid] &= (~code);
    }

    console.log($ctrl.rolecode);
  };

  $ctrl.onClickAddGroup = function() {
    console.log("onClickAddGroup");
  };

  $ctrl.onClickAddAuthority = function(id) {
    console.log("onClickAddAuthority: ", id);
  };

  $ctrl.onClickSaveChange = function(id) {
    console.log("onClickSaveChange: ", id);
  };

  $ctrl.onClickCancelChange = function (id) {
    console.log("onClickCancelChange: ", id);
  };

  $ctrl.onClickCreateNewRole = function () {
    console.log("onClickCreateNewRole");
  };

}
