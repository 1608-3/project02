var app=angular.module('myApp',['ng','ngRoute','ngAnimate']);

//配置控制器
app.config(function($routeProvider){
    $routeProvider
        //登录
        .when('/login',{
            templateUrl:'tpl/login.html',
            controller:'loginCtrl'
        })
        //注册
        .when('/register',{
            templateUrl:'tpl/register.html',
            controller:'registerCtrl'
        })
        //起始页
        .when('/start',{
            templateUrl:'tpl/start.html',
            controller:'startCtrl'
        })
        //产品列表
        .when('/product',{
            templateUrl:'tpl/product.html',
            controller:'productCtrl'
        })
        //产品详情
        .when('/detail',{
            templateUrl:'tpl/detail.html'
        })
        .when('/detail/:pid',{
            templateUrl:'tpl/detail.html',
            controller:'detailCtrl'
        })
        //购物车
        //.when('/cart',{
        //    templateUrl:'tpl/cart.html'
        //})
        .when('/cart',{
            templateUrl:'tpl/cart.html',
            controller:'cartCtrl'
        })
        //订单
        .when('/order',{
            templateUrl:'tpl/order.html'
        })
        .when('/order',{
            templateUrl:'tpl/order.html',
            controller:'orderCtrl'
        })
        //确认订单
        .when('/confirmOrder',{
            templateUrl:'tpl/confirmOrder.html'
        })
        .when('/confirmOrder/:orderId',{
            templateUrl:'tpl/confirmOrder.html',
            controller:'confirmOrderCtrl'
        })
        //查看订单
        .when('/myOrder',{
            templateUrl:'tpl/myOrder.html'
        })
        .when('/myOrder',{
            templateUrl:'tpl/myOrder.html',
            controller:'myOrderCtrl'
        })
        .otherwise({
            redirectTo:'/start'
        })
});

//声明控制器startCtrl
app.controller('startCtrl',['$scope',function($scope){
    $('.carousel').carousel({
        interval: 3000
    });

    /*****返回顶部*****/
    $(window).scroll(function(){
        if($(window).scrollTop()>400){
            $(".toTop").fadeIn(300);
        }else{
            $(".toTop").fadeOut(300);
        }
    })
    $(".toTop").click(function(){
        $('body').animate({scrollTop:0},1000);
    })
}]);

//声明控制器registerCtrl
app.controller('registerCtrl',['$scope','$http','$location',function($scope,$http,$location){
    $scope.nuser='';
    $scope.isExist=true;
    $scope.isRight=false;
    $scope.isCupwd=true;
    $scope.isLittle=true;

    //用户名是否存在
    $scope.blur=function(){
        if($scope.nuser.uname){
            $http.get('data/register.php?uname='+$scope.nuser.uname)
                .success(function(data){
                    if(data.msg=='exist'){
                        $scope.isExist=false;
                        $scope.isRight=false;
                    }else{
                        $scope.isExist=true;
                        $scope.isRight=true;
                    }
                })
        }
    };

    //密码为六位以上
    $scope.Little=function(){
       if($scope.nuser.upwd){
           if($scope.nuser.upwd.length<6) {
               $scope.isLittle = false;
           }else{
               $scope.isLittle=true;
           }
       }
    };

    //两次输入密码是否正确
    $scope.Cupwd=function(){
       if($scope.nuser.upwd1){
           if($scope.nuser.upwd!=$scope.nuser.upwd1){
               $scope.isCupwd=false;
           }else{
               $scope.isCupwd=true;
           }
       }
    };

    //注册结果
    $scope.register=function(){
        $http.get('data/register.php?'+$.param($scope.nuser))
            .success(function(data){
                if(data.msg==='succ'){
                    alert('注册成功');
                    $location.path('/login');
                }else{
                    alert('注册失败');
                }
            })
    }
}]);

