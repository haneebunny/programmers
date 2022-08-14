// 문자열 내림차순으로 배치하기
// 문제 설명
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

// 제한 사항
// str은 길이 1 이상인 문자열입니다.

// 1. 반복문 사용하기

function solution(s) {
  const answer = [];

  for (let i = 0; i < s.length; i++) {
    answer.push(s[i]);
  }

  answer.sort((a, b) => {
    // if (a < b) return 1;
    // if (a > b) return -1;
    // return 0;

    // 내림차순 짧게 쓰기
    return a > b ? -1 : 1;
  });

  return answer.join('');
}

// 문자열 s를 알파벳 단위로 나누어 새로운 배열을 만들어준다
// 새 배열을 정렬한다 sort() - 내림차순으로
// join('')을 통해 배열을 하나의 문자열로 반환
// join() join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만든다.

// [추가] 문자열 내용을 배열로 만드는 방법
// 1) for 반복문
// const answer = [];
// for( let i = 0; i < s.length; i++ ) {
//     answer.push(s[i]);
// }

// 2) 문자열의 문자들을 분리하여 배열로 변환 Spread Operator
//  const arr = [...s];

// 3) 문자열의 문자들을 분리하여 배열로 변환 Array.from()
// const arr =  Array.from(s)

// 4) 구분자로 문자열을 분리하여 배열로 변환하는 split()
// const arr = str.split(' ');
