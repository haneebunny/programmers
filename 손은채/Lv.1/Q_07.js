// 서울에서 김서방 찾기
// 문제 설명
// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

// 제한 사항
// seoul은 길이 1 이상, 1000 이하인 배열입니다.
// seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
// "Kim"은 반드시 seoul 안에 포함되어 있습니다.

function solution(seoul) {
  const answer = `김서방은 ${seoul.indexOf('Kim')}에 있다`;
  return answer;
}

// 배열에서 위치??라고 해서 이해 못했는데 console.log() 해보니   [ 'Jane', 'Kim' ] 이 나온다. 이 때 , kim의 인덱스가 1이니 1에 있다는 말..
// 그럼 내가 찾고 싶은 것의 index를 찾자
// indexOf() indexOf() 메서드는 호출한 String 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환. 일치하는 값이 없으면 -1을 반환
// Template literals 템플릿 리터럴은 내장된 표현식을 허용하는 문자열 리터럴.

// 반복문 사용하기
function solution(seoul) {
  let answer = 0;

  for (let i = 1; seoul.length > i; i++) {
    if (seoul[i] == 'Kim') {
      answer = i;
      break;
    }
  }
  return '김서방은 ' + answer + '에 있다';
}

// 김서방의 위치 (인덱스) 값을 저장할 변수를 하나 선언하고
// 반복문과 if 를 통해 배열 속에서 김서방을 찾는다.
// 김서방을 찾으면 해당 인덱스 번호를 저장한 후, break
// break break문은 반복문, switch문, 레이블 문과 결합한 곳을 빠져나올 때 사용
