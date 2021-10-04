/**
 * 문제
 *
 * 좌표 정렬
 *
 */

/**
 * 접근 방법
 *
 * 2차원 배열의 첫번째 인덱스 값들끼리 비교를 하고 같다면 두번째 인덱스 값을 비교해서 정렬한다.
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
