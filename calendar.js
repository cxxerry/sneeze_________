const date = new Date();

const viewYear = date.getFullYear();
const viewMonth = date.getMonth();

document.querySelector('.year-month').textContent = `${viewYear}년 ${viewMonth + 1}월`;

const prevLast = new Date(viewYear, viewMonth, 0);
const thisLast = new Date(viewYear, viewMonth+1, 0);

const PLDate = prevLast.getDate();    //지난 달 마지막 날짜
const PLDay = prevLast.getDay();      //지난 달 마지막 요일

const TLDate = thisLast.getDate();
const TLDay = thisLast.getDay();

const prevDates=[];   //날짜들을 담을 배열
const thisDates=[...Array[TLDate+1].keys()].slice(1);    //제일 앞에 있는 0을 없애기 위해 slice(0)
const nextDates=[];

if(PLDay !==6){   //만약 지난 달 마지막 요일이 토요일(6) 이라면 그릴 필요 없으니 조건문 추가
  for(let i=0; i<PLDay+1; i++){   //0부터 지난 달 마지막 요일이 될 때 까지 반복
    prevDates.unshift(PLDate -i);   //지난 달의 마지막 날짜부터 1씩 줄어든 값을
  }                            //unshift 메소드를 통해 prevDates 배열 앞쪽으// 새로운 배열값  추가
}

for(let i=1; i<7-TLDAY; i++){
    nextDates.push(i);    //이번 달 마지막 날짜의 요일을 기준으로 필요한 개수를 파악해서
  }             // 1부터 1씩 증가시키며 nextDates 배열에 하나씩 뒤로 채워 넣는 방식

const dates = prevDates.concat(thisDates, nextDates);   //concat 메서드를 통해 세 배열을 합침

dates.forEach((date, i) => {    //forEach 메서드로 전체 요소들을 돌면서 html 코드로 데이터를 하나씩 수정
  dates[i]='<div class="date">${date}</div>';
})

document.querySelector('.dates').innerHTML = dates.join('');  //join()-> 배열의 모든 원소들을 문자열로 반환 //dates 태그의 innerHTML 프로퍼티에다가, dates 배열에 join 메서드를 호출
