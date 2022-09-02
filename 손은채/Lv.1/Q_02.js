// 같은 숫자는 싫어

// 문제 설명
// 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

// arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
// arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
// 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 배열 arr의 크기 : 1,000,000 이하의 자연수
// 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수

// 1. 반복문 사용하기
// 배열의 i번째 요소가 i+1 요소와 같지 않을 때만, 빈 배열에 담는다.

function solution(arr) {
  let answer = [];

  for (i = 0; i <= arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

// filter 사용하기
function solution(arr) {
  const newArr = arr.filter((el, index) => el !== arr[index + 1]);

  return newArr;
}

// 궁금했던 것
// 마지막 인덱스값인 1은 비교대상이없는데 어떻게 맨뒤에 1 붙을 수 있을까?
// 마지막은 인덱스로 참조할 요소가 없어서, undefined가 뜨기 때문에

// 많이 사용하는 배열 내 중복 제거!
// 배열에서 중복제거하는 다른 메서드, set 과 reduce
// 단, 이때는 모든 요소들 중의 중복을 제거하는 것
// 위 문제와는 다름!

function solution1(arr) {
  // Array를 Set으로 변환하기 위해서는 정규 Set 생성자 사용
  const set = new Set(arr);
  // set을 Array로 변환하기 위해 전개 연산자 사용
  const newArr = [...set];

  return newArr;
}

function solution2(arr) {
  const initialValue = [];
  const newArr = arr.reduce(
    (acc, obj) => (acc.includes(obj) ? acc : [...acc, obj]),
    initialValue
  );

  return newArr;
}
