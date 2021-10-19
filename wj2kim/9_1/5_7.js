/**
 * 아나 그램
 *
 */

/**
 * 문제 접근 방법
 *
 * 앞문제와 마찬가지로 포문을 돌면서 기호를 키값으로 object 에 추가를 한다.
 * 키 값이 있으면 해당 키값으 value 를 ++ 연산 처리한다.
 * 한번 돌떄 두개의 object를 생성한다.
 * 두개의 object 생성이 완료되면 두개의 object key와 value 값이 일치하는지 Object.entries를 통해 확인한다.
 * 하나라도 다를시 return NO 를 해준다.
 *
 */

function solution(arr1, arr2) {
  let answer1 = {},
    answer2 = {};

  if (arr1.length !== arr2.length) {
    return "NO";
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!answer1[arr1[i]]) {
      answer1[arr1[i]] = 1;
    } else {
      answer1[arr1[i]] += 1;
    }
    if (!answer2[arr2[i]]) {
      answer2[arr2[i]] = 1;
    } else {
      answer2[arr2[i]] += 1;
    }
  }

  for (const [key, value] of Object.entries(answer1)) {
    if (answer2[key] !== value) {
      return "NO";
    }
  }

  return "YES";
}

let arr1 = "abaCC";
let arr2 = "Caaab";

solution(arr1, arr2);
