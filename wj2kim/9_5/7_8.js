/**
 * 문제
 *
 * 결혼식
 *
 */

/**
 * 접근 방법
 *
 * 강의를 참고하였다.
 * 주어진 2차원 배열의 input을 시작시간과 끝시간을 구분하여 timeLine이라는 배열로 다시 만든다.
 * timeLine 배열을 정렬한다. 시간이 같으면 charCodeAt을 통해 end가 start 보다 먼저 정렬되도록 만든다.
 * 순회를 하며 index[1] 의 값이 s 면 count를 올리고 아니면 내린다.
 *
 */

function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let timeLine = [];
  for (let x of arr) {
    timeLine.push([x[0], "s"]);
    timeLine.push([x[1], "e"]);
  }
  timeLine.sort((a, b) =>
    a[0] === b[0] ? a[1].charCodeAt() - b[1].charCodeAt() : a[0] - b[0]
  );
  let count = 0;
  for (let x of timeLine) {
    x[1] === "s" ? count++ : count--;
    answer = Math.max(answer, count);
  }

  return answer;
}

const arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];

solution(arr);
