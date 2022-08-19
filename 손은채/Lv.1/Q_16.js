// 자연수 뒤집어 배열로 만들기
// 문제 설명
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 제한 조건
// n은 10,000,000,000이하인 자연수입니다.

// 반복문

function solution(n) {
  const answer = [];
  n = String(n);
  // n을 문자열로

  for (let i = 0; i < n.length; i++) {
    answer.push(Number(n[i]));
    // n을 다시 숫자로 만들어서 []에 집어넣기
  }

  return answer.reverse();
  // 순서 바꾸기
}

// 메서드 활용해서 풀기
function solution(n) {
  return (
    n
      .toString()
      // 숫자 n을 문자열로
      .split('')
      // 모두 분리한고, 배열로 만든다
      .reverse()
      // 순서를 뒤집는다
      .map((num) => {
        // 해당 요소를 숫자타입으로 바꿔준다
        return Number(num);
      })
  );
}
