// 문자열 다루기 기본
// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.

// 처음에 해본 것

function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (typeof s[i] !== Number) {
      return false;
    }
  }

  return true;
}

// 이렇게 했더니 테스트 문제 1,2번이 모두 false가 나왔다.
// typeof 를 했을 때 모두 'string' 이었던 것..

function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) {
      return false;
    }
  }
  return true;
}

// isNaN() 함수는 어떤 값이 NaN인지 판별한다
// isNaN(s[i])가 true => NaN일 때, false를 리턴하게 한다

// 다른 풀이법

function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }

  const answer = s.split('').filter((num) => {
    // split으로 모든 요소를 분리한다
    // string 타입의 데이터만 남긴 후
    // NaN 값인 데이터 answer에 담는다.
    return isNaN(num);
  });

  return answer.length === 0;

  // answer 배열에 값이 하나라도 들어있다면 false
  // answer 배열이 비어있다면 true
}

// split()  String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눈다
