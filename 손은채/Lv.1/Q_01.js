// 문자열을 정수로 바꾸기

// 문제 설명
// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

// 제한 조건
// s의 길이는 1 이상 5이하입니다.
// s의 맨앞에는 부호(+, -)가 올 수 있습니다.
// s는 부호와 숫자로만 이루어져있습니다.
// s는 "0"으로 시작하지 않습니다.
// 입출력 예
// 예를들어 str이 "1234"이면 1234를 반환하고, "-1234"이면 -1234를 반환하면 됩니다.
// str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.

function solution(s) {
  console.log(Number(s), typeof Number(s));

  return Number(s);
}

// 다른 사람 풀이 중  인상 깊었던 것

function solution(str) {
  return +str;
}

function solution(str) {
  return str / 1;
}

// 문자열과 숫자열의 사칙연산은 숫자가 나온다

const str = parseInt;
console.log(str('-1234'));

// paresInt () 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환
