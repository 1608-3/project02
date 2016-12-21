/**
 * Created by Administrator on 2016/11/20.
 */
$(function(){
    $('div#header').load('data/header.php');
    $('div#footer').load('data/footer.php');
})

//背景图片切换
var i=0;
var data=['011.jpg','012.jpg','013.jpg','014.jpg'];
var timer=setInterval(function(){
    var pic=document.querySelector('#pic');
    pic.src = "images/"+data[i];
    i++;
    i==4&&(i=0);
} ,3000);

//返回首页
$('#header').on('click','.home',function(){
   location.href='1_index.html';
});