/*
$.getJSON('파일경로',function(data){
  //data로 할일 ...
});
*/
$.getJSON('https://api.openweathermap.org/data/2.5/weather?id=1843564&appid=7ca1574eb11d651558b11b3dcd9d5670&units=metric',function(data){
    //data로 할일 ...s
    //alert(data.list[0].main.temp_min);
    var $minTemp = data.main.temp_min;      //변수명 minTemp인 최저온도 저장
    var $maxTemp = data.main.temp_max;
    var $cTemp = data.main.temp;
    var $now = new Date($.now());
    var $cDate =$now.getHours() +':'+ $now.getMinutes();
    var $wIcon =data.weather[0].icon;
    var $cHum=data.main.humidity;

    //현재 시각 출력  Date.now(); ==$.now
    //new Date(Date.now());

    //.getFullYear() 년도
    //.getMonth() 0=1월
    // .getDate()
    //.getHours() 시간, .getMinutes() 분
    //   alert($now.getFullYear()+'/'+($now.getMonth()+1)+'/'+$now.getDate()+'/'+$now.getHours() +':'+ $now.getMinutes());
    //A.append(B) A요소의 내용 뒤에 B를 추가
    //A.appendto(B) B요소의 내용의 뒤에 A를 추가
    ////A.prepend(B)  A요소의 내용의 앞에 B를 추가
    //A.prependTo(B) B요소의 내용의 앞에 A를 추가

    $('.clowTemp').append($minTemp);
    $('.chighTemp').append($maxTemp);
    $('.cTemp').append($cTemp);
    $('h1').append($cDate);
    $('.weather_icon').prepend('<img src="https://openweathermap.org/img/wn/'+$wIcon+'.png">');
    $('.cHum').append($cHum);


});
//<img src=" https://openweathermap.org/img/wn/10d@2x.png">
