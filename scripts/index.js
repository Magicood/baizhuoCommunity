/**
 * Created by Magic on 2017/3/2.
 */
(function (ag) {
    ag.module("bzModule")
        .controller("bzController",["$scope","$ionicScrollDelegate",
            function ($scope,$scroll) {
            $scope.Return = function () {
                window.history.back();
            };
            $scope.showDiv = true;
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

            $scope.myActiveSlide = 1;
            $scope.carouselImage = [
                {
                    imageSrc: "images/11.jpg"
                }, {
                    imageSrc: "images/12.jpg"
                }, {
                    imageSrc: "images/13.jpg"
                }];
            $scope.bookInner = [
                {
                    bookSrc: "images/11.jpg",
                    one: "习近平参加上海代表团审议",
                    three: "1小时前更新",
                    four: "3月5日下午，中共中央总书记、国家主席、中央军委主席习近平来到他所在的十二届全国人大五次会议上海代表团参加审议。"
                }, {
                    bookSrc: "images/12.jpg",
                    one: "ofo、摩拜等共享单车免费大战",
                    three: "11小时前更新",
                    four: "单车平台掀起的“免费大战”，看起来是“烧钱”，实则是“圈钱”。"
                }, {
                    bookSrc: "images/13.jpg",
                    one: "李克强作政府工作报告",
                    three: "8小时前更新",
                    four: "国务院总理李克强作政府工作报告"
                }
                , {
                    bookSrc: "images/14.jpg",
                    one: "“双面”董明珠：公心与私心",
                    three: "6小时前更新",
                    four: "董明珠是个著名企业家，但算不上一个受人尊敬的企业家。"
                }
                , {
                    bookSrc: "images/15.jpg",
                    one: "吴亦凡是'毒'还是'药'",
                    three: "8小时前更新",
                    four: "把小鲜肉捧上神坛或者踩入地狱，中国的烂片大势也改不了"
                }
                , {
                    bookSrc: "images/16.jpg",
                    one: "年轻人普遍变贫穷，原因何在？",
                    three: "8小时前更新",
                    four: "变穷的年轻人会转而追求一种“职场小确幸”，自己呆着舒服就万事大吉，其他一概不管"
                }
            ];

            $scope.isShowDiv = function () {
                $scope.showDiv = false;
            }
        }])
        .controller("recommendController",["$scope",function ($scope) {
            $scope.remarkHostGet=function (host) {
                localStorage.setItem("host",JSON.stringify(host));
                $scope.$parent.fdsf = host;
            };
        }])
})(window.angular);