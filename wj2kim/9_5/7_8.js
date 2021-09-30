/**
 * 문제
 *
 * 회의실 배정
 *
 */

/**
 * 접근 방법
 *
 * 끝나는 시간을 기준으로 정렬을 한다 만약 같다면 시작시간을 기준으로 정렬한다.
 * 순회를 통해 시작시간을 이전 끝나는 시간과 비교를 하여 참일경우 count를 증가시킨다.
 *
 */

function solution(arr) {
  let end = 0;
  let count = 0;

  arr
    .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]))
    .forEach((a) => {
      if (end <= a[0]) {
        count++;
        end = a[1];
      }
    });

  return count;
}

const arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];

const arr2 = [
  [3, 3],
  [2, 3],
  [1, 3],
];

solution(arr);
