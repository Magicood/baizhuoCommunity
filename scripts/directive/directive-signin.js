/**
 * Created by Administrator on 2017/2/27.
 */
(function (angular) {
    angular.module("bzModule")
        .directive("directiveSignin", function () {
            return {
                restrict: "ECMA",
                scope: {
                    // submit: "&",
                    // formSignin: "=",
                    // checkModel: "=",
                    // fSigninCookie:"&"
                },
                replace: true,
                template: '\
                <form class="form-signin" name="formSignin" ng-submit="submit()" novalidate>\
                    <div class="list">\
                        <h2 class="form-signin-heading">登录</h2>\
                        <label class="item item-input">\
                            <label for="inputAccount" class="input-label">账号</label>\
                            <input type="text" id="inputAccount" placeholder="账号" \
                             ng-model="formSignin.account" name="inputAccount" required autofocus>\
                        </label>\
                        <label class="item item-input">\
                            <label for="inputPassword" class="input-label">密码</label>\
                            <input type="password" id="inputPassword" placeholder="密码" \
                             ng-model="formSignin.password" name="inputPassword" required>\
                        </label>\
                        <div class="checkbox">\
                            <input type="checkbox" id="inputRemMe" ng-model="checkModel" value="remember-me">\
                            <label for="inputRemMe">记住密码30天</label>\
                        </div>\
                    </div>\
                    <button class="button button-block button-positive" \
                     ng-disabled="formSignin.inputAccount.$invalid || formSignin.inputPassword.$invalid;" type="submit">登录</button>\
                </form>',
                compile:function(tEle,tAttrs,transcludeFn) {
                    //这里进行DOM的操作
                    // console.log('compile => ' + tEle.html());
                    //Compile: 用于收集指令，编译模板，可以作用到所有的子指令，
                    // 然后返回一系列的link函数等待执行（只运行一次）；
                    //与link互斥

                    //compile返回的就是link
                    return {
                        pre: function (scope, iElem, iAttrs) {
                            /*作用域，元素，属性等*/
                            // scope.fSigninCookie();
                            // console.log('pre link => ' + iElem.html());
                            // 运行于Compile之后但是在子元素被链接之前执行（运行多次）
                            // 在这里进行Don转换不安全
                            // 之后调用'lihk'h函数将无法定位要链接的元素
                        },
                        post: function (scope, iElem, iAttrs) {
                            scope.fSigninCookie();
                            // console.log('post link => ' + iElem.html());
                            //使用post-link函数来执行业务逻辑,在这个阶段,它已经知道它所有的子指令已经编译完成
                            // 并且pre-link以及post-link函数已经执行完成.
                            //这就是被认为是最安全以及默认的编写业务逻辑代码的原因
                            //主要用于绑定DOM和Scope，这时候可以进行DOM变形或绑定事件。其实PostLink就是Link（运行多次）；
                        }
                    }
                },
                // controller:function ($scope, $element, $attrs) {
                    // $scope.fSigninCookie();
                    // console.log('controller => ' + $element.html());
                    //主要用于与其他指令交互，可以在上面定义一些函数来操作Scope等（运行多次）；
                // }
                controller:"signinController"
            }
        })
})(window.angular);