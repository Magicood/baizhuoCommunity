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
            var news = {
                name:'news',
                url:'/news',
                templateUrl:"Url/news-url.html"
            };
            var user = {
                name:'user',
                url:'/user',
                templateUrl:"Url/user-url.html",
                controller:"signinController"
            };

            $stateProvider.state(recommend);
            $stateProvider.state(published);
            $stateProvider.state(remark);
            $stateProvider.state(news);
            $stateProvider.state(user);
        }]);
})(window.angular);