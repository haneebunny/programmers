// 자릿수 더하기
// 문제 설명
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 제한사항
// N의 범위 : 100,000,000 이하의 자연수

// 1. 반복문

function solution(n) {
  const result = String(n).split('');
  let answer = 0;

  for (let i = 0; i < result.length; i++) {
    answer += Number(result[i]);
  }
  return answer;
}

// n을 문자열로 만든 뒤 => split을 통해 하나씩 잘라내고 => 다시 숫자로 만들어서 => 더하기!

// 1-2. split 안써도

function solution(n) {
  result = String(n);
  let answer = 0;
  for (let i = 0; i < n.length; i++) {
    answer += Number(result[i]);
  }
  return answer;
}

// split 안써도 n[i]을 하면 하나씩 나온다

// 2. reduce

function solution(n) {
  const answer = String(n)
    .split('')
    .reduce((acc, cur) => {
      return acc + Number(cur);
    }, 0);
  return answer;
}

// for 반복문 안쓰고, split으로 나온 배열을 바로 reduce를 통해 누적값을 구한다

// 3. map 돌려보기

function solution(n) {
  let result = 0;
  String(n)
    .split('')
    .map((el) => (result += parseInt(el)));

  return result;
}

// parseInt() parseInt() 함수는 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환
// result에 누적으로 더해서, 최종 값을 리턴
