// 행렬의 덧셈
// 못 푸는 중

function solution(arr1, arr2) {
  return arr1.map((el1, i) => {
    return arr2.map((el2) => {
      return el1[i] + el2[i];
    });
  });
}

// 이전 풀이

function solution(arr1, arr2) {
  var answer = Array(arr1.length);
  for (let i = 0; i < arr2.length; ++i) {
    answer[i] = new Array(arr2.length);
  }
  for (let i = 0; i < arr1.length; ++i) {
    for (let j = 0; j < arr1.length; ++j) {
      answer[i][j] = arr1[i][j] + j;
    }
  }
  return answer;
}
