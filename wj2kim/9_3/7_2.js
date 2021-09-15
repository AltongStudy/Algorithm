/**
 * 버블정렬
 *
 */

/**
 * 접근 방법
 *
 * 이중포문을 이용하고
 * 첫번째 index와 해당 index + 1의 값을 계속해서 교체한다
 *
 */

function solution(arr) {
  // bubble sort
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return answer;
}

const arr = [13, 5, 11, 7, 23, 15];

console.log(solution(arr));
