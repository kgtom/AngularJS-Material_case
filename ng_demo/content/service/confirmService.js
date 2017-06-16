(function () {
    'use strict';
    angular.module('confirmServiceApp', [])
        .service('confirmService', confirmService);
    confirmService.$inject = ['$http','$sce'];
    //angular中service 用到DI思想,采用单例模式，一次生成，全局使用。
    //this来操作数据、定义函数。

    //writeLog 用来测试
    function confirmService($http,$sce) {


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

            var url = "http://192.168.0.28:820/v1/Develop/test"
            var trustedUrl = $sce.trustAsResourceUrl(url);

            $http.jsonp(trustedUrl, { jsonpCallbackParam: 'JSON_CALLBACK' })
                .success(function (data) {
                    console.log(data.found);
                }).error(function (data) {
                    console.info(data)
                });
            alert("confirmService test....");
        }

    }
})();