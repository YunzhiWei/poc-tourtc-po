
'use strict';

angular.module('week3App')

.component('authorityList', {
    templateUrl: 'components/authoritylist.html',
    controller: AuthorityListController,
    bindings: {
      groups: '<',
      authorities: '<',
      role: '<',
      title: '@'
    }
})
;

AuthorityListController.$inject = ['authorityService'];
function AuthorityListController(authorityService) {
  var $ctrl = this;

  $ctrl.$onInit = function () {
    if ($ctrl.role) {
      console.log("$onInit - role: ", $ctrl.role);
      resetOriginalCode();
    }
  }

  function resetOriginalCode() {
    $ctrl.originalcode = $ctrl.role.code.slice();
    $ctrl.isCodeChanged = isCodeChanged();
  }

  function isCodeChanged() {
    var len = $ctrl.originalcode.length;

    console.log("isCodeChanged(): ", $ctrl.originalcode, $ctrl.role.code);

    for (var i = 0; i < len; i++) {
      if ($ctrl.originalcode[i] != $ctrl.role.code[i]) return true;
    }
    return false;
  }

  $ctrl.isSelected = function (groupid, code) {
    return $ctrl.role.code[groupid] & code;
  }

  $ctrl.onUpdateSelection = function($event, groupid, code) {
    var checkbox = $event.target;
    if (checkbox.checked) {
      $ctrl.role.code[groupid] |= code;
    }
    else {
      $ctrl.role.code[groupid] &= (~code);
    }

    $ctrl.isCodeChanged = isCodeChanged();

    console.log("isCodeChanged: ", $ctrl.isCodeChanged);
  };

  $ctrl.onClickAddGroup = function(name, description) {
    console.log("onClickAddGroup", name);

    authorityService.restAuthorityGroups().save(
      {
        "name": name,
        "description": description
      },
      function() {
        alert("New group added!");
        $ctrl.groups.splice(0, $ctrl.groups.length);
        $ctrl.groups = authorityService.restAuthorityGroups().query();
      }
    );
  };

  $ctrl.onClickDelGroup = function(id) {
    console.log("onClickDelGroup", id);

    authorityService.restAuthorityGroups().delete(
      {
        "id": id
      },
      function() {
        alert("Group deleted!");
        $ctrl.groups.splice(0, $ctrl.groups.length);
        $ctrl.groups = authorityService.restAuthorityGroups().query();
      }
    );
  }

  $ctrl.onClickAddAuthority = function(id, name) {
    console.log("onClickAddAuthority: ", id, name);
  };

  $ctrl.onClickSaveChange = function() {
    console.log("onClickSaveChange: ", $ctrl.role, $ctrl.isCodeChanged);

    authorityService.restUserRoles().update(
      $ctrl.role,
      function() {
        alert("Role setting updated!");
        resetOriginalCode();
      }
    );
  };

  $ctrl.onClickCancelChange = function (id) {
    console.log("onClickCancelChange: ", id);
  };

  $ctrl.onClickCreateNewRole = function () {
    console.log("onClickCreateNewRole");
  };

}
