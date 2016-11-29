
'use strict';

angular.module('week3App')

.component('authorityList', {
    templateUrl: 'components/authoritylist.html',
    controller: AuthorityListController,
    bindings: {
      groups: '<',
      authorities: '<',
      title: '@'
    }
})
;

AuthorityListController.$inject = [];
function AuthorityListController() {
  var $ctrl = this;

  $ctrl.rolename = "客服";
  $ctrl.tempcode = [0, 1, 7];

  $ctrl.isSelected = function (groupid, code) {
    console.log("tempcode: ", $ctrl.tempcode, "code: ", code);
    return $ctrl.tempcode[groupid] & code;
  }

  $ctrl.updateSelection = function($event, groupid, code) {
    var checkbox = $event.target;
    if (checkbox.checked) {
      console.log("checked: ", groupid, code);
      $ctrl.tempcode[groupid] |= code;
    }
    else {
      console.log("unchecked: ", groupid, code);
      $ctrl.tempcode[groupid] &= (~code);
    }

    console.log($ctrl.tempcode);
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
