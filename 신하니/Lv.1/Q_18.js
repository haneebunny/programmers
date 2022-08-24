// 콜라츠 추측

// 새롭게 풀어보고 싶었는데...! 실패

function solution(num) {
  function Collatz(n) {
    if (n === 1) {
      return n;
    }
    return n % 2 === 0 ? n / 2 : n * 3 + 1;
  }
  let answer = 0;

  while (Collatz(num) !== 1) {
    Collatz(num);
    answer++;
  }
}

solution(8);

// 예전에 풀었던 것

function solution(num) {
  var answer = 0;
  let count = 0;
  while (num !== 1) {
    num % 2 === 0 ? (num /= 2) : (num = num * 3 + 1);
    count++;
  }
  console.log(count);

  return count >= 500 ? -1 : count;
}
