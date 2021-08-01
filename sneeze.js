$(document).ready(function(){
  var d = new Date();
  var n = d.getHours();
  if(n > 25|| n < 6){
    document.querySelector('body').style.backgroundColor = '#232323';
    document.querySelector('body').style.color = 'white';
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
