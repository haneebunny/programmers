// 2016년
// 문제 설명
// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

// 입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

// 제한 조건
// 2016년은 윤년입니다.
// 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
function solution(a, b) {
  const days = new Date(2016, a - 1, b).getDay();
  return week[days];
}

// new Date()를 호출하면 새로운 Date 객체가 만들어진다.
// 인수 없이 호출하면 현재 날짜와 시간이 저장된 Date 객체가 반환
// new Date(year, month, date, hours, minutes, seconds, ms)
// 주어진 인수를 조합해 만들 수 있는 날짜가 저장된 객체가 반환(지역 시간대 기준). 첫 번째와 두 번째 인수만 필수값

// year는 반드시 네 자리 숫자. 2013은 괜찮고 98은 괜찮지 않음.
// month는 0(1월)부터 11(12월) 사이의 숫자여야.
// date는 일을 나타내는데, 값이 없는 경우엔 1일로 처리.
// hours/minutes/seconds/ms에 값이 없는 경우엔 0으로 처리.

// getDay() 주어진 날짜의 현지 시간 기준 요일을 반환. 0은 일요일.
