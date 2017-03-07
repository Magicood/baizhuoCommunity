/**
 * Created by Magic on 2017/3/2.
 */
(function (ag) {
    ag.module("bzModule")
        .directive("recommendDir",function () {
            return {
                restrict:"EA",
                replace:true,
                templateUrl:"views/recommend.html",
                scope:{
                    recommend:"=",
                    remarkHostGet:"&"
                },
                controller:"recommendController"
            }
        })
})(window.angular);