// 제일 작은 수 제거하기

// 이렇게 풀려다 실패함

function solution(arr) {
  let min = Math.min(...arr);
  arr.sort((a, b) => b - a);
  arr.pop();
  console.log(arr);
  return arr.length !== 0 ? arr : [-1];
}

// 배열을 sort 해서 빼는 거라 실패 ㅎ !

// 다시 품

function solution(arr) {
  let min = Math.min(...arr);
  let answer = arr.filter((el) => el > min);
  return answer.length !== 0 ? answer : [-1];
}

// 다른 사람 풀이 보니까 splice로 그 인덱스에 있는 걸 빼주기도 한다!

// 기존에 푼 방법
// arr[0] === 10 이..이렇게 풀었다고? 당황스럽네
// 첫번째 애를 com으로 잡아놓고 최소값을 for문으로 구하고 있다.

function solution(arr) {
  var answer = [];
  if (!arr || arr[0] === 10) return [-1];
  let com = arr[0];
  for (let i = 0; i < arr.length; ++i) {
    if (com > arr[i]) com = arr[i];
  }
  answer = arr.filter(function (el) {
    return el > com;
  });
  return answer;
}
