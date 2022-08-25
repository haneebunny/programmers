// 정수 제곱근 판별

// 못 풀었다ㅠㅠ

// Math.round는 반올림한 수와 가장 가까운 정수값, sqrt는 루트

// 기존에 푼 방법(아마 멘토님 풀이)
function solution(n) {
  var answer = 0;

  let x = 0;
  x = Math.sqrt(n);

  answer = Math.round(x) === Math.sqrt(n) && x > 0 ? (x + 1) * (x + 1) : -1;

  return answer;
}
