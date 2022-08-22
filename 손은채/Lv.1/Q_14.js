// 문자열 내 p와 y의 개수
// 문제 설명
// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// 제한사항
// 문자열 s의 길이 : 50 이하의 자연수
// 문자열 s는 알파벳으로만 이루어져 있습니다.

// 1. for 반복문
function solution(s) {
  s = s.toLowerCase();

  // toLowerCase() toLowerCase() 메서드는 문자열을 소문자로 변환해 반환
  // toUpperCase() toUpperCase() 메서드는 문자열을 대문자로 변환해 반환

  let p = 0;
  let y = 0;

  // p, y를 담을 변수 준비

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'p') {
      p++;
    } else if (s[i] === 'y') {
      y++;
    }
  }

  // s[i]가 p이면 p의 갯수를 올리고, y면 y의 갯수를 올리자

  return p === y;

  // 최종적으로 p와 y가 같은지 확인해서
  // 같다면 true , 다르다면 false가 반환되게
}

// forEach 풀이과정 복습하기

function solution(s) {
  let obj = {};
  const answer = s
    .toLowerCase()
    .split('')
    .forEach((str) => {
      console.log(str);
      // s의 요소 => 'p''p''o''o''o''y''y'
      console.log(obj[str]);
      // obj가 빈 객체이기 때문에 undefined가 나옴

      // 따라서, undefined가 처음 나왔을 때 => obj[str] = 1 을 하여 해당 객체에 지정한다
      if (obj[str] === undefined) {
        obj[str] = 1;

        // 결과 : { p: 1 }, { p: 1, o: 1 }, { p: 1, o: 1, y: 1 }
      } else {
        obj[str]++;

        // 그 이후에 나오는 obj[str]이은 이미 1로 지정되어 있으니 undefined가 나오지 않음
        // 대신 나올 때 마다 지정된 숫자를 올린다.
        // { p: 2 } { p: 2, o: 2 } { p: 2, o: 3 } { p: 2, o: 3, y: 2 }
      }
    });

  // 최종적으로 obj안에 있는 p와 y의 value를 비교해본다
  return obj.p === obj.y;
}

// 간단한 풀이

function solution(s) {
  return (
    s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length
  );
}

// s 를 "P"라는 기준으로 분리하면 [ '', '', 'OOOYY' ]
// s 를 "Y"라는 기준으로 분리하면 [ 'PPOOO', '', '' ]
// 반환된 배열의 길이로 비교할 수 있다.

// 삼항연산자

function solution(s) {
  return [...s.toLowerCase()].reduce((acc, cur) => {
    console.log(acc);
    // 0 , 외에는 undefined
    console.log(cur);
    // 'p' 'p' ''o' 'o' 'o' 'y' 'y'

    if (cur === 'p') return acc + 1;
    // p 이면 acc를 1 올리고
    else if (cur === 'y') return acc - 1;
    // y이면 acc를 1 내린다

    return acc;

    // p와 y값이 같다면 0 일 것이다
  }, 0)
    ? false
    : true;

  // 0은 false 이기 때문에 => : 뒤에 있는 true가 반환
  // 그 외 숫자는 : 앞에 있는 false ( p와 y의 갯수가 차이가 있다는 것 )
}

// 다른 사람 풀이를 보고

function solution(s) {
  return (
    s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length
  );
}

// 이 함수의 문제점 => p, y가 없는 문자열이 들어갔을 때 true가 나온다
// p,y가 없을 때를 예외처리 해주어야 함

function solution(s) {
  if (s.toUpperCase().indexOf('P' || 'Y') === -1) {
    return true;
  } else
    return (
      s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length
    );
}

// 하지만 이 방식에서 3번 실패 (...)
// 다시 생각해볼 것
