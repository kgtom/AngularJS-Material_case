(function () {
    'use strict';
    angular.module('confirmServiceApp', [])
        .service('confirmService', confirmService);
    confirmService.$inject = ['$http','$sce','$window'];
    //angular中service 用到DI思想,采用单例模式，一次生成，全局使用。
    //this来操作数据、定义函数。

    //writeLog 用来测试
    function confirmService($http,$sce,$window) {


        //根据http 获取
        this.getData = function () {
            // return $http.get("https://www.baidu.com/")
            //     .then(getDataComplete)
            //     .catch(getDataFailed);

            // function getDataComplete(response) {
            //     return response.data.results;
            // }
            // function getDataFailed(error) {
            //     console.info("api failed for getData:" + error.data)
            // }

            // $http.jsonp("https://www.baidu.com?jsonp=JSON_CALLBACK")
            //     .success(function (data) {

            //         var dd = data;
            //     })
            //     .error(function (error) {
            //         var dd = error;
            //     });
//Add the following immediately before making a jsonp request.
var c = $window.angular.callbacks.counter.toString(36);

$window['angularcallbacks_' + c] = function (data) {
    $window.angular.callbacks['_' + c](data);
    delete $window['angularcallbacks_' + c];
};
            //var url = "http://192.168.0.28:820/v1/Develop/test"
            var url = "http://192.168.0.28:820/v1/Develop/test?callback=JSON_CALLBACK";
            var trustedUrl = $sce.trustAsResourceUrl(url);

            $http.jsonp(trustedUrl)
                .success(function (data) {
                    console.log(data);
                }).error(function (data) {
                    console.info(data)
                });
            alert("confirmService test....");
        }

    }
})();