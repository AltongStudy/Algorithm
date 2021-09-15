/**
 * 장난꾸러기 현수
 *
 * 접근 방법
 *
 * sorting을 통해 원래의 순서를 만들고
 * for loop를 통해 비교를 하여 다른 index를 저장하고 return 한다.
 *
 */

function solution(arr) {
  const sortedArr = [...arr].sort((a, b) => a - b);
  let answer = [];
  let index = 0;
  while (answer.length !== 2) {
    if (sortedArr[index] !== arr[index]) {
      answer.push(index + 1);
    }
    index++;
  }
  return answer;
}

const arr = [120, 125, 152, 130, 135, 135, 143, 127, 160];
const arr2 = [120, 130, 150, 150, 130, 150];

console.log(solution(arr2));
