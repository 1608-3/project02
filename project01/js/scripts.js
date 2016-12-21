/****引入头部和尾部*****/
	$(function(){
		$('div#header').load('data/header.php', function(){

			//如果已登录，显示欢迎回来
			if(sessionStorage['LoginName']){
				$('.welcome').html('欢迎回来：'+sessionStorage['LoginName']);
				$('#lg').hide();
				$('.quit').show();
			}

			/*******scroll*******/
			$(window).scroll(function(){
				if($(this).scrollTop()>65){
					$("#nav").addClass('fixed');
				}else
					$("#nav").removeClass('fixed');
			});
		
			/*******下拉框******/
			$('#nav>div>ul>li').hover(function(){
				$(this).addClass('active').siblings('.active').removeClass('active');
				$(this).children('.dropdown').slideDown(300);
			},function(){
				$(this).addClass('active').siblings('.active').removeClass('active');
				$(this).children('.dropdown').slideUp(300);
				});


		});
		$('div#footer').load('data/footer.php');
	});


/*******登陆页面********/
	$("#header").on('click','.log',function(e){
		e.preventDefault();
		location.href='login.html';
	});
	$("#header").on('click','.register',function(e){
		e.preventDefault();
		location.href='register.html';
	});

/*****退出登录******/
$('#header').on('click','.quit',function(e){
	e.preventDefault();
	sessionStorage.removeItem('LoginName');
	alert('退出成功');
	$('.welcome').html('欢迎来到旅行网');
	$('#lg').show();
	$('.quit').hide();
});

/***注册***/
	$(".modal").on('click','.bt-register',function(){
			location.href='register.html';
		});



/****机票、酒店查询***/
	$(".sear li").on("mouseenter","[data-toggle='item']",function(){
		if(!$(this).parent().hasClass("act")){
			$(this).parent().addClass("act").siblings(".act").removeClass("act");
			$($(this).attr("href")).addClass("act").siblings(".act").removeClass("act");
		}
		if(!$(this).hasClass("bk")){
			$(this).parent().addClass("bk").siblings(".bk").removeClass("bk");
		}
	})

/*****toTop*****/
	 $(this).scroll(function(){
		if($(this).scrollTop()>400){
			 $("#toTop").addClass('fade').removeClass('in');		
		}else{
			 $("#toTop").addClass('in').removeClass('fade');
		}
	 })
	 $("#toTop").click(function(){
		$('body').animate({scrollTop:0},1000);
	 })


	/****插入广告关闭***/
	$(".close_1").click(function(){
		$("#insert").fadeOut(300);
	})


	/****境外游*****/
	$('.overbound').on('mouseenter','li a',function(){
		$(this).children('p').hide(300);
		$(this).children('div').children().show(200);
		$(this).children('div').fadeIn(400);
	});
	$('.overbound').on('mouseleave','li a',function(){
		$(this).children('p').show(400);
		$(this).children('div').children().hide(200);
		$(this).children('div').fadeOut(500);
	});
	

	/*****跳转*****/	
	$("#header").on('click','.home',function(){
		$('body').animate({scrollTop:0},1000);
	})
	$("#header").on('click','.section',function(){
		$('body').animate({scrollTop:398},1000);
	})
	$("#header").on('click','.tNotes',function(){
		$('body').animate({scrollTop:1160},1000);
	})
	$("#header").on('click','.Trip',function(){
		$('body').animate({scrollTop:1800},1000);
	})
	$("#header").on('click','.overseas',function(){
		$('body').animate({scrollTop:2500},1000);
	});




