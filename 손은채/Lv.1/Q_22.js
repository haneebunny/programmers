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

// 이렇게도 해보면 어떨까?
// 0 ~ 9까지 있는 배열과 비교해서, 없는 것끼리 더하면?

const Array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function solution(numbers) {
  let sum = 0;

  for (let i = 0; i <= 9; i++) {
    if (Array.includes(numbers[i]) === true) {
      delete Array[numbers[i]];
      for (let i = 0; i < Array.length; i++) {
        sum += Array[i];
      }
    }
  }

  return sum;
}

// 최종 배열 Array의 합을 구하려고 했는데,
// delete의 경우 요소를 완전히 없어지는 것이 아니라 배열의 길이는 그대로 남아있는 편이어서
// NaN 나온다... for - if - for 도 중첩되는 것이 좋지 않은 것 같아서 패스. 원본 Array도 훼손되는 것 같다.
