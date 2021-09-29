/**
 * 문제
 *
 * 좌표 정렬
 *
 */

/**
 * 접근 방법
 *
 * 이중 for문을 통해 행을 더한 값, 열을 더한 값을 구하자
 * 대각선을 sum을 구하는건 음...
 *
 */

function solution(arr) {
  return arr.sort((a, b) => {
    return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
  });
}

const arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];

solution(arr);
