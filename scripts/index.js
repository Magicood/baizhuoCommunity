/**
 * Created by Magic on 2017/3/2.
 */
(function (ag) {
    ag.module("bzModule")
        .controller("bzController",["$scope",function ($scope) {
            $scope.a="123";
        }])
})(angular);