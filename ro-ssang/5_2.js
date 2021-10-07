const n = 5;
const arr1 = [1, 3, 9, 5, 2];
const m = 5;
const arr2 = [3, 2, 5, 7, 8];

function solution(n, arr1, m, arr2) {
  let answer = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let p1 = 0;
  let p2 = 0;
  while (p1 < n && p2 < m) {
    if (arr1[p1] == arr2[p2]) {
      answer.push(arr1[p1]);
      p1++;
      p2++;
    } else if (arr1[p1] < arr2[p2]) {
      p1++;
    } else {
      p2++;
    }
  }
  return answer.join(' ');
}

console.log(solution(n, arr1, m, arr2));
