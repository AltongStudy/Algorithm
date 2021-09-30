/**
 * 문제
 *
 * 뮤직비디오 (결정알고리즘)
 *
 */

/**
 * 접근 방법
 *
 * 강의를 참고하였다.
 * 주어진 배열에서 가장 큰 수를 lt로 정의하고
 * 배열 값들의 sum 값을 rt로 정의하여
 * 이분검색을 한다.
 * count라는 함수에 배열과 용량을 인자로 전달하고 몇개의 dvd가 필요한지 구한다.
 */

function count(songs, capacity) {
  let count = 1, // dvd 한장은 무조건 필요하니까 1로 초기화
    sum = 0;
  for (let x of songs) {
    if (sum + x > capacity) {
      count++;
      sum = x;
    } else {
      sum += x;
    }
  }
  return count;
}

function solution(target, arr) {
  let answer;

  // max 값 찾기
  let lt = Math.max(...arr);
  let rt = arr.reduce((a, b) => a + b, 0);
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(arr, mid) <= target) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return answer;
}

const target = 3;

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

solution(target, arr);
