/**
 * Created by Magic on 2017/3/2.
 */
(function (ag) {
    ag.module("bzModule")
        .controller("bzController",["$scope",function ($scope) {
            $scope.recommend=[{
                userName:"耗子",
                userPhoto:"images/genji.jpg",
                userRemark:"大大缩短去唔去厄齐阿萨德打算自行车擦拭的大大缩短去唔去厄齐阿萨德打算自行车擦拭的大大缩短去唔去厄齐阿萨德打算自行车擦拭的",
                sendDate:"19:00",
                image:"images/mucanglan.jpg"
            }
            ];
        }])
})(window.angular);