/**
 * 문제
 *
 * 이분검색
 *
 */

/**
 * 접근 방법
 *
 * 강의를 참고하였다.
 * 주어진 배열을 오름차순으로 정렬한다.
 * parseInt를 통해 배열의 mid index 값을 구한다.
 * mid index 값을 가지고 while 문을 통해 반씩 쪼개며 대상 넘버를 찾는다.
 *
 */

function solution(target, arr) {
  let answer;
  arr.sort((a, b) => a - b); // 오름차순 정렬
  let lt = 0,
    rt = arr.length - 1;

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (arr[mid] === target) {
      answer = mid + 1; // index 번호
      break;
    } else if (arr[mid] > target) {
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return answer;
}

const target = 32;

const arr = [23, 87, 65, 12, 57, 32, 99, 81];

solution(target, arr);
