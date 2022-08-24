//소수 만들기

// 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

function solution(nums) {
  // 소수인지 판별해줄 함수
  function isPrime(num) {
    for (let i = 2; i < num; ++i) {
      if (num % i === 0) return false;
    }
    return true;
  }
  let sum = [];

  // 세 개를 더해서 나올 수 있는 수 push
  for (let i = 0; i < nums.length; ++i) {
    for (let j = i + 1; j < nums.length; ++j) {
      for (let k = j + 1; k < nums.length; ++k) {
        sum.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }
  // sum = [...new Set(sum)];

  let answer = 0;
  sum.map((el) => (answer += isPrime(el) ? 1 : 0));
  return answer;
}
solution([1, 2, 7, 6, 4]); // 4
