
'use strict';

angular.module('week3App')

.component('authorityList', {
    templateUrl: 'components/authoritylist.html',
    controller: AuthorityListController,
    bindings: {
      title: '@'
    }
})
;

AuthorityListController.$inject = ['authorityService'];
function AuthorityListController(authorityService) {
  var $ctrl = this;

  $ctrl.rolename = "客服";
  $ctrl.selected = ['周边短线','国内长线'];

  $ctrl.groups = authorityService.restAuthorityGroups().query();
  $ctrl.authorities = authorityService.restAuthorities().query();

  $ctrl.isSelected = function (name) {
    return $ctrl.selected.indexOf(name) >= 0;
  }

  $ctrl.updateSelection = function($event, name) {
    var checkbox = $event.target;
    if (checkbox.checked) {
      console.log("checked: ", name);

      if($ctrl.selected.indexOf(name) == -1) {
        $ctrl.selected.push(name);
      }
    }
    else {
      console.log("unchecked: ", name);

      var idx = $ctrl.selected.indexOf(name);

      if(idx >= 0) {
        $ctrl.selected.splice(idx, 1);
      }
    }

    console.log($ctrl.selected);

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
