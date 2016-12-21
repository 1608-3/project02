/**
 * Created by Administrator on 2016/11/20.
 */
$('#header').on('click','.home',function(){
    location.href='1_index.html';
});

//背景
var html = '';
function task() {
    for(var i=0; i<30; i++){
        html += `
        <circle cx="${rn(0,1140)}" cy="${rn(0,570)}" r="${rn(5,120)}" fill="${rc(0,255)}" fill-opacity="${Math.random()}">
        </circle>
      `;
    }
    svg.innerHTML = html;
    html='';
}
task();
setInterval(task,3000);

//random number
function rn(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}
//random color
function rc(min, max){
    var r = rn(min,max);
    var g = rn(min,max);
    var b = rn(min,max);
    return `rgb(${r},${g},${b})`;
}