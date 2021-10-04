/**
 * 문제
 *
 * 마구간 정하기 (결정알고리즘)
 *
 */

/**
 * 접근 방법
 *
 * 강의를 참고하였다.
 * 배열을 sorting 한다.
 * 1로 lt를 정의하고 배열의 가장 큰수를 rt로 정의 한다.
 * count 함수에 마굿간 배열과 lt rt 를 더해 반으로 나눈 값을 인자로 넣어 몇개까지 들어가는지 구한다.
 * 이렇게 구해잔 값이 주어진 target number과 같거나 크면 answer를 해당 값으로 정의하고
 * 아니면 rt 값을 새로 정의한다.
 *
 */

function count(stable, distance) {
  let count = 1,
    ep = stable[0];
  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - ep >= distance) {
      count++;
      ep = stable[i];
    }
  }
  return count;
}

function solution(c, stable) {
  let answer;

  stable.sort((a, b) => a - b);

  let lt = 1; // 이 문제같은 경우 1로 초기화 하는것이 좋다
  let rt = arr[arr.length - 1];

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(stable, mid) >= c) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }

  return answer;
}

const arr = [1, 2, 8, 4, 9];

solution(3, arr);
