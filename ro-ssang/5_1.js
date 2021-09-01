const n = 3;
const arr1 = [1, 3, 5];
const m = 5;
const arr2 = [2, 3, 6, 7, 9];

function solution(n, arr1, m, arr2) {
  const answer = [];
  let p1 = 0;
  let p2 = 0;
  while (p1 < n && p2 < m) {
    if (arr1[p1] < arr2[p2]) {
      answer.push(arr1[p1]);
      p1++;
    } else {
      answer.push(arr2[p2]);
      p2++;
    }
  }
  while (p1 < n) {
    answer.push(arr1[p1]);
    p1++;
  }
  while (p2 < m) {
    answer.push(arr2[p2]);
    p2++;
  }
  return answer.join(' ');
}

console.log(solution(n, arr1, m, arr2));
