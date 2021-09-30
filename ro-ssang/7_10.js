const [n, m] = [8, 32];
const numbers = [23, 87, 65, 12, 57, 32, 99, 81];

function solution(n, m, numbers) {
  numbers.sort((a, b) => a - b);
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (numbers[mid] == m) {
      return mid + 1;
    } else if (numbers[mid] < m) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}

console.log(solution(n, m, numbers));
