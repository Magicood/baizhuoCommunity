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
            $stateProvider.state(recommend);
        }]);
})(window.angular);