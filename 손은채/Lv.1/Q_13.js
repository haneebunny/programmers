// k번째수
// 문제 설명
// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

// 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

// array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
// 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
// 2에서 나온 배열의 3번째 숫자는 5입니다.
// 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// array의 길이는 1 이상 100 이하입니다.
// array의 각 원소는 1 이상 100 이하입니다.
// commands의 길이는 1 이상 50 이하입니다.
// commands의 각 원소는 길이가 3입니다.

function solution(array, commands) {
  const answer = [];

  // 최종 결과를 담을 빈 배열

  for (let idx = 0; idx < commands.length; idx++) {
    // commands를 콘솔에서 확인하면 [ [], [] ] 의 형태이다 (2차원 배열)
    // 요소 배열의 0번 인덱스를 i , 1번 인덱스를 j, 2번 인덱스를 k
    const i = commands[idx][0];
    const j = commands[idx][1];
    const k = commands[idx][2];

    // i, j, k를 적용해보기
    // array를 자른다 -> index로 적용되기 때문에 2번째자리라면 1번 인덱스,, i - 1을 해준다
    // j에 5가 들어가면 4번 인덱스까지 = 5번째자리 ,, 같으니까 변형 없음
    // 오름차순 정렬하기 a-b
    // 빈 배열에 정렬까지 끝난 배열의 k번째 숫자(인덱스 : k-1)를 밀어넣기
    const result = array.slice(i - 1, j).sort((a, b) => a - b);
    answer.push(result[k - 1]);
  }

  return answer;
}

// map 사용하기
// for 반복문 부분만 map으로 전환한다

function solution(array, commands) {
  let answer = [];

  answer = commands.map((command) => {
    return array.slice(command[0] - 1, command[1]).sort((a, b) => a - b)[
      command[2] - 1
    ];
  });

  return answer;
}

// command를 확인해보면
// [ 2, 5, 3 ][4, 4, 1][1, 7, 3][5, 6, 3];
// 나머지 인덱스부분은 똑같다. i, j, k가 아니라 0,1,2 인덱스로 바로

// Array.prototype.sort()
// sort() 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환
// 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따른다.
