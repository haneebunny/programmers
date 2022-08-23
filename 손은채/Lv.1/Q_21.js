// 하샤드 수
// 문제 설명
// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 1 이상, 10000 이하인 정수입니다.

function solution(x) {
  const result = String(x)
    // 자리수의 합 구하기
    // x 를 문자열로 만들어서
    .split('')
    // 자리수 따로 분리한다. 10 => {'1', '0'}
    .reduce((acc, cur) => {
      // 합 (시작은 0)
      return acc + Number(cur);
      // 10이면 0 + 1 = 1 + 0 = 1
      // 11이면 0 + 1 = 1 + 1 = 2
    }, 0);

  return x % result === 0;
  // x를 자리수의 합 (result)로 나누었을 때 나누어떨어지면 true, 아니면 false
}

// 첫 시도에 Number로 다시 데이터 타입을 바꾸는 것을 split("") 후 바로 하려고 했다가 약간 꼬임이 있었다.
// 배열에다가 Number를 해버려서 NaN값이 나와버림

// 2. 반복문으로 풀기

function solution(x) {
  let sum = 0;
  // 자릿수의 합의 총 값을 저장하는 변수

  x = String(x);
  // 숫자 타입의 x 값을 문자열 타입으로 변환
  for (let i = 0; i < x.length; i++) {
    sum += Number(x[i]);
    // 0번째 인덱스 부터 반복해서 sum에 더하기
  }

  return x % sum === 0;
}
