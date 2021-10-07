const n = 6;
const numbers = [1, 3, 5, 6, 7, 10];

function solution(n, numbers) {
  let result = false;
  const total = numbers.reduce((a, b) => a + b);

  function recursive(idx, sum) {
    if (result) return;
    if (idx >= n) {
      if (total - sum == sum) result = true;
    } else {
      sum += numbers[idx];
      recursive(idx + 1, sum);
      sum -= numbers[idx];
      recursive(idx + 1, sum);
    }
  }

  recursive(0, 0);

  return result ? 'YES' : 'NO';
}

console.log(solution(n, numbers));
