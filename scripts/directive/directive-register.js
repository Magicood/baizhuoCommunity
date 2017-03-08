/**
 * Created by Administrator on 2017/3/2.
 */
(function (angular) {
    angular.module("bzModule")
        .directive("directiveRegister", function () {
            return {
                restrict: "ECMA",
                scope: {
                    
                },
                replace: true,
                templateUrl: "./views/register.html",
                compile:function(tEle,tAttrs,transcludeFn) {
                    return {
                        post: function (scope, iElem, iAttrs) {

                        }
                    }
                }
            }
        })
})(window.angular);