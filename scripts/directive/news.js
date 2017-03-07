/**
 * Created by Magic on 2017/3/7.
 */
(function (ag) {
    ag.module("bzModule")
        .directive("newsSpace",function () {
            return {
                restrict:"EA",
                replace:true,
                templateUrl:"views/news.html",
                scope:{
                    myActiveSlide:"=",
                    carouselImage:"=",
                    bookInner:"="
                }
            }
        })
})(window.angular);