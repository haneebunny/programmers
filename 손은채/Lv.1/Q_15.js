// 이상한 문자 만들기
// 문제 설명
// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// 제한 사항
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

// for 반복문 사용하기

function solution(s) {
  let answer = '';

  let idx = 0;

  // 단어별로 인덱스 값을 저장한다

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      // 공백일 때, 그냥 공백을 넣어주기 (예외처리)

      answer += ' ';

      idx = 0; // idx 를 0으로 초기화
      // 왜냐하면 단어(공백 기준)별로 짝/홀수의 인덱스를 파악해야하니까.
    } else {
      // 공백이 아닐 때,
      answer +=
        idx % 2 === 0
          ? // 짝수 인덱스라면 대문자 추가
            s[i].toUpperCase()
          : // 홀수 인덱스라면 소문자 추가
            s[i].toLowerCase();
      idx++;
      // idx도 하나씩 늘려가자
    }
  }

  return answer;
}

// 2. 메서드 사용하기

function solution(s) {
  const answer = s
    .split(' ')
    // 공백을 기준으로 쪼개서 배열에 저장 (단어를 기준으로)

    .map((word) => {
      return (
        word
          .split('')
          // 문자를 기준으로 쪼개서 배열에 저장

          .map((letter, i) => {
            return i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
            // 인덱스 짝수이면 대문자, 홀수이면 소문자
          })
          .join('')
      );
      // 하나의 문자열로 (붙어서) 단어로 만들어 준다.
    })
    .join(' ');
  // 공백을 기준으로 (띄어서) 문자열을 만들어 준다.
  return answer;
}

// 다른 사람들 풀이 분석하기
// charAt() charAt() 함수는 문자열에서 특정 인덱스에 위치하는 유니코드 단일문자를 반환

function solution(s) {
  let result = '',
    num = 0;
  // 이 num은 어떤 역할을?

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == ' ') {
      result += ' ';
      if (num % 2 === 1) num--;
      continue;

      // 이 if 부분이 없으면 공백이 하나씩 더 늘어난다.
      // num이 홀수이면 하나씩 줄어든다.
      // 정확한 의도는 다시 파악해야 할 듯.

      // ....

      // num은 계속 증가하다가, 공백을 만나면 홀수면 하나 줄이고, 짝수면 유지한다
      // 아마.. 다음 단어의 첫번째 자리가 짝수일 수 있게 하는 것 같다!!!
    }

    if (num % 2 === 0) result += s.charAt(i).toUpperCase();
    // num이 짝수 => 대문자
    else result += s.charAt(i);
    // num이 홀수 =>

    num++;
    // num을 하나씩 증가
  }
  return result;
}

// s.chartAt(i) 를 통해 하나의 요소를 만들어 해당 요소가 ' '일 때를 분리해내거나
// 알파벳을 분리
