// 내적
// 문제 설명
// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.

// 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

// 제한사항
// a, b의 길이는 1 이상 1,000 이하입니다.
// a, b의 모든 수는 -1,000 이상 1,000 이하입니다.

// 처음 고민했던 것
// 이중 for 문? 그런데 그렇게 되면 a인덱스 0123----- b인덱스 0123---- 를 다 구해서 곱하다보니, 같은 인덱스라는게 안 맞음
// for문 하나로 해결, a,b 배열의 i번째 인덱스로

function solution(a, b) {
  let answer = 0;

  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }

  // answer에 계속 더해주기

  return answer;
}

// map쓰기

function solution(a, b) {
  const answer = a
    .map((num, i) => {
      return num * b[i];
    })

    // 우선 a[i], b[i] 를 곱한 값들의 배열을 하나 만들고

    .reduce((el, cu) => {
      return el + cu;
    }, 0);

  // 해당 배열 속 요소로 reduce (합)

  return answer;
}

// only reduce

function solution(a, b) {
  const answer = a.reduce((acc, cur, i) => {
    return acc + cur * b[i];
  }, 0);

  return answer;
}

// acc : 누적 값
// cur : a[i] // 1 2 3 4
// cur * b[i] === a[i]*b[i]
// i : 인덱스 // 0 1 2 3
