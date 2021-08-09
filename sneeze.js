$(document).ready(function(){
  var d = new Date();
  var n = d.getHours();
  if(n > 19 || n < 6){
    document.querySelector('body').style.backgroundColor = '#232323';
    document.querySelector('body').style.color = 'white';
    document.getElementById('menubar_img').src='img/menubar_n.png';
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = 'gray';
      i = i + 1;
    }
  }
  else{
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'black';
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = 'black';
      i = i + 1;
    }
  }
});
let dat = new Date();
const datY = dat.getFullYear();
const datM = dat.getMonth();
const datD = dat.getDate();
let datDy = dat.getDay();
switch(datDy){
  case 0 : datDy = "일";
  break;
  case 1 : datDy = "월";
  break;
  case 2 : datDy = "화";
  break;
  case 3 : datDy = "수";
  break;
  case 4 : datDy = "목";
  break;
  case 5 : datDy = "금";
  break;
  case 6 : datDy = "토";
  break;
}
var datToday = datY+'/'+(datM+1)+'/'+datD+'('+datDy+')';
const datTarget = document.querySelector('.date_today');
datTarget.innerHTML=datToday;


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
