/**
 * Created by lenovo on 2017/3/6.
 */
(function (ag) {
    ag.module("bzModule")
        .directive("remarkDir",function () {
            return {
                restrict:"EA",
                replace:true,
                templateUrl:"views/remark.html",
                scope:{
                    remarkHost:"=",
                    remarkOther:"=",
                    countFloor:"&",
                    count:"="
                }
            }
        })
})(window.angular);