//声明控制器loginCtrl
app.controller('loginCtrl',['$scope','$http','$location','$rootScope',function($scope,$http,$location,$rootScope){
    $scope.user='';
    $scope.isOk=true;

    //登录
    $scope.login=function(){
        $http.get('data/login.php?'+$.param($scope.user))
            .success(function(data){
            if(data[0].msg==='ok'){
                sessionStorage['loginName']=$scope.user.uname;
                $rootScope.uname=sessionStorage['loginName'];
                $rootScope.isLog=false;
                $location.path('/start');
            }else{
                console.log('err');
                $scope.isOk=false;
                $rootScope.isLog=true;
            }
        })
    }
}]);

//声明控制器parentCtrl
app.controller('parentCtrl',['$scope','$http','$location','$rootScope','$route',function($scope,$http,$location,$rootScope,$route){
    $rootScope.isLog=true;


    if(sessionStorage['loginName']){
        $rootScope.isLog=false;
        $rootScope.uname=sessionStorage['loginName'];
    }
    //跳转到指定的页面
    $scope.jump=function(arg){
        $location.path(arg);
    }
    //退出登录
    $scope.quit=function(){
        $rootScope.isLog=true;
        //$route.reload('/start');
        $location.path('start');
        sessionStorage.removeItem('loginName');
    }

}]);

//声明控制器productCtrl
app.controller('productCtrl',['$scope','$http',function($scope,$http){
    $scope.hasMore = true;
    $scope.isHas=true;

    $http.get('data/pro_getpage.php').success(function (data) {
        $scope.productList = data;
    });

    //加载更多
    $scope.loadMore = function () {
        $http.get('data/pro_getpage.php?start='+$scope.productList.length)
            .success(function (data) {
                $scope.productList=$scope.productList.concat(data);
                if(data.length < 6){
                    $scope.hasMore = false;
                }
            });
    }

    //关键词查询
    $scope.search=function(){
        $scope.$watch('kw', function () {
            if($scope.kw){
                $http.get('data/pro_getkw.php?kw='+$scope.kw)
                    .success(function (data) {
                        if(data.length==0){
                            $scope.isHas=false;
                            $scope.hasMore = false;
                        }
                        else{
                            $scope.isHas=true;
                            $scope.hasMore = true;
                        }
                        $scope.productList = data;
                    });
            }else{
                $http.get('data/pro_getkw.php')
                    .success(function (data) {
                        $scope.productList = data;
                    });
            }
        });
    }
}]);

//声明控制器detailCtrl
app.controller('detailCtrl',['$scope','$http','$routeParams','$location','$rootScope',function($scope,$http,$routeParams,$location,$rootScope){
    $http.get('data/pro_getid.php?id='+$routeParams.pid)
        .success(function(data){
            $scope.proList=data[0];
            //根据传过来的pid，更改放大镜的背景图片
            var src=$scope.proList.img_sm1;
            $(".l-pic").css("backgroundImage","url("+'images/detail/'+src+")");
        })

    //立即购买
    $scope.toBuy=function(){
        if($rootScope.uname){
            $scope.goBuy={'uname':$rootScope.uname,'pid':$routeParams.pid,'count':$scope.count};
            $http.get('data/to_buy.php?'+ $.param($scope.goBuy))
                .success(function(data){
                   if(data.msg='succ'){
                       $location.path('/cart');
                   }
                })

        }else{
            var r=confirm('您还没有登录,赶紧去登录');
            if(r){
                $location.path('/login');
            }
        }
    }

    //加入购物车
    $scope.cartAdd=function(){
        if($rootScope.uname){
            $scope.cart={'uname':$rootScope.uname,'pid':$routeParams.pid};
            $http.get('data/cart_add.php?'+ $.param($scope.cart))
                .success(function(data){
                   if(data.msg==='succ'){
                       alert('成功添加到购物车，该商品购买数量：'+data.count);
                   }else{
                       alert('添加失败');
                   }
                })

        }else{
            var r=confirm('您还没有登录,赶紧去登录');
            if(r){
                $location.path('/login');
            }
        }
    }

    //count--
    $scope.count=1;
    $scope.countRedu=function(){
        $scope.count--;
        if($scope.count<1){
            $scope.count=1;
        }
    }

    //count++
    $scope.countAdd=function(){
        $scope.count++;
    }

    //评论
    $scope.review=function(){
        $('.review').slideToggle(200);
    }

    //图片切换
    $('body').on('click', '.s_pic li', function () {
        var src = $(this).children('img').attr('ng-src');
        $('.b_pic img').attr('src', src);
        $(".l-pic").css("backgroundImage","url("+src+")");
    });

    //放大镜
    var glass = {
        MAXMASKLEFT: 170, MAXMASKTOP: 170,//保存mask的大小
        MAXLEFT: 453, MAXTOP: 270,//保存mask可用的最大坐标
        init: function () {
            $('.superMask').hover(this.toggle, this.toggle).mousemove(this.moveMask.bind(this));
        },
        moveMask: function (e) {
            var x = e.offsetX;
            var y = e.offsetY;
            var left = x - this.MAXMASKLEFT / 2;
            left = left < 0 ? 0 : left > this.MAXLEFT ? this.MAXLEFT : left;
            var top = y - this.MAXMASKTOP / 2;
            top = top < 0 ? 0 : top > this.MAXTOP ? this.MAXTOP : top;
            $('.mask').css({left: left, top: top});
            $('.l-pic').css('backgroundPosition', -left * 1.6 + 'px ' + -top * 1.6 + 'px');

        },
        toggle: function () {//切换mask的显示和隐藏
            $(".mask").toggle();
            $(".l-pic").toggle();
        }
    }
    glass.init();
}]);

