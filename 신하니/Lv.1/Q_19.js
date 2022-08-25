// 두 개 뽑아서 더하기

// 이번에 푼 방법

function solution(numbers) {
  let sums = [];
  function sum(num1, num2) {
    return num1 + num2;
  }

  for (let i = 0; i < numbers.length; ++i) {
    for (let j = i + 1; j < numbers.length; ++j) {
      sums.push(sum(numbers[i], numbers[j]));
    }
  }

  sums = [...new Set(sums)];
  return sums.sort((a, b) => a - b);
}

// from 이란게 있었구나.
// 기존에 푼 게 더 맞는 것 같다는 생각이 든다.
// 함수는 한 번 이용해보고 싶었음

// 기존 풀이 방법

function solution(numbers) {
  var arr = [];
  let answer = [];
  //   answer = numbers.filter(number => false === answer.includes(number))
  // console.log(numbers.filter(number => answer.includes(number)))
  //   return answer;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        arr.push(numbers[i] + numbers[j]);
      }
    }
  }
  console.log(arr);
  answer = Array.from(new Set(arr));
  return answer.sort((a, b) => a - b);
}
