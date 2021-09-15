/**
 * 선택정렬
 *
 */

/**
 * 접근 방법
 *
 * 이중포문을 이용하여 첫번째 index의 값 보다 큰 index의 값을 변경한다.
 *
 */

function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length; i++) {
    let index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[index]) index = j;
    }
    [arr[i], arr[index]] = [arr[index], arr[i]];
  }
  return answer;
}

const arr = [13, 5, 11, 7, 23, 15];

console.log(solution(arr));