//声明控制器cartCtrl
app.controller('cartCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
    $scope.hasPro=true;
    $scope.sum=0;
    $http.get('data/cart_select.php?uname='+$rootScope.uname)
        .success(function(data){
            if(data.length==0){
                $scope.hasPro=false;
            }else{
                $scope.cartList=data;
                $scope.hasPro=true;
                //商品总计
                for(var i=0;i<$scope.cartList.length;i++){
                    $scope.sum+=$scope.cartList[i].price*$scope.cartList[i].count;
                }

                //删除
                $scope.del=function(pid){
                    var d=confirm('确定要删除该商品？');
                    if(d){
                        $http.get('data/cart_delete.php?pid='+pid)
                            .success(function(data){
                                if(data.msg=='succ'){
                                    $scope.cartList.splice($scope.cartList.indexOf(pid),1);
                                    $scope.sum=0;
                                    if($scope.cartList.length==0){
                                        $scope.hasPro=false;
                                        $scope.sum=0;
                                    }else{
                                        //删除后的商品总计
                                        for(var i=0;i<$scope.cartList.length;i++){
                                            $scope.sum+=$scope.cartList[i].price*$scope.cartList[i].count;
                                        }
                                    }
                                }
                            })
                        }
                    }
            }
        })
}]);

//声明控制器orderCtrl
app.controller('orderCtrl',['$scope','$rootScope','$http','$location',function($scope,$rootScope,$http,$location){
    $scope.order={'uname':$rootScope.uname};
    $scope.submitOrder=function(){
        $http.get('data/order_add.php?'+ $.param($scope.order))
            .success(function(data){
                if(data.msg=='succ'){
                    $location.path('/confirmOrder/'+data['orderId']);
                }else{
                    alert('请填写完订单信息');
                }
            })
    }
}])

//声明控制器confirmOrderCtrl
app.controller('confirmOrderCtrl',['$scope','$routeParams',function($scope,$routeParams){
    $scope.order_id=$routeParams.orderId;
}])

//声明控制器myOrderCtrl
app.controller('myOrderCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
    $scope.hasOrder=true;
    $http.get('data/order_select.php?uname='+$rootScope.uname)
        .success(function(data){
            if(data.length>0){
                $scope.orderList=data;
                $scope.hasOrder=true;
            }else{
                $scope.hasOrder=false;
            }

        })
}])
