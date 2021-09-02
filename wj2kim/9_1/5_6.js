/**
 * 학급 회장
 *
 */

/**
 * 문제 접근 방법
 *
 * 포문을 돌면서 기호를 키값으로 object 에 추가를 한다.
 * 키 값이 있으면 해당 키값으 value 를 ++ 연산 처리한다.
 * object 생성이 완료되면 value 값을 기준으로 오름차순으로 sorting을 하여 첫번째 값을 return 한다
 *
 */

function solution(arr) {
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

let arr = "BACBACCACCBDEDE";

solution(arr);
