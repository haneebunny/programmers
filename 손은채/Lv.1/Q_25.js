// 행렬의 덧셈
// 문제 설명
// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

function solution(arr1, arr2) {
  const answer = [[]];

  // 행렬의 덧셈 결과를 담을 새 배열

  for (let i = 0; i < arr1.length; i++) {
    // 1. arr1 배열의 전체 배열들을 가져와 돌리기

    for (let j = 0; j < arr1[i].length; j++) {
      // 2. arr1 배열에서 내부 배열들의 데이터를 조회

      const sum = arr1[i][j] + arr2[i][j];
      // 3. 같은 행, 같은 열의 값을 서로 더한 결과 arr1[0][0] + arr2[0][0]

      if (answer[i] === undefined) {
        answer[i] = [];
      }
      // 4. i에 해당되는 인덱스로 접근했을 때 배열이 없을 때는 빈 배열을 생성

      answer[i][j] = sum;
      // 5. 인덱스 값으로 해당 위치에 데이터를 삽입
    }
  }

  return answer;
}

// map
function solution(arr1, arr2) {
  return arr1.map((num1, i) => {
    // arr1에 있는 i번째 배열 => arr1[i]을 반환하고
    return num1.map((num2, l) => {
      // num1 i번째 배열에 다시 한번 map을 돌리면, arr1[i][l]의 값이 num2로 반환되게 된다.
      return num2 + arr2[i][l];

      // 그 숫자에 arr2[i][l]을 더하고 반환
    });
  });
}
