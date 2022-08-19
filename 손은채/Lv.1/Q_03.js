// 핸드폰 번호 가리기

// 문제 설명
// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// 제한 조건
// phone_number는 길이 4 이상, 20이하인 문자열입니다.

// 1. padStart와 substring 사용하기
function solution(phone_number) {
  let answer = '';

  answer = answer.padStart(phone_number.length - 4, '*');
  // *******
  answer += phone_number.substring(phone_number.length - 4);
  // 4444, 8888
  // *******4444, *****8888
  return answer;
}

// padStart() : padStart() 메서드는 문자열이 지정된 길이에 도달할 때까지 현재 문자열을 다른 문자열로 채운다
// phone_number.length - 4 에 도달할 때까지 * 로 채운다

// substring() : substring()메서드는 string 시작 인덱스와 끝 인덱스 사이 또는 문자열의 끝 부분을 반환
// phone_number.length - 4 에서부터 끝까지를 반환한 것을 answer 변수에 더해준다

// 2-1. 반복문 사용하기

function solution(phone_number) {
  let answer = '';

  for (let i = 0; i < phone_number.length; i++) {
    if (i < phone_number.length - 4) {
      answer += '*';
    } else {
      answer += phone_number[i];
    }
  }

  return answer;
}

// 2-2. 삼항 연산자로 바꿔보기

function solution(phone_number) {
  let answer = '';

  for (let i = 0; i < phone_number.length; i++) {
    i < phone_number.length - 4 ? (answer += '*') : (answer += phone_number[i]);
  }

  return answer;
}

// 다른 사람 풀이 공부

function solution(phone_number) {
  const result = '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);

  return result;
}

// repeat() : repeat()메서드는 호출된 문자열의 지정된 수의 복사본을 포함하고 함께 연결된 새 문자열을 생성하고 반환한다.
// result에 * 가 phone_number.length - 4 갯수만큼 복사되고, phone_number.slice(-4)에 해당되는 부분이 더해진다.
// slice() : slice()메서드는 문자열의 섹션을 추출하고 원래 문자열을 수정하지 않고 새 문자열로 반환한다.
// - 의 경우 뒤에서부터 => -4 이면, 뒤에서부터 4개 (뒤에서부터 3번째 인덱스)
