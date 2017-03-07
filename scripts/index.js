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
                sendDate:"2017-3-7 19:00",
                image:"images/mucanglan.jpg"
            }
            ];
            $scope.count=1;
            $scope.remarkHostGet=function (host) {
                $scope.remarkHost=host;
            };
            $scope.remarkHost={
                userName:"耗子",
                userPhoto:"images/genji.jpg",
                userRemark:"大大缩短去唔去厄齐阿萨德打算自行车擦拭的大大缩短去唔去厄齐阿萨德打算自行车擦拭的大大缩短去唔去厄齐阿萨德打算自行车擦拭的",
                sendDate:"2017-3-7 19:00",
                image:"images/mucanglan.jpg"
            };
            $scope.remarkOther=[{
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
})(window.angular);