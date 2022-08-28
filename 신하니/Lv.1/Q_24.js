// 내적

// 이번에 푼 방법
function solution(a, b) {
  let answer = 0;
  for (let i = 0; i < a.length; ++i) {
    answer += a[i] * b[i];
  }
  return answer;
}


// 이전에 풀었던 방법 

function solution(a, b) {
  var answer = 0;
  for (let i = 0; i < a.length; ++i) {
    console.log(a[i] * b[i]);
    // 누적해
    answer += a[i] * b[i];
  }
  return answer;
}

// 다른 사람 풀이
function solution(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}