/*广告轮播*/
var imgs=[
  {"i":0,"img":"images/01.jpg"},
  {"i":1,"img":"images/02.jpg"},
  {"i":2,"img":"images/03.jpg"},
  {"i":3,"img":"images/04.jpg"},
];
var banner={//封装广告轮播所需的所有属性和方法
	LIWIDTH:0,//保存每个li的宽度
	$parent:null,//保存轮播的父元素
	$imgs:null,//保存轮播的ul imgs元素
	$indexs:null,//保存轮播的ul indexs元素
	DURATION:800,//每次轮播的总时间
	WAIT:2000,//每次自动轮播之间的时间间隔
	timer:null,//保存自动轮播的定时器序号
	canAuto:true,//保存是否可启动自动轮播
	init:function($parent){
		//将$parent保存到$parent属性中
		this.$parent=$parent;
		//为$parent侵入一个class为slider
		this.$parent.addClass("slider");
		//创建ul，class为imgs,保存到$imgs属性中
		this.$imgs=$("<ul class='imgs'></ul>");
		//创建ul, class为indexs,保存到$indexs属性中
		this.$indexs=$("<ul class='indexs'></ul>");
		//在$parent下添加$imgs和$indexs
		this.$parent.append(this.$imgs);
		this.$parent.append(this.$indexs);
		//获得$parent的宽度,转为浮点数,保存在LIWIDTH属性中
		this.LIWIDTH=parseFloat(
			this.$parent.css("width")
		);
		//设置$imgs的宽为LIWIDTH*imgs数组的元素个数
		this.$imgs.css(
			"width",imgs.length*this.LIWIDTH
		);
		//调用updateView方法，在两个ul中动态生成元素
		this.updateView();
		this.myBind();//绑定所有事件
		this.autoMove();//启动自动轮播
	},
	myBind:function(){//所有事件的绑定
		//为$indexs绑定mouseover,只有li能响应事件
		this.$indexs.on("mouseover","li",this,
		  function(e){//e.data->slider
				var $this=$(this);//this->当前li
				//如果当前li没有hover
				if(!$this.hasClass("hover")){
					//用当前li的内容-当前li的兄弟中class为hover的li的内容，保存在变量n中
					//调用slider.move(n)
					e.data.move(
						$this.html()
						 -$this.siblings(".hover").html()	
					);
				}
			}
		);
		//为$parent绑定hover
		this.$parent.hover(
			function(){//进入时停止自动轮播
				//停止定时器,清除timer
				clearTimeout(this.timer);
				this.timer=null;
				this.canAuto=false;//设置canAuto为false
			}.bind(this),
			function(){//移出时重新启动自动轮播
				this.canAuto=true;//设置canAuto为true
				console.log(this.canAuto);
				this.autoMove();//调用autoMove()
			}.bind(this)
		)
	},
	autoMove:function(){//启动一次自动轮播
		//启动一次性定时器, 设置任务函数为move，提前绑定this和1,设置时间间隔为WAIT，将序号保存在timer中
		this.timer=setTimeout(
			this.move.bind(this,1),this.WAIT	
		);
	},
	move:function(n){//计算目标位置，启动动画
		this.$imgs.stop(true);//停止$imgs上所有动画
		if(n>0){//左移
			//让$imgs在DURATION时间内,left变到-n*LIWIDTH
			this.$imgs.animate(
				{left:-n*this.LIWIDTH},
				this.DURATION,
				//在动画结束后修改数组，更新界面
				this.changeImgs.bind(this,n)
			);
		}else{//右移
			//先移动数组，更新界面
			this.changeImgs(n);
			//再启动动画
			this.$imgs.animate({left:0}, this.DURATION);
		}
	},
	changeImgs:function(n){//修改数组，更新界面
		//this->slider
		if(n>0){
			//删除imgs数组开头的n个元素，再拼接到结尾
			imgs=imgs.concat(imgs.splice(0,n));
			this.updateView();//更新页面
			//this.$imgs的left归0
			this.$imgs.css("left",0);
		}else{
			n*=-1;//将n变为正数
			//删除imgs数组结尾的n个元素,拼接到数组开头
			imgs=imgs.splice(imgs.length-(n),n)
				       .concat(imgs);
			this.updateView();//更新页面
			//获得$imgs当前的left值-n*LIWIDTH,保存在新的left中
			var left=parseFloat(
				this.$imgs.css("left")
			)-n*this.LIWIDTH;
			//设置$imgs的left为left
			this.$imgs.css("left",left);
		}
		if(this.canAuto)//调用autoMove再次启动自动轮播
			this.autoMove();
	},
	updateView:function(){//向两个ul中动态添加内容
		//遍历imgs数组中每个元素,同时声明变量liImgs和liIdxs都为空字符串
		for(var i=0,liImgs="",liIdxs="";
				i<imgs.length;
				i++){
			//向liImgs中拼接:
			liImgs+=
				"<li><img src='"+imgs[i].img+"'></li>"
			//向liIdxs中拼接:<li>i+1</li>
			liIdxs+="<li>"+(i+1)+"</li>"
		}//(遍历结束)
		//设置$imgs的html内容为liImgs
		this.$imgs.html(liImgs);
		//设置$indexs的html内容为liIdxs
		this.$indexs.html(liIdxs);
		//在$indexs下找下标和imgs数组中第一个元素的i相同的li，为其添加hover class
		this.$indexs.children("li:eq("+imgs[0].i+")")
			          .addClass("hover");
	},
}
//$("#slider").slider();
//向jquery对象的原型中添加slider插件函数
$.fn.banner=function(){//this->$("#slider")
	//让slider对象在当前父元素中初始化广告轮播功能
	banner.init(this);
}
$("#slider").banner();
	