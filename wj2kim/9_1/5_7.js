/**
 * 아나 그램
 *
 */

/**
 * 문제 접근 방법
 *
 * 앞문제와 마찬가지로 포문을 돌면서 기호를 키값으로 object 에 추가를 한다.
 * 키 값이 있으면 해당 키값으 value 를 ++ 연산 처리한다.
 * 두개의 object 생성이 완료되면 두개의 object key와 value 값이 모두 일치하는지 확인하여 yes or no 를 리턴한다.
 *
 */

function solution(arr1, arr2) {
  let answer = {};

  for (let i = 0; i < [...arr].length; i++) {
    if (!answer[arr[i]]) {
      answer[arr[i]] = 1;
    } else {
      answer[arr[i]] += 1;
    }
  }

  return Object.keys(answer).sort((a, b) => answer[b] - answer[a])[0];
}

let arr1 = "abaCC";
let arr2 = "Caaab";

solution(arr1, arr2);
