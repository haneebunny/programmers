// 정수 제곱근 판별
// 문제 설명
// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// 제한 사항
// n은 1이상, 50000000000000 이하인 양의 정수입니다.

// 처음 시도한 것

function solution(n) {
  //함수를 완성하세요

  for (i = 1; i <= n; i++) {
    if (n % i === 0) {
      return (i + 1) * (i + 1);
    } else {
      -1;
    }
  }
}

// 모든 테스트가 4로 종료되어 버린다. 나누어 떨어지는 약수가 아닌 제곱근을 찾아야 하는데 실수.

// 두 번째 시도

for (i = 1; i <= n; i++) {
  if (i * i === n) {
    return (i + 1) * (i + 1);
  } else {
    -1;
    // return -1;
  }
}

// 제곱근이 있는 테스트는 통과하지만, 제곱근이 없는 경우를 통과하지 못한다. else 부분에서 return을 안해주어서 return -1 로 했더니
// 제곱근이 있는 경우가 -1 이 되버리고, 없는 경우는 return 값이 없었다. for 문이 계속 돌게 되면서 else가 되어버린듯하다.

// 세 번째 시도

function solution(n) {
  let answer = 0;

  for (let i = 1; i * i <= n; i++) {
    if (i * i === n) {
      // 제곱근을 찾은 경우 (제곱의 값이 n과 동일한 경우)
      answer = i + 1;
      // 제곱근에 1 더한 값을
      return answer * answer;
      // 제곱한다.
    }
  }
  // 제곱근을 찾지 못한 경우 (-1 을 리턴)
  return (answer = -1);
}
