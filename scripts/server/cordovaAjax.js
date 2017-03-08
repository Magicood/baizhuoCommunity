
(function (ag) {
    ag.module("bzModule")
        .factory("cordovaFuc",["$scope","$http",function ($scope,$http) {
            return {
                ajaxPost:function (content) {
                    var cordovaHttp = cordova.plugin.http;
                    cordovaHttp.post("/http://192.168.0.100:8888/data",content,null,function (res) {
                        try{
                            alert(res.data);
                        }catch(e){
                            
                        }
                    },function () {
                        alert("error");
                    })
                }
            }
        }])
})(window.angular);