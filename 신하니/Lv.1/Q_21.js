// 하샤드 수

// 이번에 푼 방법

function solution(x) {
  let array = String(x).split("");
  let sum = array.reduce((acc, cur) => acc + cur, 0);
  return x % sum === 0 ? true : false;
}

// 기존에 풀었던 방법

function solution(x) {
  let answer = true;
  let array = [];
  array = String(x).split("");
  let sum = 0;
  for (let i = 0; i < array.length; ++i) {
    sum += array[i];
  }
  return x % sum === 0 ? true : false;
  return answer;
}
