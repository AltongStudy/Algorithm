/**
 * 멘토링
 *
 */

/**
 * 문제 접근 방법
 *
 * brutal force - 모든 경우의 수를 찾아본다
 * 모든 경우의 수를 찾아보아야 하기 때문에 nested for loop 를 사용해야 한다
 * 수를 구하는 문제이기 때문에 answer를 0으로 초기화 한다.
 *
 */

function solution(testCount, studentCount, arr) {
  let answer = 0;
  for (let i = 1; i <= testCount; i++) {
    for (let j = 1; j <= testCount; j++) {
      let count = 0;
      for (let k = 0; k < studentCount; k++) {
        let pi = 0;
        let pj = 0;
        for (let s = 0; s < testCount; s++) {
          if (arr[k][s] === i) pi = s;
          if (arr[k][s] === j) pj = s;
        }
        if (pi < pj) count++;
      }
      if (count === studentCount) answer++;
    }
  }
  return answer;
}

const studentCount = 4;
const testCount = 3;
const arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

console.log(solution(testCount, studentCount, arr));
