/**
 * Created by Magic on 2017/3/2.
 */
(function (ag) {
    ag.module("bzModule")
        .controller("bzController",["$scope","$ionicScrollDelegate",
            function ($scope,$scroll) {
                $scope.Top = function () {
                    $scroll.scrollTop(true);
                };
                function lll() {
                    $scope.remarkHost = JSON.parse(localStorage.getItem("host"));
                }
                lll();
            $scope.recommend=[
                {
                userName:"耗子",
                userPhoto:"images/genji.jpg",
                userRemark:"大大缩短去唔去厄齐阿萨德打算自行车擦拭的大大缩短去唔去厄齐阿萨德打算自行车擦拭的大大缩短去唔去厄齐阿萨德打算自行车擦拭的",
                sendDate:"2017-3-7 19:00",
                image:"images/mucanglan.jpg"
            }
            ];
            $scope.count=1;

            $scope.remarkOther=[
                {
                userName:"耗子",
                userPhoto:"images/genji.jpg",
                userRemark:"大大缩短去唔去厄齐阿萨德打算自行车擦拭的大大缩短去唔去厄齐阿萨德打算自行车擦拭的大大缩短去唔去厄齐阿萨德打算自行车擦拭的",
                sendDate:"2017-3-7 19:00",
                image:"images/mucanglan.jpg",
                floor:"2"
            },
                {
                    userName:"魔神",
                    userPhoto:"images/genji.jpg",
                    userRemark:"大大缩短去唔去厄齐阿萨德打算自行车擦拭的大大缩短去唔去厄齐阿萨德打算自行车擦拭的大大缩短去唔去厄齐阿萨德打算自行车擦拭的",
                    sendDate:"2017-3-7 19:00",
                    image:"images/mucanglan.jpg",
                    floor:"3"
                }
            ];
            $scope.loadMoreRemark=function () {
                $scope.$broadcast('scroll.infiniteScrollComplete');
            };
            $scope.noMoreData=false;
        }])
        .controller("recommendController",["$scope",function ($scope) {
            $scope.remarkHostGet=function (host) {
                localStorage.setItem("host",JSON.stringify(host));
            };
        }])
})(window.angular);