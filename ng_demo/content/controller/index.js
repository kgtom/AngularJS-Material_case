(function () {
  'use strict';
  angular.module('confirmApp', ['ngMaterial', 'loggerServiceApp','confirmFactoryApp','confirmServiceApp'])
    //.facotry('confirmFactory',confirmFactory)
    .controller('confirmController', confirmController);
  confirmController.$inject = ['$scope', '$mdDialog', 'loggerSvc', 'confirmFactory', 'confirmService'];

  function confirmController($scope, $mdDialog, loggerSvc, confirmFactory, confirmService) {
    var vm = this;
    vm.user = {};
    vm.showAlert = showAlert;
    vm.showPrompt = showPrompt;
    vm.showConfirm = showConfirm;
    vm.cancle = cancle;
    vm.getDataApi=getDataApi;

    //cancle 
    function cancle() {
      loggerSvc.writeLog("loggerSvc test....");
      confirmFactory.myFac("myFactory test....")
      alert("cancle....");
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
          .title('提示')
          .textContent('恭喜您，进入出票流程')
          //.ariaLabel('好吧')
          .ok('OK!')
          .targetEvent(ev)
      );
    }
    //prompt dialog
    function showPrompt(ev) {
      var confirm = $mdDialog.prompt()
        .title('确定要这么做吗？')
        .textContent('输入一个备注信息:')
        .placeholder('备注')
        .ariaLabel('提示')
        .initialValue('本人确定')
        .targetEvent(ev)
        .ok('Okay!')
        .cancel('Rejected');

      $mdDialog.show(confirm).then(function (result) {
        // $scope.status = '您同意' + result + '.';
        alert("同意" + result)
      }, function () {
        alert("拒绝了")
      });
    }

    //showConfirm dialog
    function showConfirm(ev) {
      var confirm = $mdDialog.confirm()
        .title('确定执行此操作吗？')
        .textContent('确认后，订单将进行出票！')
        .ariaLabel('Lucky day')
        .targetEvent(ev)
        .ok('确认')
        .cancel('晚一点再确认');

      $mdDialog.show(confirm).then(function () {
        //alert("恭喜您，进入出票流程")
        showAlert()
      }, function () {
        alert("记得早点确认")
      });
    }

    //get data by http api
    //通过委派到service和factory中来延迟controller中的逻辑。
    function getDataApi() {
      return confirmService.getData();

    }
  }
})();