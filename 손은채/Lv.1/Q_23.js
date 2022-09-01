// 제일 작은 수 제거하기
// 문제 설명
// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// 제한 조건
// arr은 길이 1 이상인 배열입니다.
// 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

// ----

// 최댓값, 최소값 구하는 방법은?

// Math.max()와 Math.min() :  입력값으로 받은 0개 이상의 숫자 중 가장 큰 / 작은 숫자를 반환한다.

// arr [4,3,2,1]
// ...arr 4,3,2,1

// 따라서 Math.min(arr)을 했을 경우 NaN이 리턴되고 => 당연이 최소값이 없었으니 원본의 배열이 그대로 리턴
// Math.min(...arr)을 해야 최소값이 리턴된다.

function solution(arr) {
  // console.log(arr);
  // console.log(...arr);

  const min = Math.min(...arr);

  // console.log(min);

  const answer = arr.filter((num) => {
    return num !== min;
  });

  // arr에서 min과 같지 않은 것들로만 새로운 배열을 반환한다.

  // console.log(answer);

  return answer.length === 0 ? [-1] : answer;

  // 그렇게 새롭게 반환된 answer 배열에 아무것도 없으면 (length 가 0이면) -1 반환, 아니면 answer 반환
}
