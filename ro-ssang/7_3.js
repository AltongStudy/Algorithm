const n = 8;
const numbers = [1, 2, 3, -3, -2, 5, 6, -6];

function solution(n, numbers) {
  let end = 0;
  for (let i = 0; i < n; i++) {
    if (numbers[i] < 0) {
      for (let j = i; j > end; j--) {
        [numbers[j - 1], numbers[j]] = [numbers[j], numbers[j - 1]];
      }
      end++;
    }
  }
  return numbers.join(' ');
}

console.log(solution(n, numbers));
