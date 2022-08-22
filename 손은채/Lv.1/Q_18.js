// 두 개 뽑아서 더하기
// 문제 설명
// 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// numbers의 길이는 2 이상 100 이하입니다.
// numbers의 모든 수는 0 이상 100 이하입니다.

// for 이중 반복문

function solution(numbers) {
  const answer = [];

  // 빈 배열 준비

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];

      // 이중 for 반복문을 통해서
      // 서로 다른 인덱스에 있는 두 개의 수를 뽑아낸다
      // i 는 인덱스 0부터 , j는 i보다 인덱스 1 크게
      // 그렇게 두 수를 만들어서 두 수끼리 더한다

      if (answer.includes(sum) === false) {
        // 그 합이 답 배열에 들어가 있지 않을 때

        answer.push(sum);
        // 밀어넣기
      }
    }
  }

  return answer.sort((a, b) => a - b);

  // 최종 결과는 오름차순으로
}

// includes() includes() 메서드는 배열이 특정 요소를 포함하고 있는지 판별 => return 값이 T or F 이다
