// x만큼 간격이 있는 n개의 숫자
// 문제 설명
// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 -10000000 이상, 10000000 이하인 정수입니다.
// n은 1000 이하인 자연수입니다.

// 1. 반복문 사용하기
function solution(x, n) {
  const answer = [];

  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }

  return answer;
}

// 빈 배열을 하나 만들어두고
// n의 수만큼 for 반복문을 실행하자. 이 때 n은 자연수일테니, 1에서부터 시작하자
// 반복하면서 x에 곱하고, 그 값을 빈 배열에 푸시

// 2. map 사용하기

function solution(x, n) {
  const answer = new Array(n).fill(1).map((num, i) => (num + i) * x);

  return answer;
}
// 새로운 배열을 만들 것
// 1을 n의 갯수만큼 가지고 있는 새 배열을 만든다
// [1,1,1,1,1] / [1,1,1] 이런식
// 이와 같은 배열에 map 사용한다

// map 구성요소
// num = 요소 ( 1 )
// i = 인덱스 번호 ( 0 ~ )
// num + 1 = n ( 1부터 , n까지를 나타낼 수 있게 됨)
// x = 입력 값 x
// n*x인 셈
