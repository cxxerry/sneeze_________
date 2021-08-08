//Date 객체 생성
let date = new Date();    //goToday에서 date 값 재할당 const=> let

const renderCalender = () => {
  const viewYear = date.getFullYear();
  const viewMonth = date.getMonth();

  document.querySelector('.year-month').textContent = `${viewYear}년 ${viewMonth + 1}월`;

  const prevLast = new Date(viewYear, viewMonth, 0);
  const thisLast = new Date(viewYear, viewMonth + 1, 0);

  const PLDate = prevLast.getDate();
  const PLDay = prevLast.getDay();

  const TLDate = thisLast.getDate();
  const TLDay = thisLast.getDay();

//Dates 기본 배열들
  const prevDates = [];
  const thisDates = [...Array(TLDate + 1).keys()].slice(1);
  const nextDates = [];

//prevDates 계산
  if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
    }
  }

//nextDates 계산
  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i);
  }

//concat 이용해 Dates 합치기
  const dates = prevDates.concat(thisDates, nextDates);
  const firstDateIndex = dates.indexOf(1);
  const lastDateIndex = dates.lastIndexOf(TLDate);

//Dates 정리
  dates.forEach((date, i) => {
    const condition = i >= firstDateIndex && i < lastDateIndex + 1
                      ? 'this'    //이번 달
                      : 'other';    //나머지 달
    dates[i] = `<div class="date"><span class=${condition}>${date}</span></div>`;
  });

//Dates 그리기
  document.querySelector('.dates').innerHTML = dates.join('');

  //오늘 날짜
  const today = new Date();
  //viewMonth와 viewYear가 today의 데이터와 같은지 비교
  if(viewMonth === today.getMonth() && viewYear===today.getFullYear()){
    for(let date of document.querySelectorAll('.this')){
      //단항연산자 +를 이용해 문자열=>숫자 변경한 뒤 오늘 날짜와 비교
      if(+date.innerText===today.getDate()){
        date.classList.add('today');
        break;  //오늘 날짜는 하나밖에 없기 때문에 반복 필요x
      }
    }
  }
  };

renderCalender();


//지난 달로 이동
const prevMonth = () => {
  date.setMonth(date.getMonth() - 1);
  renderCalender();
};
//다음 달로 이동
const nextMonth = () => {
  date.setMonth(date.getMonth() + 1);
  renderCalender();
};
//오늘로 이동
const goToday = () => {
  date = new Date();
  renderCalender();
};
