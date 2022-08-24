// 나누어 떨어지는 숫자 배열

function solution(arr, divisor) {
  let answer = arr.filter((el) => el % divisor === 0);
  // 나누어떨어지는 애들을 filter

  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
  // 걸러진게 없으면 -1을 담은 배열을 리턴, 아니면 sort해서 리턴
}

// 기존에 풀었던 방법
function solution(arr, divisor) {
  console.log(arr, divisor);
  var answer = [];

  answer = arr.filter((el) => el % divisor === 0);
  console.log(answer.length);
  if (!answer.length) answer.push(-1);

  answer.sort(function (a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  });

  return answer;

  console.log(answer);
}

// 내 작명법은 언제나 비슷하구나...
// 이때는 sort 오름차순 검색해서 복사해서 붙여넣기 해서 썼었음
