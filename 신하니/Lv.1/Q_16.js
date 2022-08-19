// 자연수 뒤집어 배열로 만들기

function reverseNumber(n) {
  let array = [];
  n = n.toString();
  for (let i = 0; i < n.length; ++i) {
    array.push(Number(n[i]));
  }
  return array.reverse();
}

reverseNumber(12345); // [5,4,3,2,1]

// 이전에 풀었던 방법

function solution(n) {
  let array = [];
  let answer = [];
  array = String(n).split("");
  console.log(array);
  for (let i = 1; i <= array.length; ++i) {
    answer.push(Number(array[array.length - i]));
  }
  return answer;
}
