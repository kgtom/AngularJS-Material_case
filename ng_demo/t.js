(function(){
 'use strict';
angular.module('inputExample', ['ngMaterial'])
        .controller('ExampleController', ExampleController);
        ExampleController.$inject = ['$scope','$mdDialog'];

 function ExampleController($scope,$mdDialog){
         var vm = this; 
          vm.user = {  };
          vm.showAlert=showAlert;
          vm.showPrompt=showPrompt;
          vm.showConfirm=showConfirm;
          vm.test=test;
            $scope.roomCount = '1';
      //  $scope.customFullscreen = false;
    function test(){
       
        alert("test....");
    }
    //alert dialog 
    function showAlert(ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        // Modal dialogs should fully cover application
        // to prevent interaction outside of dialog
        $mdDialog.show(
        $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title('警告')
            .textContent('确定要这么做吗？')
            .ariaLabel('好吧')
            .ok('Got it!')
            .targetEvent(ev)
        );
    }
    //prompt dialog
    function showPrompt(ev){
        var confirm = $mdDialog.prompt()
      .title('确定要这么做吗？')
      .textContent('输入一个备注信息:')
      .placeholder('备注')
      .ariaLabel('提示')
      .initialValue('本人确定')
      .targetEvent(ev)
      .ok('Okay!')
      .cancel('Rejected');

    $mdDialog.show(confirm).then(function(result) {
     // $scope.status = '您同意' + result + '.';
      alert("同意"+result)
    }, function() {
     alert("拒绝了")
    });
}

//showConfirm dialog
function showConfirm(ev){
    var confirm = $mdDialog.confirm()
          .title('确定执行此操作吗？')
          .textContent('确定后，订单将进行出票；取消后，订单作废！')
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('确定')
          .cancel('取消');

    $mdDialog.show(confirm).then(function() {
       alert("确定")
    }, function() {
      alert("取消")
    });
}
  }
})();