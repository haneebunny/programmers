// 없는 숫자 더하기
// 문제 설명
// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ numbers의 길이 ≤ 9
// 0 ≤ numbers의 모든 원소 ≤ 9
// numbers의 모든 원소는 서로 다릅니다.

// 반복문 사용하기
function solution(numbers) {
  let answer = 0;

  for (let i = 1; i <= 9; i++) {
    if (numbers.includes(i) === false) {
      // numbers에 i가 포함되어있는지 확인한다
      // false일 경우에 answer에 합한다
      answer += i;
    }
  }
  return answer;
}
