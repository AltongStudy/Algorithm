const [n, c] = [5, 3];
const stable = [1, 2, 8, 4, 9];

function solution(n, c, stable) {
  let answer;
  stable.sort((a, b) => a - b);
  let left = 1;
  let right = stable[n - 1] - stable[0];
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let count = 1;
    let idx = 0;
    for (let i = 1; i < n; i++) {
      if (stable[i] - stable[idx] >= mid) {
        count++;
        idx = i;
      }
    }
    if (count < c) {
      right = mid - 1;
    } else {
      answer = mid;
      left = mid + 1;
    }
  }
  return answer;
}

console.log(solution(n, c, stable));
