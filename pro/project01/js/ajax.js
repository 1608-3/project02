/******用户注册*****/
$('#button').click(function(){
	var nuname=$('[name="nuname"]').val();
	var nupwd=$('[name="nupwd"]').val();
	$.ajax({
		type:'POST',
		url:'data/register.php',
		data:{"nuname":nuname,"nupwd":nupwd},
		success:function(txt,msg,xhr){
			if(txt==='err'){
				alert('注册失败');
			}else if(txt==='ok'){
				alert('注册成功');
				location.href='1_index.html';
			}
		}
	});
});


/*****登录*****/
$('#bt-login').click(function(){
	var uname=$('[name="uname"]').val();
	var upwd=$('[name="upwd"]').val();
	$.ajax({
		type:'GET',
		url:'data/login.php',
		data:{"uname":uname,"upwd":upwd},
		success:function(txt,msg,xhr){
			if(txt==='err'){
				$('.modal .alert').html('用户名或密码错误');
			}else if(txt==='ok'){
				$('.welcome').html('欢迎回来:'+uname);
				sessionStorage['LoginName']=uname;
				location.href='1_index.html';
			}
		}
	});
});



/*****目的地*****/
$('.subtitle').on('click','a',function(e){
	e.preventDefault();
	$(this).parent().addClass('active').siblings('.active').removeClass('active');
	var type=$(this).attr('href');
	$.ajax({
		type:'GET',
		url:'data/scene.php',
		data:{"type":type},
		success:function(list){
			var html='';
			$.each(list,function(i,p){
				html+=`
				<div id="change">
					<a href="#">
						<img src="${p.pic}">
						<figcaption>
							<h3>${p.title}<i>${p.price}</i></h3>
							<p>${p.content}</p>
						</figcaption>
					</a>
				</div>
			`;
			});
			$('#Scene').html(html);
		}
	});
})


/****tNotes****/
$.ajax({
	type:'GET',
	url:'data/tNotes.php',
	success:function(list){
		var html='';
		$.each(list,function(i,t){
			html+=`
				<li class="clear">
					<a href='#'>
						<div class='bg-rt'><img src="${t.pic1}"></div>
						<div class="img lf">
							<img src="${t.pic}">
						</div>
						<div class="intr lf">
							<h3>${t.title}</h3>
							<p class='sp'>${t.content}</p>
							<p>
								地点：<span>${t.site}</span>
								浏览次数：<span>${t.browse}</span>
							</p>
						</div>
					</a>
				</li>
			`;
		});
		$('#tNotes').html(html);
	}
});

/*****自驾游***/
$.ajax({
	type:'GET',
	url:'data/trip.php',
	success:function(list){
		var html='';
		$.each(list,function(i,r){
			html+=`
				<dl>
					<dt>
						<a href="#">
							<img src="${r.pic}">
						</a>
					</dt>
					<dd><a href="#">${r.title}</a></dd>
					<dd>${r.intr}</dd>
				</dl>
			`;
		});
		$('#Trip').html(html);
	}
});

/*****境外游*****/
$.ajax({
	type:'GET',
	url:'data/overbound.php',
	success:function(list){
		var html='';
		$.each(list,function(i,z){
			html+=`
				<li>
					<a href="#">
						<img src="${z.pic}">
						<p>${z.cname}</p>
						<div>
							<span>${z.title}</span>
						</div>
					</a>
				</li>
			`;
		});
		$('.overbound').html(html);
	}
});

/***foot***/
$.ajax({
	url:'data/service.php',
	success:function(list){
		var html='';
		$.each(list,function(i,s){
			html+=`
				<dl>
					<dt>
						<span class="${s.class}"></span>
					</dt>
					<dd>${s.title}</dd>
					<dd><a href="#">${s.subtitle1}</a></dd>
					<dd><a href="#">${s.subtitle1}</a></dd>
					<dd><a href="#">${s.subtitle1}</a></dd>
				</dl>
			`;
		});
		$('#b1').html(html);
	}
});