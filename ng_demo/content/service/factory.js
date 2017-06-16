(function () {
    angular.module('confirmFactoryApp', [])
        .factory('confirmFactory', confirmFactory);

    //Factory 一般创建一个对象，然后在对这个对象添加方法与数据，最后将些对象返回即可。然后注入到Controller。一次实例，全局使用。
    function confirmFactory() {
        var factory = {}
        factory.myFac = function (msg) {
            // console.info(msg);
            alert(msg + "来自 myFac")

        };
        return factory;
    }
})();