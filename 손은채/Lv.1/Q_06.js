// 가운데 글자 가져오기
// 문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

//제한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.

function solution(s) {
  const center = Math.floor(s.length / 2);

  if (s.length % 2 === 0) {
    return s[center - 1] + s[center];
  } else {
    return s[center];
  }
}

// 삼항연산자

function solution(s) {
  const center = Math.floor(s.length / 2);

  return s.length % 2 === 1 ? s[center] : s[center - 1] + s[center];
}

// Math는 수학적인 상수와 함수를 위한 속성과 메서드를 가진 내장 객체입니다.
// Math.floor() 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환합니다.
// 2로 나누었을 때 몫 부분을 나타내어, 해당 자리를 가운데라고 생각하면 된다.
