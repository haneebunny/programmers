// 약수의 합
// 문제 설명
// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// 제한 사항
// n은 0 이상 3000이하인 정수입니다.

// 1. 반복문 활용
function solution(n) {
  let answer = 0;

  for (i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
}

// n을 i로 나누었을 때 0이라면 i는 n의 약수
// 약수들을 계속 변수 answer에 더하자

// 2. reduce 사용하기

function solution(n) {
  return new Array(n).fill(1).reduce((acc, cur, i) => {
    const num = cur + i;
    return acc + (n % num === 0 ? num : 0);
  }, 0);
}

// n의 수 만큼 1로 채운 배열을 만든다.
// 새 변수 num은 현재 수 + 인덱스 => 1씩 증가하고 있음
// 누적 값인 acc 에 n/num 했을 때 0이면 n의 약수이므로 acc에 더해준다
// 아닐 때는 0을 더해주어 합에 포함되지 않게
//
