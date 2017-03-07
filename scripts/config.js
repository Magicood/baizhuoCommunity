/**
 * Created by Magic on 2017/3/3.
 */
(function (ag) {
    ag.module("bzModule")
        .config(["$stateProvider",function ($stateProvider) {
            var recommend = {
                name:'home',
                url:'',
                templateUrl:"views/recommend-url.html"
            };
            var published = {
                name:'publish',
                url:'/published',
                templateUrl:"views/published .html"
            };
            $stateProvider.state(recommend);
            $stateProvider.state(published);
        }]);
})(window.angular);