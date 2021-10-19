/**
 * 최대 매출
 *
 */

/**
 * 문제 접근 방법
 *
 * 포문을 돌면서 포문의 타겟이 되는 숫자를 기준으로 + 1, + 2 를 하여 sum 을 한다
 * 만약 +1 이나 +2 index 가 없다면 기존 answer 를 리턴한다
 *
 */

function solution(arr, day) {
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i + 2] || !arr[i + 1]) {
      return answer;
    }
    const sum = arr[i] + arr[i + 1] + arr[i + 2];

    if (sum > answer) {
      answer = sum;
    }
  }

  return answer;
}

let arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
let day = 3;

solution(arr, day);
