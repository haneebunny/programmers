// 없는 숫자 더하기

// 이번에 푼 방법(꼼수,,,)

function solution(numbers) {
  let sum = numbers.reduce((acc, cur) => acc + cur, 0);
  console.log(sum);

  return 45 - sum;
}

// 기존에 푼 방법이 맞는 것 같습니다...

// 기존에 푼 방법

function solution(numbers) {
  var answer = 0;

  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) answer += i;
  }

  return answer;
}
