/**
 * LRU 카카오 캐시 변형
 *
 * 접근 방법
 *
 * 주어진 길이만큼 answer 배열을 0으로 초기화 한다.
 * 주어진 arr 배열을 for loop를 통해 answer 배열의 값들과 비교를 한다.
 * 같은 값이 없으면 unshift 를 통해서 맨 앞에 삽입한다.
 * 만약 같은 값이 있으면 해당 값과 다음 index 값의 위치를 swap 시켜준다.
 * 이렇게 되면 결국 같은 값은 answer의 가장 마지막 index에 위치하게 되는데 pop을 통해 제거를 하고
 *
 */

function solution(size, arr) {
  let answer = new Array(size).fill(0);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < answer.length; j++) {
      if (answer[j] === arr[i] && answer[j + 1] !== undefined) {
        [answer[j], answer[j + 1]] = [answer[j + 1], answer[j]];
      }
    }
    answer.pop();
    answer.unshift(arr[i]);
  }

  return answer;
}

const size = 5;
const arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];

console.log(solution(size, arr));
