/**
 * Created by Magic on 2017/3/3.
 */
(function (ag) {
    ag.module("bzModule")
        .config(["$stateProvider",function ($stateProvider) {
            var recommend = {
                name:'home',
                url:'',
                templateUrl:"Url/recommend-url.html"
            };
            var published = {
                name:'publish',
                url:'/published',
                templateUrl:"Url/published-url.html"
            };
            var remark = {
                name:'remark',
                url:'/remark',
                templateUrl:"Url/remark-url.html"
            };
            $stateProvider.state(recommend);
            $stateProvider.state(published);
            $stateProvider.state(remark);
        }]);
})(window.angular);