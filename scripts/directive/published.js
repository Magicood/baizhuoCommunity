/**
 * Created by Magic on 2017/3/6.
 */
(function (ag) {
    ag.module("bzModule")
        .directive("publishedSpace",function () {
            return {
                restrict:"EA",
                replace:true,
                templateUrl:"views/published.html",
                scope:{
                }
            }
        })
})(window.angular);